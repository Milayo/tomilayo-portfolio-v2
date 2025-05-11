import React from "react";

const Button = ({ children }) => {
  return (
    <div className="border border-green-600 py-2 px-4 hover:bg-green-950/25 w-1/3 text-center">
      {children}
    </div>
  );
};

export default Button;
