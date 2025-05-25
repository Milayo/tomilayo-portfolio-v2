"use client";

import Image from "next/image";

const WorkSection = () => {
  const projects = [
    { img: "/assets/veriface.png", link: "https://veriface.vercel.app/" },
    { img: "/assets/seer.png", link: "https://seernft-app.vercel.app/" },
    { img: "/assets/creatipp.png", link: "https://creatipp.vercel.app/" },
    { img: "/assets/podcast.png", link: "https://my-podcast-one.vercel.app/" },
  ];

  return (
    <div id="work" className="relative lg:px-15 px-5">
      <p className="text-base sm:text-lg text-green-900 sticky top-0 z-50 py-2">
        #work
      </p>

      {projects.map((project, index) => (
        <div
          key={index}
          className="sticky top-0 h-[40vh] lg:h-screen"
          style={{ zIndex: projects.length + index }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex"
          >
            <Image
              src={project.img}
              alt={`Work ${index}`}
              width={1000}
              height={1500}
              className="w-full lg:w-6xl m-auto object-contain rounded-2xl shadow-lg"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
