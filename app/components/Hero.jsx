import React from "react";
import Image from "next/image";
import { HeroImage, HeroStrap } from "../../public/assets";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" w-full flex justify-center items-center gap-1 ">
      <div className="w-1/2 flex flex-col justify-center items-center gap-2 py-20">
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <div className=" w-full flex font-bold text-6xl">
            <h1>Make The Best Financial Decisions</h1>
          </div>
          <div className="w-full flex font-normal text-xl">
            <h4>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h4>
          </div>
          <div className=" w-full flex justify-start items-center font-normal text-xl">
            <button class="cursor-pointer  group relative flex gap-2 px-8 py-4 bg-[#000000]  text-[#ffffff] rounded-md hover:bg-opacity-70 transition  shadow-md">
              <div>Get Started</div>
              <div className="flex justify-center items-baseline ">
                <HiArrowLongRight size="1.8rem" />
              </div>
            </button>
            <button class="cursor-pointer group relative flex gap-3 px-8 py-4 bg-transparent  text-[#000000] rounded-md hover:bg-opacity-70 transition ">
              <div className="flex justify-center items-baseline py-1 ">
                <FaRegCirclePlay size="1.8rem" />
              </div>
              <div className="flex justify-center items-baseline py-1">
                Watch Video
              </div>
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-start items-center">
          <Image src={HeroStrap} alt="Hero Strap" width={500} height={350} />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-start items-start overflow-visible relative">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={700}
          height={600}
          className=" absolute top-[-50vh]"
        />
      </div>
    </div>
  );
};

export default Hero;
