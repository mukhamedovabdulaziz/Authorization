import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/images/logo.png";

const Error = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={logo} alt="logo" width="200" />
      <Link to="/" className="error">
        Страница не найдена
      </Link>
    </div>
  );
};

export default Error;
