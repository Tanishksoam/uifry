import React from "react";
import Image from "next/image";
import { DownloadApp } from "@/public/assets";
import { FaApple } from "react-icons/fa";

const DownaloadApp = () => {
  return (
    <div className="w-[130vw]  sm:w-full h-80vh flex justify-center items-center relative ">
      <Image src={DownloadApp} alt="Logo" className="w-full" />
      <button className="w-[15%] h-[12%] sm:h-[10%] cursor-pointer group  gap-[1px] sm:gap-1.5 sm:px-8 sm:py-4 text-[#000000]  bg-[#ffffff] rounded-sm sm:rounded-md hover:bg-gray-300 transition font-medium shadow-md absolute top-[69%] left-[18.2%]">
        <div className=" w-full flex text-[8px] sm:text-[16px] justify-center items-center gap-2">
          Download App
          <FaApple className=" w-2 h-3 sm:w-8  sm:h-8" />
        </div>
      </button>
    </div>
  );
};

export default DownaloadApp;
