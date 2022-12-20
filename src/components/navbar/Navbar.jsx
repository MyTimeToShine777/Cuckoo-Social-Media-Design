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

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link>
          <img
            src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671529885/work/images-removebg-preview_ysd62o.png"
            alt="Logo"
            style={{ height: "40px", width: "40px" }}
          />
          <span>Cuckoo</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
        <LightModeOutlined />
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
            src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
            alt="ProfilePic"
          />
          <span>Pugazh</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
