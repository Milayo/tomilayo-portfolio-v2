"use client";

import { useRef } from "react";
import { skills, skills2 } from "@/lib/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const scope = useRef(null);
  const scrollTrack1 = useRef(null);
  const scrollTrack2 = useRef(null);

  useGSAP(
    () => {
      if (scrollTrack1.current) {
        gsap.to(scrollTrack1.current, {
          x: () => `-${scrollTrack1.current.scrollWidth / 2}`,
          ease: "none",
          scrollTrigger: {
            trigger: scrollTrack1.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (scrollTrack2.current) {
        // Set initial left offset so it starts off-screen
        gsap.set(scrollTrack2.current, {
          x: () => `-${scrollTrack2.current.scrollWidth / 2}`,
        });

        gsap.to(scrollTrack2.current, {
          x: 0, // Move rightwards
          ease: "none",
          scrollTrigger: {
            trigger: scrollTrack2.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope }
  );

  const duplicateSkills = (list) => [...list, ...list];

  return (
    <div className="overflow-hidden mt-20 mx-15" ref={scope}>
      <div
        ref={scrollTrack1}
        className="border-y-2 border-[#ABB2BF] p-8 flex gap-x-5 w-max"
      >
        {duplicateSkills(skills).map((skill, index) => (
          <div
            key={index}
            className="flex gap-x-2 text-3xl text-[#ABB2BF] uppercase font-semibold transition-colors duration-300 hover:text-green-500 cursor-pointer"
          >
            <skill.Icon />
            {skill.name}
          </div>
        ))}
      </div>

      <div
        ref={scrollTrack2}
        className="border-b-2 border-[#ABB2BF] p-8 flex gap-x-5 w-max"
      >
        {duplicateSkills(skills2).map((skill, index) => (
          <div
            key={index}
            className="flex gap-x-2 text-3xl text-[#ABB2BF] uppercase font-semibold transition-colors duration-300 hover:text-green-500 cursor-pointer"
          >
            <skill.Icon />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
