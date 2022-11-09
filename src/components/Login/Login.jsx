import React, {useState} from 'react';
import './Login.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

function Login() {

  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const login = async () => {
    await axios.get('http://localhost:3030/').then(() => {console.log('Data base is connected');}).catch(() => {console.log('Something went wrong')});
  }

  return (
    <div>
      <div className="logcon">
        <div className="loginblock">

          <div className="logo">
            {/* eslint-disable-next-line global-require */}
            <img src={require("../../images/logo.png")} alt="logo" height={50}/>
          </div>

          <div>
            <label htmlFor="email">Email
            <input type="email" id="email" placeholder="Enter your email"/>
            </label>
          </div>

          <div className="fontpassword">
            <label htmlFor="password">Password
            <input type={passwordShown ? "text" : "password"} placeholder="Enter your password" id="password"/>
            </label>
            <i role="presentation" className="eyeicon" onClick={togglePassword}>
                <span className="material-symbols-outlined" id="icon">
                  {passwordShown ? "visibility_off" : "visibility"}
                </span>
            </i>
          </div>

          <div className="forgotpass"><NavLink to="/activation">Forgot Password?</NavLink></div>

          <div className="wrongpass" id="error"/>

          <button type="button" className="loginbtn" id="login" onClick={login}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;