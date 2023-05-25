"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" flex justify-between items-center w-full h-20 text-white fixed bg-black px-10 ">
      <div>
        <h1 className=" text-5xl font-signature ml-2">Maruf</h1>
      </div>
      <ul className=" hidden md:flex items-center gap-x-6 font-semibold">
        <Link
          href="#"
          className=" cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
        >
          home
        </Link>
        <Link
          className=" cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
          href="#"
        >
          about
        </Link>
        <Link
          href="#"
          className=" cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
        >
          portfolio
        </Link>
        <Link
          href="#"
          className=" cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
        >
          experience
        </Link>
        <Link
          href="#"
          className=" cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
        >
          contact
        </Link>
      </ul>

      <div
        className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          <Link
            href="#"
            className=" px-4 cursor-pointer capitalize py-6 text-3xl"
          >
            home
          </Link>
          <Link
            className=" px-4 cursor-pointer capitalize py-6 text-3xl"
            href="#"
          >
            about
          </Link>
          <Link
            href="#"
            className=" px-4 cursor-pointer capitalize py-6 text-3xl"
          >
            portfolio
          </Link>
          <Link
            href="#"
            className=" px-4 cursor-pointer capitalize py-6 text-3xl"
          >
            experience
          </Link>
          <Link
            href="#"
            className=" px-4 cursor-pointer capitalize py-6 text-3xl"
          >
            contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
