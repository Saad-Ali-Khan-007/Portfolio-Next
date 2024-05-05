"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
          <ul className="flex max-md:hidden space-x-8 items-center">
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
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleNavbar}
          >
            {isOpen ? "X" : <IoMdMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <ul className="flex bg-[#222222] p-2 text-white relative w-full flex-col  items-center justify-center  font-alonica font-[18px] gap-[1.5rem]">
            <Link href="#home">Home</Link>
            <Link href="#expertise">Expertise</Link>
            <Link href="#projects">Project</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#">Contact</Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
