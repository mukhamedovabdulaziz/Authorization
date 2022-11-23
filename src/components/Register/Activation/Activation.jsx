import React from 'react';
import './Activate.css'
import s from './Activation.module.css';

function Activation() {

  return (
    <div className="content">
      <div className="image"/>
      <div className="activecon">
        <div className="activeblock">
          <div className="logo">
            {/* eslint-disable-next-line global-require */}
            <img src={require("../../../images/logo.png")} alt="logo" height={50}/>
          </div>

          <h2 style={{textAlign: "center"}}>Activate</h2>
          <div>
            <input className={s.actInput} type="text" id="active_code" placeholder="Activation code"/>
          </div>

          <div className="buttons">
            <button type="button" className="activatebtn" id="activation">Activate account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activation;