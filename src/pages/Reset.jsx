import { useState } from "react";
import s from "../assets/styles/Reset.module.css";
import logo from "../assets/images/logo.png";

function Reset() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, confirmSetPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const secondTogglePassword = () => {
    confirmSetPasswordShown(!confirmPasswordShown);
  };

  return (
    <div className="block">
      <div className="logo" style={{ textAlign: "center" }}>
        <img src={logo} alt="logo" height={50} />
      </div>

      <div>
        <label className={s.resetLabel} htmlFor="validation">
          Validation Code
          <input className={s.resetInput} type="text" id="validation_code" />
        </label>
      </div>
      <div className="fontpassword">
        <label className={s.resetLabel} htmlFor="password">
          New password
          <input
            className={s.resetInput}
            type={passwordShown ? "text" : "password"}
            placeholder="Enter your new password"
            id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          />
        </label>
        <i
          role="presentation"
          className="eyeiconreset"
          onClick={togglePassword}
        >
          <span className="material-symbols-outlined" id="icon">
            {passwordShown ? "visibility_off" : "visibility"}
          </span>
        </i>
      </div>
      <div className="fontconfirm">
        <label className={s.resetLabel} htmlFor="confirmpassword">
          Confirm Password
          <input
            className={s.resetInput}
            type={confirmPasswordShown ? "text" : "password"}
            placeholder="Confirm your password"
            id="confirmpassword"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          />
        </label>
        <i
          role="presentation"
          className="eyeiconreset"
          onClick={secondTogglePassword}
        >
          <span className="material-symbols-outlined" id="icon2">
            {confirmPasswordShown ? "visibility_off" : "visibility"}
          </span>
        </i>
      </div>
      <div className="validity" id="validation">
        Password must contain 6 or more characters with at least one number and
        one uppercase and one lowercase letter
      </div>
      <div className="matching" id="match">
        Confirm Password is not matching
      </div>
      <button type="button" className="resetbtn" id="reset">
        Reset
      </button>
    </div>
  );
}

export default Reset;
