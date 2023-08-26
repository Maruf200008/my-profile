import { maruf } from "@/public/assets";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="   h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" text-white flex flex-col justify-center h-full space-y-5">
          <h2 className="  text-4xl md:text-7xl font-bold mt-[350px] md:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Im a Frontend Developer
          </h2>
          <p className=" text-gray-400 max-w-md">
            I have 2.5 years experience Web Developer. I love to work on Web
            Application using technologies like : React, TailwindCss, Redux,
            Next JS & Node JS
          </p>
          <div>
            <button className=" group px-6 py-3 my-2 md:w-fit flex justify-center w-full items-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Portfolio{" "}
              <span className=" group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className=" ml-1" />
              </span>{" "}
            </button>
          </div>
        </div>
        <div>
          <Image
            src={maruf}
            alt="hero image"
            className=" rounded-2xl mx-auto  mt-11 md:mt-0  w-full md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
