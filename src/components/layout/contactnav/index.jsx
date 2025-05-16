// import React from "react";
// import {
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillTwitterCircle,
// } from "react-icons/ai";

// const ContactNav = () => {
//   return (
//     <div className="ml-4 h-100 fixed top-0 space-y-5 ">
//       <div className="border-l-1 border-[#ABB2BF] h-3/4 mx-3"></div>
//       <div className="flex flex-col gap-4 items-center">
//         <AiFillGithub size={25} className="text-[#ABB2BF]" />
//         <AiFillLinkedin size={25} className="text-[#ABB2BF]" />
//         <AiFillTwitterCircle size={25} className="text-[#ABB2BF]" />
//       </div>
//     </div>
//   );
// };

// export default ContactNav;

import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const ContactNav = () => {
  return (
    <div className="hidden sm:flex fixed top-0 left-4 flex-col items-center space-y-5 z-50">
      <div className="border-l border-[#ABB2BF] h-72"></div>
      <div className="flex flex-col gap-4 items-center">
        <AiFillGithub size={25} className="text-[#ABB2BF] cursor-pointer" />
        <AiFillLinkedin size={25} className="text-[#ABB2BF] cursor-pointer" />
        <AiFillTwitterCircle
          size={25}
          className="text-[#ABB2BF] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactNav;
