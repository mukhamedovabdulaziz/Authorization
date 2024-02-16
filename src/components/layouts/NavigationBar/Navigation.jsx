import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import logo from "../../../assets/images/logo.png";

function Navigation() {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" id="logo" style={{ height: "50px" }} />
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          INPUT FORM
        </NavLink>
      </div>
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          CHARGES FORM
        </NavLink>
      </div>
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          INLAND CARRIER
        </NavLink>
      </div>
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          CC DESTINATION
        </NavLink>
      </div>
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          FORWARDER RATES
        </NavLink>
      </div>
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          IL INLAND SUPPLIER
        </NavLink>
      </div>
      <div className={s.navigation}>
        <NavLink className={s.navLink} to="#">
          LOCAL CHARGES
        </NavLink>
      </div>
      <div id="profile">Name Surname</div>
    </header>
  );
}

export default Navigation;
