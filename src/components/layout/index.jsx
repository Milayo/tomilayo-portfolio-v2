import React from "react";
import Header from "./header";
import CustomCursor from "@/lib/customercursor";
import Loader from "@/lib/loader";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Loader />
      <CustomCursor />
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
