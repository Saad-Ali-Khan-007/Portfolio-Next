import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="p-10 w-full" id="projects">
      <h1 className="text-center text-gray-300 text-4xl font-bold pt-6 pb-6">
        My projects
      </h1>
      <div className="flex items-center gap-10 w-full justify-center flex-wrap xl:flex-nowrap">
        <Link
          href="https://github.com/Saad-Ali-Khan-007/Social-media-react"
          target="_blank"
          className="flex flex-col justify-center space-y-4 md:w-[45%] bg-[#222222] p-4 rounded-lg cursor-pointer"
        >
          <div className="w-[18rem] -mt-6 -ml-6 h-[15rem] lg:-mt-10 xl:-ml-0 xl:w-[30rem] xl:h-[20rem] transition hover:scale-125">
            <Image src="/connect.svg" alt="frontend" width={400} height={400} />
          </div>
          <h1 className="text-3xl font-bold">Connect</h1>
          <p>
            Connect is a social media web application built using react where
            users can connect with friends, share updates, and engage with
            content through likes and comments.This frontend communicates with a
            Django REST Framework backend to fetch posts and hepl us stay
            connected.
          </p>
        </Link>
        <Link
          href="https://github.com/Saad-Ali-Khan-007/Ecommerce-React-Frontend"
          target="_blank"
          className="flex flex-col justify-center space-y-4 md:w-[45%] bg-[#222222] p-4 rounded-lg cursor-pointer"
        >
          <div className="w-[18rem] -ml-6 h-[15rem] xl:-ml-0 xl:w-[28rem] xl:h-[18rem] transition hover:scale-125">
            <Image src="/Group 2.svg" alt="frontend" width={400} height={400} />
          </div>
          <h1 className="text-3xl font-bold">SHOP.CO</h1>
          <p>
            This is an E-commerce web application built using React. It provides
            a user interface for customers to browse products, add them to the
            cart, and complete the checkout process. This frontend communicates
            with a Django REST Framework backend.
          </p>
        </Link>
        <Link
          href="https://github.com/Saad-Ali-Khan-007/lms-frontend"
          target="_blank"
          className="flex flex-col justify-center space-y-4 md:w-[48%] bg-[#222222] p-4 rounded-lg cursor-pointer"
        >
          <div className="w-[18rem] -ml-6 h-[15rem] xl:-ml-0 xl:w-[28rem] xl:h-[18rem] hover:scale-110 ">
            <Image
              src="/Rectangle-1.svg"
              alt="backend"
              width={350}
              height={350}
            />
          </div>
          <h1 className="text-3xl font-bold">Learning Management System</h1>
          <p>
            This project is a full-stack Learning Management System (LMS)
            inspired by platforms like Udemy. It provides a comprehensive
            solution for managing courses, instructors, students, and various
            learning materials.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
