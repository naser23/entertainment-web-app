import React from "react";
import LogoImg from "../../assets/logo.svg";
import "../Logo/logo.css";

function Logo() {
  return (
    <>
      <img className="logo" src={LogoImg} alt="logo" />
    </>
  );
}

export default Logo;
