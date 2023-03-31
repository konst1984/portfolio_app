import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={`container ${s.header}`}>
        <h5>Hello I'm</h5>
        <h1>Mikel Buffer</h1>
      </div>
    </header>
  );
};

export default Header;
