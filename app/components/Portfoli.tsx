import Link from "next/link";
import {
  homeLand,
  ieltsClone,
  landingPage,
  ollyo,
  salon,
  shortly,
} from "../../public/assets";

import Image from "next/image";

const Portfoli = () => {
  const portfolis = [
    {
      id: 1,
      src: shortly,
      siteLink: "https://relaxed-halva-74798e.netlify.app",
      githubLink: "https://github.com/Maruf200008/shortly",
    },
    {
      id: 2,
      src: homeLand,
      siteLink: "https://real-state-website-kappa.vercel.app",
      githubLink: "https://github.com/Maruf200008/real-state-website",
    },
    {
      id: 3,
      src: ollyo,
      siteLink: "https://ollyo-clone.vercel.app",
      githubLink: "https://github.com/Maruf200008/ollyo-clone",
    },
    {
      id: 4,
      src: ieltsClone,
      siteLink: "https://strong-genie-7f43f1.netlify.app",
      githubLink: "https://github.com/Maruf200008/ielts-clone",
    },
    {
      id: 5,
      src: landingPage,
      siteLink: "https://funny-gnome-ef52d0.netlify.app",
      githubLink: "https://github.com/Maruf200008/tailwindCss-LandingPage",
    },
    {
      id: 6,
      src: salon,
      siteLink: "https://starlit-zabaione-a5b948.netlify.app",
      githubLink: "github.com/Maruf200008/Gym-brain",
    },
  ];
  return (
    <div className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 mt-[350px] md:mt-0">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolis.map(({ src, id, siteLink, githubLink }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={src}
                alt="images"
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center">
                <Link
                  href={siteLink}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </Link>
                <Link
                  href={githubLink}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfoli;
