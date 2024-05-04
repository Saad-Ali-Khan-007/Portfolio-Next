import Image from "next/image";
const Expertise = () => {
  return (
    <div>
      <h1 className="text-center text-gray-300 text-4xl pt-10 pb-10">
        My Expertise
      </h1>
      <div className="flex items-center gap-10 w-full">
        <div className="flex flex-col justify-center space-y-4 w-[50%] bg-[#222222] p-4 rounded-lg">
          <Image src="/frontend.png" alt="frontend" width={100} height={100} />
          <h1 className="text-3xl font-bold">Frontend Development</h1>
          <p>
            As an experienced frontend developer, I am deeply passionate about
            crafting visually stunning and highly functional user interfaces. I
            have dedicated myself to continuously improving my skills and
            staying abreast of the latest technologies.
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-4 w-[50%] bg-[#222222] p-4 rounded-lg">
          <Image src="/backend.png" alt="backend" width={100} height={100} />
          <h1 className="text-3xl font-bold">Backend Development</h1>
          <p>
            I am fervently committed to architecting robust and efficient
            systems that power seamless digital experiences.I've dedicated
            myself to mastering my craft and staying at the forefront of
            emerging technologies and methodologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
