import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import BookMe from "@/components/sections/bookme";

const Footer = () => {
  return (
    <div id="contact" className="m-5 lg:m-15 py-10 space-y-20">
      <p className="text-base sm:text-lg text-green-900">#contact</p>

      <div className="flex gap-4 items-center justify-center">
        <a href="https://github.com/Milayo " target="_blank">
          <AiFillGithub
            size={30}
            className="text-[#ABB2BF] hover:text-green-500 float "
          />
        </a>
        <a href="mailto:moladeijarotimi@gmail.com" target="_blank">
          <IoIosMail
            size={30}
            className="text-[#ABB2BF] hover:text-green-500 float delay-1s"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ijarotimi-tomilayo-219530154/"
          target="_blank"
        >
          <AiFillLinkedin
            size={30}
            className="text-[#ABB2BF] hover:text-green-500 float"
          />
        </a>
        <a href="https://x.com/Mitoraji_tee" target="_blank">
          <AiFillTwitterCircle
            size={30}
            className="text-[#ABB2BF] hover:text-green-500 float delay-2s"
          />
        </a>
      </div>

      <BookMe />

      <div className="text-center text-[#ABB2BF] border-t-2 border-[#4b5060] pt-20 mt-10">
        <p>© 2025 Tomilayo Ijarotimi.</p>
      </div>
    </div>
  );
};

export default Footer;
