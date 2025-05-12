import React from "react";
import Header from "./header";
import ContactNav from "./contactnav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContactNav />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
