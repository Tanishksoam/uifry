import React from "react";
import Image from "next/image";
import {
  FeaturesImage1,
  FeaturesImage2,
  FeaturesImage3,
  Star,
} from "@/public/assets";
import { PiStarFourLight } from "react-icons/pi";
import { PiCubeTransparent } from "react-icons/pi";
import { TbHexagonalPyramid } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-[-40vh] px-8 sm:px-20">
      <div className=" w-full flex justify-center items-center gap-2">
        <Image
          src={FeaturesImage1}
          alt="Logo"
          width={120}
          height={60}
          className="w-1/2 sm:flex hidden "
        />
        <div className="w-full sm:w-1/2 flex  flex-col justify-start items-start gap-2">
          <h4 className=" text-[#FF5555] text-md sm:text-xl"> FEATURES</h4>
          <h2 className=" text-3xl sm:text-5xl font-semibold">Uifry Premium</h2>
          <div className=" w-full flex flex-col justify-start items-start gap-2 text-sm sm:text-lg">
            <div className=" w-full flex justify-start items-start gap-2 font-semibold">
              <PiStarFourLight size="1.5rem" color="#FF5555" />
              <h4>Budgeting Intervals</h4>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className=" w-full flex flex-col justify-start items-start gap-2 text-sm sm:text-lg">
            <div className=" w-full flex justify-start items-start gap-2 font-semibold ">
              <PiCubeTransparent size="1.5rem" color="#FF5555" />
              <h4>Budgeting Intervals</h4>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className=" w-full flex flex-col justify-start items-start gap-2 text-sm sm:text-lg">
            <div className=" w-full flex justify-start items-start gap-2 font-semibold">
              <TbHexagonalPyramid size="1.5rem" color="#FF5555" />
              <h4>Budgeting Intervals</h4>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full hidden sm:flex justify-center items-end pr-28 rotate-45">
        {" "}
        <Image src={Star} alt="fads" className="w-14" />
      </div>
      <div className=" w-full flex flex-row-reverse justify-center items-center gap-2">
        <Image
          src={FeaturesImage2}
          alt="Logo"
          width={120}
          height={60}
          className="w-1/2  sm:flex hidden"
        />

        <div className="w-fullw-1/2 flex  flex-col justify-start items-start gap-2 py-8 sm:py-0 sm:pl-10">
          <h4 className=" text-[#FF5555] text-md sm:text-xl"> ADVANTAGES</h4>
          <h2 className=" text-3xl sm:text-5xl font-semibold">
            Why Choose Uifry?
          </h2>
          <div className=" w-full flex flex-col justify-start items-start gap-2 py-2 text-sm sm:text-lg">
            <div className=" w-full flex justify-start items-start gap-2 font-semibold py-2">
              <div className="w-auto rounded-full bg-[#ff5555] p-[6px] flex justify-center items-center ">
                <FaBell size="1.2rem" color="#ffffff" />
              </div>
              <h4 className=" text-xl flex justify-center items-center">
                Clever Notifications
              </h4>
            </div>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center gap-2">
        <Image
          src={FeaturesImage3}
          alt="Logo"
          width={120}
          height={60}
          className="w-1/2 hidden sm:flex "
        />
        <div className="w-full sm:w-1/2 flex  flex-col justify-start items-start gap-2  sm:pr-10">
          <div className=" w-full flex flex-col justify-start items-start gap-2 py-2 text-sm sm:text-lg">
            <div className=" w-full flex justify-start items-start gap-2 font-semibold py-2">
              <div className="w-auto rounded-full bg-[#ff5555] p-[6px] flex justify-center items-center ">
                <PiStarFourLight size="1.3rem" color="#ffffff" />
              </div>
              <h4 className=" text-xl flex justify-center items-center">
                Fully Customizable
              </h4>
            </div>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-end pr-10 sm:pr-28">
        {" "}
        <Image src={Star} alt="afvds" className=" w-8 sm:w-10 lg:w-14" />
      </div>
    </div>
  );
};

export default Features;
