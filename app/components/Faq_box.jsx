import React from "react";

const Faq_box = ({ bgcolor, textcolor, description, title }) => {
  return (
    <div
      className={` w-full bg-[${bgcolor}] text-[${textcolor}] p-4 rounded-md`}
    >
      <h2 className=" capitalize text-sm sm:text-xl font-medium">{title}</h2>
      <h4 className=" text-xs sm:text-lg">{description}</h4>
    </div>
  );
};

export default Faq_box;
