import React from "react";
import s from "./About.module.css";
import Me from "../../assets/about.jpg";
import Content from "./Content";

const About = () => {
  return (
    <section id="about">
      <p className="pre-title">Get To Know</p>
      <h2>About Me</h2>
      <div className={`container ${s.about}`}>
        <div className={s.me}>
          <img src={Me} alt="About photo" className={s.image} />
        </div>
        <Content />
      </div>
    </section>
  );
};

export default About;
