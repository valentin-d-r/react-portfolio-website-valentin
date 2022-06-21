import React from "react";
import "./header.css";
import CTA from "./CTA";
import val from "../../assets/val.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Valentin Dremaux</h1>
        <h5 className="text-light">Engineering student</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={val} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
