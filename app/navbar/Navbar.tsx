import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-[#222222] flex justify-around items-center">
      <div>
        <Image
          src="/signature.png"
          alt="name logo"
          className="pt-4 -ml-8"
          width={300}
          height={300}
        />
      </div>
      <div>
        <ul className="flex space-x-8">
          <Link href="#home" className="text-white">
            Home
          </Link>
          <Link href="#expertise" className="text-white">
            Expertise
          </Link>
          <Link href="#projects" className="text-white">
            Project
          </Link>
          <Link href="#experience" className="text-white">
            Experience
          </Link>
          <Link href="#" className="text-white">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
