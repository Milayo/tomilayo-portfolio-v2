"use client";

import { useRef } from "react";
import { skills } from "@/lib/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const scope = useRef(null); // outer wrapper
  const scrollTrack = useRef(null); // moving inner container

  useGSAP(
    () => {
      if (!scrollTrack.current) return;

      gsap.to(scrollTrack.current, {
        x: () => `-${scrollTrack.current.scrollWidth / 2}`,
        ease: "none",
        scrollTrigger: {
          trigger: scrollTrack.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <div
      className="overflow-hidden border-y-2 border-[#ABB2BF] my-20 mb-10 mx-15 p-5"
      ref={scope}
    >
      <div className="flex gap-x-5 w-max" ref={scrollTrack}>
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
    </div>
  );
};

export default SkillsSection;
