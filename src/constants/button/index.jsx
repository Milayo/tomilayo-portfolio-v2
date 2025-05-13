import React from "react";

const Button = ({ children }) => {
  return (
    <div className="border uppercase border-green-600 py-2 px-4 hover:bg-green-950/25 w-1/6 text-center rounded-3xl">
      {children}
    </div>
  );
};

export default Button;
