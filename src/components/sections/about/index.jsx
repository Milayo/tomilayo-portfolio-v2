"use client";
import Image from "next/image";

const AboutSection = () => {
  const workExperience = [
    {
      title: "Frontend Developer",
      company: "Upwork",
      duration: "2020 - Date",
    },
    {
      title: "Software Developer",
      company: "YieldChain",
      duration: "2022 - 2023",
    },
    {
      title: "Web3 Frontend Developer",
      company: "WomenBuildWeb3",
      duration: "2022 - Date",
    },
  ];
  return (
    <div id="about" className="px-5 lg:px-15 pt-16 space-y-8">
      <p className="text-base sm:text-lg text-green-900">#about</p>

      <h3 className="text-xl lg:text-3xl font-semibold">
        I <i>design</i> digital interfaces
        <span className="text-green-600">:</span>
      </h3>

      <div className="text-base sm:text-lg text-[#ABB2BF] mt-5">
        I’m a frontend developer passionate about creating visually engaging and
        highly interactive web experiences. My journey began with JavaScript,
        and quickly evolved into a broader obsession with clean design, smooth
        animations, and responsive interfaces. Over time, I’ve explored modern
        frontend tools and frameworks like React and Next.js, and extended my
        skills into the decentralized web, building seamless user interfaces for
        Web3 applications.
      </div>

      <div className="h-auto w-1/2 m-auto">
        <Image
          src="/assets/about.png"
          alt="about"
          width={1000}
          height={100}
          className="w-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl lg:text-3xl font-semibold mt-12">
          I've <i>worked</i> across different domains
          <span className="text-green-600">:</span>
        </h3>

        <div className="space-y-8 mt-8 text-[#ABB2BF] lg:text-lg">
          {workExperience.map((experience, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex flex-col">
                <h2 className="text-green-600">{experience.title}</h2>
                <span>@ {experience.company}</span>
              </div>
              <div>{experience.duration}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl lg:text-3xl font-semibold mt-20">
          and <i>acquired</i> different skills
          <span className="text-green-600">:</span>
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
