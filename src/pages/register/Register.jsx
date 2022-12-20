import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email Id" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Register</button>
            </form>
          </div>
          <div className="right">
            <h1>Cuckoo Social.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere corrupti beatae at exercitationem eos.
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
