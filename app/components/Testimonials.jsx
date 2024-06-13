import React from "react";
import Image from "next/image";
import { Testimonail } from "../../public/assets";

const Testimonials = () => {
  return (
    <div>
      <div>TESTIMONIALS</div>
      <div>What Our Users Say About Us?</div>
      <div>
        <div>
          <Image src={Testimonail} alt="Testimonial" width={100} height={100} />
        </div>
        <div>
          <h2>the best financial accounting app ever!</h2>
          <h4>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </h4>
          <Image src={Testimonail} alt="Testimonial" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
