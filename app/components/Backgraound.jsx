import React from "react";
import Image from "next/image";
import { Star, Gradient } from "../../public/assetss";

const Backgraound = () => {
  return (
    <>
      <Image
        src={Star}
        alt="Logo"
        height={10}
        width={10}
        className="w-7 sm:w-10 absolute top-[3%] sm:top-[1.5%] left-[2%] rotate-[25deg] "
      />

      <Image
        src={Star}
        alt="Logo"
        height={10}
        width={10}
        className="w-7 sm:w-10 absolute top-[17%] left-[2%] rotate-[30deg] "
      />
      <Image
        src={Gradient}
        alt="Logo"
        height={50}
        width={50}
        className="w-[30vw] absolute top-[17%] left-[80%] rotate-[30deg] -z-10"
      />
    </>
  );
};

export default Backgraound;
