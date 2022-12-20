import React from "react";
import "./login.scss";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social Login</h1>
          <div className="icon">
            <div className="icon1">
              <GoogleIcon />
              Google
            </div>
            <div className="icon2">
              <FacebookIcon />
              Facebook
            </div>
            <div className="icon3">
              <GitHubIcon />
              Github
            </div>
          </div>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email Id" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
