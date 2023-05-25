const About = () => {
  return (
    <div className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 mt-[550px] md:mt-0">
          <p className=" capitalize text-4xl font-bold inline border-b-4 border-gray-500">
            about
          </p>
        </div>
        <p className=" text-xl mt-10 md:mt-20">
          Hi, I am Mohammad Maruf from Chandpur, Bangladesh. Experienced with
          MERN Stack. My academic background is non-technical but still, I take
          my career as a Web Developer because of my interest and curiosity. I
          completed a Web Development course. Where I learned MERN Stack and
          completed 2+ MERN Stack projects as assignments.
        </p>
        <br />
        <p className=" text-xl">
          I always ensure my skills are kept up to date within this rapidly
          changing industry. Within the next three years, I want to see myself
          as a Web Developer. Right now seeking an opportunity to start my
          career and be part of your success
        </p>
      </div>
    </div>
  );
};

export default About;
