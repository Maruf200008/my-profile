import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLink = () => {
  return (
    <div className=" hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <Link
          target=" _blank"
          href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a/"
          className=" flex justify-between items-center w-48 h-14 ml-[-120px] hover:rounded-md duration-300 hover:ml-[-10px] px-6  bg-slate-500 text-white"
        >
          Linkedin <FaLinkedin size={30} />
        </Link>
        <Link
          href="https://github.com/Maruf200008"
          target=" _blank"
          className=" flex justify-between items-center w-48 h-14 ml-[-120px] hover:rounded-md duration-300 hover:ml-[-10px] px-6  bg-slate-500 text-white"
        >
          Github <FaGithub size={30} />
        </Link>
        <Link
          target=" _blank"
          href="mailto:mohammadmarufgazi@gmail.com"
          className=" flex justify-between items-center w-48 h-14 ml-[-120px] hover:rounded-md duration-300 hover:ml-[-10px] px-6  bg-slate-500 text-white"
        >
          Mail <HiOutlineMail size={30} />
        </Link>
        <Link
          href="#"
          className=" flex justify-between items-center w-48 h-14 ml-[-120px] hover:rounded-md duration-300 hover:ml-[-10px] px-6  bg-slate-500 text-white"
          download={true}
        >
          Resume <BsFillPersonFill size={30} />
        </Link>
      </ul>
    </div>
  );
};

export default SocialLink;
