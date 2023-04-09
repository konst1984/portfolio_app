import React from "react";
import s from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className={s.logo}>
        John Doe
      </a>
      <div className={s.socials}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://instagram" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div className={s.copyright}>
        <small>&copy;john doe.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
