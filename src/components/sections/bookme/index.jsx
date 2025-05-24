import React from "react";

const BookMe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 text-green-600 text-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-2xl font-medium leading-relaxed">
          I design clean, modern <br className="hidden md:block" />
          websites that embody the <br className="hidden md:block" />
          essence of your brand.
        </h3>
      </div>
      <div className="text-base md:text-right">
        <h3 className="font-semibold">Based in Nigeria,</h3>
        <p className="text-[#ABB2BF]">available to work remotely</p>
      </div>
    </div>
  );
};

export default BookMe;
