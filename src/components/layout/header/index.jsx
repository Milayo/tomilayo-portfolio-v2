// import Link from "next/link";
// import { LuAlignCenterHorizontal } from "react-icons/lu";

// const Header = () => {
//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 flex justify-between px-25 pt-8 pb-2 tracking-wide shadow-md">
//       <div className="flex items-center gap-1">
//         {/* <LuAlignCenterHorizontal size={25} /> */}
//         {/* <p className="font-medium">Tomilayo</p> */}
//       </div>
//       <nav className="flex gap-4 items-center">
//         <Link href="/">
//           <span className="text-green-800">#</span>home
//         </Link>
//         <Link href="/about">
//           <span className="text-green-800">#</span>about
//         </Link>
//         <Link href="/work">
//           <span className="text-green-800">#</span>work
//         </Link>
//         <Link href="/contact">
//           <span className="text-green-800">#</span>contact
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import Link from "next/link";
import { LuAlignCenterHorizontal } from "react-icons/lu";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-32 pt-6 pb-3 tracking-wide ">
      <div className="flex items-center gap-1">
        {/* <LuAlignCenterHorizontal size={25} />
        <p className="font-medium">Tomilayo</p> */}
      </div>
      <nav className="flex gap-3 sm:gap-5 md:gap-6 text-sm sm:text-base items-center">
        <Link href="/">
          <span className="text-green-800">#</span>home
        </Link>
        <Link href="/about">
          <span className="text-green-800">#</span>about
        </Link>
        <Link href="/work">
          <span className="text-green-800">#</span>work
        </Link>
        <Link href="/contact">
          <span className="text-green-800">#</span>contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
