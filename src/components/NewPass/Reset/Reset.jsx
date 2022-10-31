import React, {useState} from 'react';
import './Reset.css'

export const Reset = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, confirmSetPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const secondTogglePassword = () => {
    confirmSetPasswordShown(!confirmPasswordShown);
  };

  return (
    <div>
      <div className="container">
        <div className="blockreset">
          <div className="logo" style={{textAlign: "center"}}>
            <img src={require("../../../images/logo.png")} alt="logo" height={50}/>
          </div>

          <div>
            <label htmlFor="validation">Validation Code</label>
            <input type="text" id="validation_code"/>
          </div>
          <div className="fontpassword">
            <label htmlFor="password">New password</label>
            <input type={passwordShown ? "text" : "password"} placeholder="Enter your new password" id="password"
                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"/>
              <i className="eyeiconreset" onClick={togglePassword}>
                <span className="material-symbols-outlined" id="icon">
                  {passwordShown ? "visibility_off" : "visibility"}
                </span>
              </i>
          </div>
          <div className="fontconfirm">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type={confirmPasswordShown ? "text" : "password"} placeholder="Confirm your password" id="confirmpassword"
                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"/>
              <i className="eyeiconreset" onClick={secondTogglePassword}>
                <span className="material-symbols-outlined" id="icon2">
                  {confirmPasswordShown ? "visibility_off" : "visibility"}
                </span>
              </i>
          </div>
          <div className="validity" id="validation">Password must contain 6 or more characters with at least one
            number and one uppercase and one lowercase letter
          </div>
          <div className="matching" id="match">Confirm Password is not matching</div>
          <button className="resetbtn" id="reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

