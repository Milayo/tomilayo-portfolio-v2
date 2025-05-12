import Button from "@/constants/button";
import Image from "next/image";
import { LuAlignCenterHorizontal } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="flex justify-between my-25 px-35 tracking-wide">
      <div className="space-y-12 flex flex-col  justify-center">
        <h2 className="text-9xl font-bold text-center">
          Tomilayo is a <br />{" "}
          <span className="text-green-900">web designer</span>
          <br /> and{" "}
          <span className="text-green-900">front-end developer.</span>
        </h2>
        {/* <p className="font-medium text-[#ABB2BF]">
          She crafts responsive websites where technologies
          <br />
          meet creativity.
        </p>
        <Button>Contact me!!</Button>{" "} */}
      </div>

      {/* <div className="relative">
        <LuAlignCenterHorizontal
          size={120}
          className="absolute text-green-600 opacity-20 left-5 top-15 -z-10"
        />
        <Image src="/assets/Image.png" width={400} height={80} />{" "}
        <div className="flex items-center justify-center gap-4 border border-green-600 p-3">
          <div className="border border-green-600 p-3 w-1/12 bg-green-600"></div>
          <p>
            Currently working on <span className="font-bold">Portfolio</span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
