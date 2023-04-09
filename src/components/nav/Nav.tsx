import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine, RiContactsBookLine } from "react-icons/ri";
import { MdRecommend } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import s from "./Nav.module.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  useEffect(() => {
    if (active === "#") {
      window.scrollBy(0, 0);
    }
  });

  return (
    <nav className={s.nav}>
      <a
        href="#header"
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
        href="#portfolio"
        onClick={() => setActive("#services")}
        className={active === "#portfolio" ? s.active : ""}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActive("#testimonials")}
        className={active === "#testimonials" ? s.active : ""}
      >
        <MdRecommend />
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
