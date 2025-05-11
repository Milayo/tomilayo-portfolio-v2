import Button from "@/constants/button";
import Image from "next/image";
import { LuAlignCenterHorizontal } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="flex justify-between my-12 px-30 tracking-wide">
      <div className="self-center space-y-12">
        <h2 className="text-4xl font-bold">
          Tomilayo is a <span className="text-green-600">web designer</span>
          <br /> and{" "}
          <span className="text-green-600">front-end developer.</span>
        </h2>
        <p className="font-medium text-[#ABB2BF]">
          She crafts responsive websites where technologies
          <br />
          meet creativity.
        </p>
        <Button>Contact me!!</Button>{" "}
      </div>

      <div className="">
        <LuAlignCenterHorizontal />
        <Image src="/assets/Image.png" width={400} height={80} />{" "}
        <div className="flex items-center justify-center gap-4 border border-green-600 p-4">
          <div className="border border-green-600 p-3 w-1/12 bg-green-600"></div>
          <p>
            Currently working on <span className="font-bold">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
