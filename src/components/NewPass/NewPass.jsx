import React from 'react';
import './NewPass.css';
import s from './NewPass.module.css'

function NewPass() {
  return (
    <div className="content">
      <div className="image"/>
      <div className="container">
        <div className="block">
          <div className="logo">
            {/* eslint-disable-next-line global-require */}
            <img src={require("../../images/logo.png")} alt="logo" height={50}/>
          </div>
          <h2 style={{textAlign: "center"}}>Reset Password</h2>
          <div>
            <label className={s.newLabel} htmlFor="email">Email
              <input className={s.newInput} type="email" placeholder="Enter your email" id="email"/>
            </label>
          </div>
          <button type="button" className="sendbtn" id="send">Send</button>
        </div>
      </div>
    </div>
  );
}

export default NewPass;