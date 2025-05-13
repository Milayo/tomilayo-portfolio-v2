"use client";

import Button from "@/constants/button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowSquareUpRightLight } from "react-icons/pi";

const WorkSection = () => {
  const projects = [
    {
      img: "/assets/veriface.png",
      link: "/",
    },
    {
      img: "/assets/seer.png",
      link: "/",
    },
    {
      img: "/assets/podcast.png",
      link: "/",
    },
  ];

  return (
    <div className="mx-30 p-5 py-20 space-y-16">
      <p className="text-lg text-green-900">#work</p>
      {projects.map((project, index) => (
        <div key={index}>
          <Image
            src={project.img}
            alt="Work"
            width={1000}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Button>
            <Link
              href={project.link}
              className="flex items-center justify-center gap-x-0.5"
            >
              Visit website <PiArrowSquareUpRightLight size={20} />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
