import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={s.header}>
      {/* eslint-disable-next-line global-require*/}
      <img src={require("../../../images/logo.png")} alt="logo" id="logo" style={{height: "50px"}}/>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">INPUT FORM</NavLink></div>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">CHARGES FORM</NavLink></div>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">INLAND CARRIER</NavLink></div>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">CC DESTINATION</NavLink></div>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">FORWARDER RATES</NavLink></div>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">IL INLAND SUPPLIER</NavLink></div>
      <div className={s.navigation}><NavLink className={s.navLink} to="#">LOCAL CHARGES</NavLink></div>
      <div id="profile">Name Surname</div>
    </header>
  );
}

export default Navigation;