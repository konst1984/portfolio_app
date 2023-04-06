import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Socials from "./Socials";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header id="header">
      <div className={`container ${s.header}`}>
        <p className="pre-title">Hello I'm</p>
        <h1>Judy Doe</h1>
        <p className="pre-title text-light">Frontend Developer</p>
        <CTA />
        <div className={s.me}>
          <Socials />
          <div className={s["me__img-box"]}>
            <img src={ME} alt="me" />
          </div>
          <a href="#contacts" className={s.scroll__down}>
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
