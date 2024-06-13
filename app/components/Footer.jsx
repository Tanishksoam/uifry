import React from "react";
import Image from "next/image";
import { Logo } from "../../public/assets";
import { TbMailFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" w-full flex justify-between items-start gap-4 px-8 sm:px-20 py-10">
      <div>
        <ul className=" w-full  flex flex-col flex-wrap sm:flex-nowrap gap-2 justify-start items-start text-xs sm:text-[16px]">
          <li>
            <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={60}
              className=" w-14 sm:w-24 "
            />
          </li>
          <li className=" w-full flex justify-start items-start gap-2">
            <TbMailFilled className=" w-4 h-5 sm:w-6  sm:h-6" color="#ff5555" />
            <h4>help@frybix.com</h4>
          </li>
          <li className=" w-full flex justify-start items-start gap-2">
            <IoCall className=" w-4 h-5 sm:w-6  sm:h-6" color="#ff5555" />
            <h4>+1 234 456 678 89</h4>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" w-full  flex flex-col gap-2 justify-start items-start text-xs sm:text-[16px]">
          <li className=" w-full flex justify-start items-start gap-[2px] sm:gap-2 font-semibold">
            <h4 className=" text-sm sm:text-3xl">Links</h4>
          </li>
          <li>Home</li>
          <li>About Us</li>
          <li>Bookings</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul className=" w-full hidden sm:flex flex-col gap-2 justify-start items-start text-md">
          <li className=" w-full flex justify-start items-start gap-2 font-semibold">
            <h4 className=" text-3xl">Legal</h4>
          </li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
      <div>
        <ul className=" w-full  hidden sm:flex flex-col gap-2 justify-start items-start text-md">
          <li className=" w-full flex justify-start items-start gap-2 font-semibold">
            <h4 className=" text-3xl">Product</h4>
          </li>
          <li>Take Tour</li>
          <li>Live Chat</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div>
        <ul className=" w-full  flex flex-col gap-2 justify-start items-start text-xs sm:text-md">
          <li className=" w-full flex justify-start items-start gap-2 font-semibold">
            <h4 className=" text-md sm:text-3xl">Newsletter</h4>
          </li>
          <li>Stay Up To date</li>
          <li className=" w-full flex flex-col sm:flex-row justify-start items-start ">
            <input
              type="text"
              placeholder=" Your email"
              className=" w-24 py-2"
            />
            <button className="cursor-pointer group relative flex flex-col sm:flex-row gap-1.5 px-4 py-2  bg-[#000000]  text-[#ffffff] rounded-md hover:bg-opacity-70 transition font-semibold shadow-md">
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
