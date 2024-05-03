import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-[#222222] flex justify-around items-center sticky top-0">
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
          <li className="text-white">Home</li>
          <li className="text-white">Project</li>
          <li className="text-white">Experience</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
