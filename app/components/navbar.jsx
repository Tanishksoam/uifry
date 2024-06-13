import Image from "next/image";
import React from "react";
import { Logo } from "../../public/assets";

const Navbar = () => {
  return (
    <div className="w-full flex  justify-between items-center bg-transparent px-10 md:pl-20 md:pr-40">
      <div className=" w-full flex justify-start items-center gap-8">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={120}
            height={60}
            className="w-[120px]"
          />
        </div>
        <div className=" w-full hidden sm:flex justify-start items-start">
          <ul className="w-full flex justify-start items-center gap-4 font-normal]">
            <li className=" hover:font-semibold hover:text-[#FF5555] cursor-pointer">
              Home
            </li>
            <li className="hover:font-semibold hover:text-[#FF5555] cursor-pointer">
              About Us
            </li>
            <li className="hover:font-semibold hover:text-[#FF5555] cursor-pointer">
              Pricing
            </li>
            <li className="hover:font-semibold hover:text-[#FF5555] cursor-pointer">
              Features
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#000000]  text-[#ffffff] rounded-md hover:bg-opacity-70 transition font-semibold shadow-md">
          Download
        </button>
      </div>
    </div>
  );
};

export default Navbar;
