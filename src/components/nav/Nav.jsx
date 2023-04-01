import React, { useEffect, useState } from "react";
import s from "./Nav.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine, RiContactsBookLine } from "react-icons/ri";

const LinkNav = ({ href, icon, active, setActive }) => {
  return (
    <a
      href={href}
      className={active === href ? s.active : ""}
      onClick={() => setActive(href)}
    >
      {icon}
    </a>
  );
};

const Nav = () => {
  const [active, setActive] = useState("#");

  useEffect(() => {
    if (active === "#") {
      window.scrollBy(0, 0);
    }
  }, [active]);

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? `${s.active}` : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? s.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? s.active : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? s.active : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contacts"
        onClick={() => setActive("#contacts")}
        className={active === "#contacts" ? s.active : ""}
      >
        <RiContactsBookLine />
      </a>
    </nav>
  );
};

export default Nav;
