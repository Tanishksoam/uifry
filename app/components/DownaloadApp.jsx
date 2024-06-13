import React from "react";
import Image from "next/image";
import { DownloadApp } from "@/public/assets";
import { FaApple } from "react-icons/fa";

const DownaloadApp = () => {
  return (
    <div className="w-full h-80vh flex justify-center items-center relative ">
      <Image src={DownloadApp} alt="Logo" className="w-full" />
      <button className="w-[15%] h-[10%] cursor-pointer group   gap-1.5 px-8 py-4 text-[#000000]  bg-[#ffffff] rounded-md hover:bg-gray-300 transition font-medium shadow-md absolute top-[69%] left-[18.2%]">
        <div className=" w-full flex  justify-center items-center gap-2">
          Download App
          <FaApple size="1.4rem" />
        </div>
      </button>
    </div>
  );
};

export default DownaloadApp;
