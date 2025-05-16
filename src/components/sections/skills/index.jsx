"use client";

import { useRef, useLayoutEffect } from "react";
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
        const distance = -scrollTrack1.current.scrollWidth / 2;

        gsap.to(scrollTrack1.current, {
          x: distance,
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
        const distance = -scrollTrack2.current.scrollWidth / 2;

        gsap.set(scrollTrack2.current, { x: distance });

        gsap.to(scrollTrack2.current, {
          x: 0,
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

  return (
    <div ref={scope} className="overflow-hidden mt-12 mx-15">
      <div
        ref={scrollTrack1}
        style={{ willChange: "transform" }}
        className="border-y-2 border-[#ABB2BF] p-8 flex gap-x-5 w-max"
      >
        {skills.map((skill, index) => (
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
        style={{ willChange: "transform" }}
        className="border-b-2 border-[#ABB2BF] p-8 flex gap-x-5 w-max"
      >
        {skills2.map((skill, index) => (
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
