import React from "react";
import Navbar from "../components/navbar/Navbar";
import Rightbar from "../components/rightBar/Rightbar";
import LeftBar from "../components/leftBar/LeftBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div className={mode ? "theme-light" : "theme-dark"}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Layout;
