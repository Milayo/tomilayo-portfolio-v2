import React from "react";
import Header from "./header";
import ContactNav from "./contactnav";
import CustomCursor from "@/lib/customercursor";

const MainLayout = ({ children }) => {
  return (
    <div>
      <CustomCursor />
      <Header />
      <ContactNav />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
