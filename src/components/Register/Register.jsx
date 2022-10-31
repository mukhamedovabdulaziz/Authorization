import React, {useState} from 'react';
import s from './Register.module.css';

export const Register = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, confirmSetPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const secondTogglePassword = () => {
    confirmSetPasswordShown(!confirmPasswordShown);
  };

  // const registerMatching = {
  //   opacity: 1,
  //   color: "red",
  //   fontSize: "15px",
  //   cursor: "default"
  // }

  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      password: "",
      confirmPassword: "",
    };

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Confirm password is not matching",
      });
      return;
    }

    setFormError(inputError);
  };

  return (
    <div>
      <div className={s.regcon}>
        <div className={s.registerblock}>

          <div className={s.registerLogo}>
            <img src={require("../../images/logo.png")} alt="logo" height={40}/>
          </div>

          <form onSubmit={validateFormInput}>
            <div>
              <label htmlFor="firstname">Name</label>
              <input className={s.registerInput} type="text" id="firstname" placeholder="Name" maxLength={32}/>
            </div>
            <div>
              <label htmlFor="surname">Surname</label>
              <input className={s.registerInput} type="text" id="surname" placeholder="Surname" maxLength={50}/>
            </div>
            <div className={s.group}>
              <label htmlFor="group">Group</label><br/>
              <select className={s.groupSelect} name="group" id="group">
                <option style={{display: "none"}} selected>Select Group</option>
                <option>Admin</option>
                <option>Regular user</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input className={s.registerInput} type="email" id="email" placeholder="Enter email" minLength={5} maxLength={40}/>
            </div>
            <div className={s.fontpassword}>
              <label htmlFor="password">Password</label>
              <input className={s.registerInput} value={formInput.password}
                     onChange={({target}) => {
                       handleUserInput(target.name, target.value);
                     }}
                     name="password"
                     type={passwordShown ? "text" : "password"} placeholder="Enter password" id="password"
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"/>
              <i className={s.eyeicon} onClick={togglePassword}>
                <span className="material-symbols-outlined" id="icon">
                  {passwordShown ? "visibility_off" : "visibility"}
                </span>
              </i>
            </div>

            <div className={s.registerValidity} id="validation">
              Password must contain 6 or more characters with at least one
              number and one uppercase and one lowercase letter
            </div>

            <div className={s.fontconfirm}>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input className={s.registerInput} value={formInput.confirmPassword}
                     onChange={({ target }) => {
                       handleUserInput(target.name, target.value);
                     }}
                     name="confirmPassword"
                     type={confirmPasswordShown ? "text" : "password"} placeholder="Confirm password"
                     id="confirmpassword"
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"/>
              <i className={s.eyeicon} onClick={secondTogglePassword}>
                <span className="material-symbols-outlined" id="icon2">
                  {confirmPasswordShown ? "visibility_off" : "visibility"}
                </span>
              </i>
            </div>

            <div className={s.errorMessage}>{formError.confirmPassword}</div>

            <div className={s.buttons}>
              <input type="submit" className={s.registerbtn} id="register" value="Create new account"/>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};