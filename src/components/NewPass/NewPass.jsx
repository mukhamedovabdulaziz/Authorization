import React from 'react';
import './NewPass.css';

export const NewPass = () => {
  return (
    <div>
      <div className="container">
        <div className="block">
          <div className="logo">
            <img src={require("../../images/logo.png")} alt="logo" height={50}/>
          </div>
          <h2 style={{textAlign: "center"}}>Reset Password</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" id="email"/>
          </div>
          <button className="sendbtn" id="send">Send</button>
        </div>
      </div>
    </div>
  );
};