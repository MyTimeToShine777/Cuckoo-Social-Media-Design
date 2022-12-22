import React from "react";
import "./profile.scss";
import {
  FacebookTwoTone,
  LinkedIn,
  Instagram,
  Pinterest,
  Twitter,
  Place,
  Language,
  EmailOutlined,
  MoreVert,
} from "@mui/icons-material";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671726937/work/WhatsApp_Image_2022-12-22_at_22.04.35_au0cns.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com/">
              <Twitter fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://www.pinterest.com/">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Pugazh</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>India</span>
              </div>
              <div className="item">
                <Language />
                <span>pugazh.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
