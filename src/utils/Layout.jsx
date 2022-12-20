import React from "react";
import Navbar from "../components/navbar/Navbar";
import Rightbar from "../components/rightBar/Rightbar";
import LeftBar from "../components/leftBar/LeftBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </>
  );
};

export default Layout;
