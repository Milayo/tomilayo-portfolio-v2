import Link from "next/link";
import { LuAlignCenterHorizontal } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex justify-between px-25 pt-8 pb-2 tracking-wide">
      <div className="flex items-center gap-1">
        {/* <LuAlignCenterHorizontal size={25} /> */}
        {/* <p className="font-medium">Tomilayo</p> */}
      </div>
      <nav className="flex gap-4 items-center">
        <Link href="/">
          <span className="text-green-800">#</span>home
        </Link>
        <Link href="/about">
          {" "}
          <span className="text-green-800">#</span>about
        </Link>
        <Link href="/projects">
          {" "}
          <span className="text-green-800">#</span>projects
        </Link>
        <Link href="/contact">
          {" "}
          <span className="text-green-800">#</span>contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
