import Button from "@/constants/button";
import React from "react";

const BookMe = () => {
  return (
    <div className="flex justify-between items-end text-green-600 text-lg">
      <div className="flex flex-col gap-2 ">
        <h3 className=" ">
          I design clean modern <br /> websites that embody the <br /> essence
          of your brand.
        </h3>
      </div>
      <div>
        <h3>Based in Nigeria,</h3>
        <p>available to work remotely</p>
      </div>
    </div>
  );
};

export default BookMe;
