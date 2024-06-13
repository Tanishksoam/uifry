import React from "react";
import Image from "next/image";
import { Testimonail, Profile } from "../../public/assets";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>TESTIMONIALS</div>
      <div className="w-1/2 text-5xl font-bold  text-center">
        <p>What Our Users </p>
        <p>Say About Us? </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" w-1/2 flex justify-center items-center">
          <Image src={Testimonail} alt="Testimonial" className="w-full" />
        </div>
        <div className=" w-1/2 flex flex-col justify-start items-start gap-4 top-0 pr-20 ">
          <h2 className=" text-3xl font-semibold capitalize">
            the best financial accounting app ever!
          </h2>
          <h4>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </h4>
          <Image src={Profile} alt="Profile" width={100} height={100} />
          <h4 className=" font-semibold">Nick Jonas</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
