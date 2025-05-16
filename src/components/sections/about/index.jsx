"use client";
import Image from "next/image";
import useScrambleTextCursorEffect from "@/lib/scrambletextonhover";

const AboutSection = () => {
  return (
    <div className="px-15 pt-16 space-y-8">
      <p className="text-base sm:text-lg text-green-900">#about</p>

      <h3 className="text-3xl font-semibold">
        I <i>design</i> digital interfaces
        <span className="text-green-600">:</span>
      </h3>

      <div className="text-lg text-[#ABB2BF] mt-5">
        From a young age, I've been fascinated by the world of computers and
        software. Features like copy, paste, and undo seemed magical and touch
        screens were a joy to use. Along the way, I've developed a keen interest
        in visual design, and found my calling to digital Product Design. I am a
        UI/UX designer with a passion for creating user-friendly and visually
        appealing digital experiences. My goal is to design interfaces that are
        not only aesthetically pleasing but also intuitive and easy to navigate.
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
        <h3 className="text-3xl font-semibold mt-12">
          I've <i>worked</i> across different domains
          <span className="text-green-600">:</span>
        </h3>
        <div className="space-y-8 mt-8 text-[#ABB2BF] text-lg">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-green-600">Software Developer</h2>{" "}
              <span>@ Bitrefill</span>
            </div>
            <div>2022 - 2023</div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-green-600">Software Developer</h2>{" "}
              <span>@ Bitrefill</span>
            </div>
            <div>2022 - 2023</div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-green-600">Software Developer</h2>{" "}
              <span>@ Bitrefill</span>
            </div>
            <div>2022 - 2023</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-semibold mt-20">
          and <i>acquired</i> different skills
          <span className="text-green-600">:</span>
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
