import Image from "next/image";
import {
  css,
  github,
  graphql,
  html,
  javascript,
  nextjs,
  react,
  tailwind,
} from "../../public/assets";

const Experince = () => {
  const teach = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQl",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className=" max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div className=" mt-[350px] md:mt-[250px]">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-400 ">
            Experince
          </p>
          <p className=" py-6">
            Thise are the technologies I well be worked with{" "}
          </p>
        </div>

        <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 md:px-0 ">
          {teach.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style} cursor-pointer`}
            >
              <Image src={src} alt="html" className=" w-20 mx-auto" />
              <p className=" mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experince;
