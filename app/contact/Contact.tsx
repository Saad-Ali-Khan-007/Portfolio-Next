import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="p-10" id="contact">
      <h1 className="text-center font-bold text-gray-300 text-4xl pt-6 pb-10">
        Contact Me
      </h1>
      <div className="flex justify-center items-center gap-10 max-sm:flex-wrap">
        <Link
          href="https://www.linkedin.com/in/saad-ali-khan-5a2a382ba/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="linkedin" width={100} height={100} />
        </Link>
        <Link target="_blank" href="https://github.com/Saad-Ali-Khan-007">
          <Image src="/github.png" alt="github" width={100} height={100} />
        </Link>
        <Link target="_blank" href={"mailto:saadalikhan041@gmail.com"}>
          <Image src="/gmail.png" alt="gmail" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
