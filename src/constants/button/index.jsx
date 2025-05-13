import React from "react";

const Button = ({ children }) => {
  return (
    <div className="border uppercase border-green-600 text-[#ABB2BF] py-2 px-4 mt-4 text-center">
      {children}
    </div>
  );
};

export default Button;
