import React from "react";
import CV from "../../assets/cv.pdf";
import s from "./Header.module.css";

const Cta = () => {
  return (
    <div className={s.cta}>
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
