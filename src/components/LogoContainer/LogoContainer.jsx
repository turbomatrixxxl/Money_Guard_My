import React from "react";
import logo from "../../assets/images/icon.svg";

function LogoContainer({ className }) {
  return (
    <div className={className}>
      <img src={logo} alt="Icon" />
      <span>Money Guard</span>
    </div>
  );
}

export default LogoContainer;
