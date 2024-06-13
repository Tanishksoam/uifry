import React from "react";
import Faq_box from "./Faq_box";

const FAQ = () => {
  const primary = "#ff5555";
  const secondary = "#ffffff";
  const tertiary = "#000000";
  return (
    <div className=" w-full flex flex-col justify-start items-start gap-2 px-10">
      <h3 className=" text-lg text-[#ff5555]">FAQ</h3>
      <h1 className=" w-1/2 text-5xl font-bold">Frequently Asked Questions</h1>
      <div className=" w-full grid grid-flow-row grid-cols-2 ">
        <Faq_box
          bgcolor={primary}
          textcolor={secondary}
          description={
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
          }
          title={"the best financial accounting app ever!"}
        />
        <Faq_box
          bgcolor={secondary}
          textcolor={tertiary}
          description={
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
          }
          title={"the best financial accounting app ever!"}
        />

        <Faq_box
          bgcolor={secondary}
          textcolor={tertiary}
          description={
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
          }
          title={"the best financial accounting app ever!"}
        />
        <Faq_box
          bgcolor={primary}
          textcolor={secondary}
          description={
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
          }
          title={"the best financial accounting app ever!"}
        />
        <Faq_box
          bgcolor={primary}
          textcolor={secondary}
          description={
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
          }
          title={"the best financial accounting app ever!"}
        />
        <Faq_box
          bgcolor={secondary}
          textcolor={tertiary}
          description={
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
          }
          title={"the best financial accounting app ever!"}
        />
      </div>
    </div>
  );
};

export default FAQ;