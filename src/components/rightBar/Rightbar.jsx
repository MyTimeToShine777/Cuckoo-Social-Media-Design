import React from "react";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                alt="ProfilePic"
              />
              <span>Pugazh</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                alt="ProfilePic"
              />
              <span>Pugazh</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                alt="ProfilePic"
              />
              <p>
                <span>Pugazh</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                alt="ProfilePic"
              />
              <p>
                <span>Pugazh</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                alt="ProfilePic"
              />
              <p>
                <span>Pugazh</span> liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                alt="ProfilePic"
              />
              <p>
                <span>Pugazh</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                  alt="ProfilePic"
                />
                <div className="online" />
                <span>Pugazh</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                  alt="ProfilePic"
                />
                <div className="online" />
                <span>Pugazh</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                  alt="ProfilePic"
                />
                <div className="online" />
                <span>Pugazh</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                  alt="ProfilePic"
                />
                <div className="online" />
                <span>Pugazh</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://res.cloudinary.com/drplxcnzd/image/upload/v1671551133/work/profile_dddjqh.png"
                  alt="ProfilePic"
                />
                <div className="online" />
                <span>Pugazh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
