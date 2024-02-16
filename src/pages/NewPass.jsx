import s from "../assets/styles/NewPass.module.css";
import logo from "../assets/images/logo.png";

function NewPass() {
  return (
    <div className="block">
      <div className={s.logo}>
        <img src={logo} alt="logo" height={50} />
      </div>
      <h2 style={{ textAlign: "center" }}>Reset Password</h2>
      <div>
        <label className={s.newLabel} htmlFor="email">
          Email
          <input
            className={s.newInput}
            type="email"
            placeholder="Enter your email"
            id="email"
          />
        </label>
      </div>
      <button type="button" className={s.sendbtn}>
        Send
      </button>
    </div>
  );
}

export default NewPass;
