import React from "react";
import s from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
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
