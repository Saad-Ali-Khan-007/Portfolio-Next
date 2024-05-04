import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-between items-center pt-16 space-y-10">
      <div className="flex flex-col space-y-10 items-center max-w-[90%] m-auto">
        <Image
          src="/profile.png"
          alt="profile pic"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-5xl text-center leading-[4rem] font-bold">
          "Elevating digital landscapes through the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
            artistry of code!
          </span>
          "
        </h1>
        <p className="text-center text-gray-300 max-w-[90%] m-auto">
          I bring a passion for crafting innovative solutions across the entire
          development stack. With a solid foundation in both front-end and
          back-end technologies, I have honed my skills in building dynamic web
          applications and services. My expertise lies in leveraging
          cutting-edge tools and frameworks to architect scalable solutions that
          meet the demands of modern businesses. Whether it's implementing
          elegant user interfaces or designing robust backend systems, I thrive
          on the challenge of delivering high-quality software solutions."
        </p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-white text-black rounded-[4rem] px-5 py-3 font-bold">
          Get In Touch
        </button>
        <button className="bg-black border-2 border-white rounded-[4rem] px-5 py-3 font-bold">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
