import React from "react";
import ScrambleTextCursorEffect from "@/lib/scrambletextonhover";

const AboutSection = () => {
  return (
    <div className="mx-30 p-5 py-20 space-y-4">
      <p className="text-lg text-green-900">#about</p>

      <h3 className="text-3xl font-semibold">
        I <i>design</i> digital interfaces
      </h3>

      <ScrambleTextCursorEffect
        text={`From a young age, I've been fascinated by the world of computers and software. Features like copy, paste, and undo seemed magical and touch screens were a joy to use. Along the way, I've developed a keen interest in visual design, and found my calling to digital Product Design. I am a UI/UX designer with a passion for creating user-friendly and visually appealing digital experiences. My goal is to design interfaces that are not only aesthetically pleasing but also intuitive and easy to navigate.`}
        className="text-2xl text-[#ABB2BF] mt-5 cursor-default"
      />
    </div>
  );
};

export default AboutSection;
