import React, {useState} from 'react';
import './Login.css';
import {NavLink} from "react-router-dom";

export const Login = () => {

  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <div className="logcon">
        <div className="loginblock">

          <div className="logo">
            <img src={require("../../images/logo.png")} alt="logo" height={50}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email"/>
          </div>

          <div className="fontpassword">
            <label htmlFor="password">Password</label>
            <input type={passwordShown ? "text" : "password"} placeholder="Enter your password" id="password"/>
            <i className="eyeicon" onClick={togglePassword}>
                <span className="material-symbols-outlined" id="icon">
                  {passwordShown ? "visibility_off" : "visibility"}
                </span>
            </i>
          </div>

          <div className="forgotpass"><NavLink to={"/activation"}>Forgot Password?</NavLink></div>

          <div className="wrongpass" id="error"></div>

          <button className="loginbtn" id="login">Sign In</button>
        </div>
      </div>
    </div>
  );
};
