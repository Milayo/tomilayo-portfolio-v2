// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const WorkSection = () => {
//   const containerRef = useRef(null);

//   const projects = [
//     { img: "/assets/veriface.png", link: "/" },
//     { img: "/assets/seer.png", link: "/" },
//     { img: "/assets/podcast.png", link: "/" },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=" + window.innerHeight * projects.length,
//           scrub: true,
//           pin: true,
//         },
//       });

//       projects.forEach((_, index) => {
//         const panel = `.project-panel-${index}`;
//         timeline.fromTo(
//           panel,
//           { yPercent: index === 0 ? 20 : 100 }, // First card starts closer
//           { yPercent: 0, duration: 1.001 },
//           index * 1.05
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-screen overflow-hidden"
//     >
//       <p className="text-lg text-green-900 mx-30 pt-20 z-10 relative">#work</p>

//       <div className="absolute inset-0">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={`project-panel-${index} absolute inset-0 flex items-center justify-center`}
//             style={{ zIndex: index + 1 }}
//           >
//             <Image
//               src={project.img}
//               alt={`Work ${index}`}
//               width={1000}
//               height={500}
//               className="w-4/5 h-auto object-cover rounded-xl shadow-lg"
//             />
//             {/* <div className="mt-6">
//             <Button>
//               <Link
//                 href={project.link}
//                 className="flex items-center justify-center gap-x-0.5"
//               >
//                 Visit website <PiArrowSquareUpRightLight size={20} />
//               </Link>
//             </Button>
//           </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkSection;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const projects = [
    { img: "/assets/veriface.png", link: "/" },
    { img: "/assets/seer.png", link: "/" },
    {
      img: "/assets/creatipp.png",
      link: "/",
    },
    { img: "/assets/podcast.png", link: "https://my-podcast-one.vercel.app/" },
  ];

  return (
    <div id="work" className="px-5 lg:px-15 relative border border-red-700">
      <p className="text-base sm:text-lg text-green-900">#work</p>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-panel-${index} sticky h-[100vh] top-0 inset-0 flex items-center justify-center`}
          style={{ top: `0.5rem`, zIndex: index + 1 }}
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
              className="lg:w-4/5 m-auto object-contain rounded-2xl shadow-lg"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
