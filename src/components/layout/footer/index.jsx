import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Button from "@/constants/button";

const Footer = () => {
  return (
    <div className="mx-30 p-5 py-20 space-y-8 border-t-2 border-[#ABB2BF]">
      <p className="text-lg text-green-900">#contact</p>
      <div className="uppercase text-[#ABB2BF] border border-green-600 rounded-md p-2 w-fit mx-auto">
        Get in touch
      </div>
      <div className="flex gap-4 items-center justify-center">
        <AiFillGithub size={25} className="text-[#ABB2BF]" />
        <AiFillLinkedin size={25} className="text-[#ABB2BF]" />
        <AiFillTwitterCircle size={25} className="text-[#ABB2BF]" />
      </div>
      <div className="text-center text-[#ABB2BF] border-t-2 border-[#ABB2BF] pt-10 mx-80 mt-10">
        <p>© Tomilayo Ijarotimi.</p>
      </div>
    </div>
  );
};

export default Footer;
