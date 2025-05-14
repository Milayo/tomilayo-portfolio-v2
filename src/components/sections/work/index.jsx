"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/constants/button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowSquareUpRightLight } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const containerRef = useRef(null);

  const projects = [
    { img: "/assets/veriface.png", link: "/" },
    { img: "/assets/seer.png", link: "/" },
    { img: "/assets/podcast.png", link: "/" }, // last one
  ];

  useEffect(() => {
    const panels = gsap.utils.toArray(".project-panel");

    panels.forEach((panel, i) => {
      // Pin only first n - 1 panels
      if (i !== panels.length - 1) {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-x-hidden"
    >
      <p className="text-lg text-green-900 mx-30 pt-20">#work</p>

      {projects.map((project, index) => (
        <div
          key={index}
          className="project-panel w-full h-screen relative flex flex-col items-center justify-center"
        >
          <Image
            src={project.img}
            alt={`Work ${index}`}
            width={1000}
            height={500}
            className="w-4/5 h-auto object-cover rounded-xl shadow-lg"
          />
          <div className="mt-6">
            <Button>
              <Link
                href={project.link}
                className="flex items-center justify-center gap-x-0.5"
              >
                Visit website <PiArrowSquareUpRightLight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
