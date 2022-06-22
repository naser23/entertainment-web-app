import React from "react";
import LogoImg from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import "../Logo/logo.css";

function Logo() {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="logo"
        src={LogoImg}
        alt="logo"
        onClick={() => navigate("/")}
      />
    </>
  );
}

export default Logo;
