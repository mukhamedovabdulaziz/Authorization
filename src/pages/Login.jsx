import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import s from "../assets/styles/Login.module.css";
import logo from "../assets/images/logo.png";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const login = async () => {
    await axios
      .get("http://localhost:3030/")
      .then(() => {
        console.log("Data base is connected");
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  };

  return (
    <div className="block">
      <div className={s.logo}>
        <img src={logo} alt="logo" height={50} />
      </div>

      <div>
        <label className={s.logLabel} htmlFor="email">
          Email
          <input
            className={s.logInput}
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </label>
      </div>

      <div className={s.fontpassword}>
        <label className={s.logLabel} htmlFor="password">
          Password
          <input
            className={s.logInput}
            type={passwordShown ? "text" : "password"}
            placeholder="Enter your password"
            id="password"
          />
        </label>
        <i role="presentation" className={s.eyeicon} onClick={togglePassword}>
          <span className="material-symbols-outlined" id="icon">
            {passwordShown ? "visibility_off" : "visibility"}
          </span>
        </i>
      </div>

      <div className={s.forgotpass}>
        <Link className={s.forgotLink} to="/activation">
          Forgot Password?
        </Link>
      </div>

      <div className={s.wrongpass} id="error" />

      <button type="button" className={s.loginbtn} id="login" onClick={login}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
