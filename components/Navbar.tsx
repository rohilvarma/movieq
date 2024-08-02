import Link from "next/link";
import { raleway } from "@/lib/fonts";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="border-b-2 py-4">
      <div className="max-w-lg mx-auto flex justify-center items-center relative">
        <Link
          href={"/"}
          className={`${raleway.className} text-3xl text-center`}
        >
          MovieQ
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
