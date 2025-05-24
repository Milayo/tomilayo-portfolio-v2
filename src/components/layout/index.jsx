import React from "react";
import Header from "./header";
import CustomCursor from "@/lib/customercursor";

const MainLayout = ({ children }) => {
  return (
    <div>
      <CustomCursor />
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
