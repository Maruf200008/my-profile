const Contact = () => {
  return (
    <div className=" w-full h-[1150px] md:h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className=" max-w-screen-lg flex flex-col p-4 justify-center mx-auto h-full">
        <div className=" pb-8 mt-[350px] md:mt-[150px]">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className=" py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/d7bad69b-395c-4380-ad72-97e17a446789"
            method="POST"
            className=" flex flex-col w-full gap-y-5 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Enter message"
              name="message"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets talk{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
