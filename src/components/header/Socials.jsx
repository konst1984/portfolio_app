import React from "react";
import s from "./Header.module.css";
import { GrGithub } from "react-icons/gr";
import { RiBasketballLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

const Socials = () => {
  return (
    <div className={s.socials}>
      <a href="https://linkedin.com" target="_blank">
        <TiSocialLinkedin className={s.socials__icon} />
      </a>
      <a href="https://github.com" target="_blank">
        <GrGithub className={s.socials__icon} />
      </a>
      <a href="https://dribble.com" target="_blank">
        <RiBasketballLine className={s.socials__icon} />
      </a>
    </div>
  );
};

export default Socials;
