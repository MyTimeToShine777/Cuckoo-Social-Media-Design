import React from "react";
import "./navbar.scss";

import {
  GridViewOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  HomeOutlined,
  NotificationsOutlined,
  EmailOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../features/themes/darkModeSlice";

const Navbar = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671529885/work/images-removebg-preview_ysd62o.png"
            alt="Logo"
            style={{ height: "40px", width: "40px" }}
          />
          <span>Cuckoo</span>
        </Link>
        <Link to="/">
          <HomeOutlined />
        </Link>

        {mode ? (
          <DarkModeOutlined onClick={() => dispatch(toggleDarkMode())} />
        ) : (
          <LightModeOutlined onClick={() => dispatch(toggleDarkMode())} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <NotificationsOutlined />
        <EmailOutlined />
        <PersonOutlined />
        <div className="user">
          <img
            src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671726937/work/WhatsApp_Image_2022-12-22_at_22.04.35_au0cns.jpg"
            alt="ProfilePic"
          />
          <span>Pugazh</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
