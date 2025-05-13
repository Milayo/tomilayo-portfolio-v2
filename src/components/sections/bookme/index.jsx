import Button from "@/constants/button";
import React from "react";

const BookMe = () => {
  return (
    <div className="flex justify-between mx-30 p-5 py-10 items-end text-green-600">
      <div className="flex flex-col gap-2">
        <h3 className=" text-xl">
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
