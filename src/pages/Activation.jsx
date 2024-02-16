import s from "../assets/styles/Activation.module.css";
import logo from "../assets/images/logo.png";

function Activation() {
  return (
    <div className="block">
      <div className={s.logo}>
        <img src={logo} alt="logo" height={50} />
      </div>

      <h2 style={{ textAlign: "center" }}>Activate</h2>
      <div>
        <input
          className={s.actInput}
          type="text"
          placeholder="Activation code"
        />
      </div>

      <div className={s.buttons}>
        <button type="button" className={s.activatebtn}>
          Activate account
        </button>
      </div>
    </div>
  );
}

export default Activation;
