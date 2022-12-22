import React, { useState } from "react";
import "./post.scss";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({ posts }) => {
  const [commentOpen, setcommentOpen] = useState(false);

  const toggleComment = () => {
    setcommentOpen(!commentOpen);
  };
  //Tempdata
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link to={`/profile/${posts.userId}`}>
              <img src={posts.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${posts.userId}`}
                style={{ color: "inherit" }}
              >
                <span className="name">{posts.name}</span>
              </Link>
              <span className="date">a few seconds ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{posts.desc}</p>
          <img src={posts.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 Likes
          </div>
          <div className="item">
            <TextsmsOutlined onClick={toggleComment} />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
