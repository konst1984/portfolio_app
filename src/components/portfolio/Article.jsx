import React from "react";
import s from "./Portfolio.module.css";

const Article = ({ img, github, demo, title }) => {
  return (
    <article className={s.portfolio__item}>
      <div className={s.portfolio__image}>
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <div className={s.portfolio__cta}>
        <a href={github} className="btn" target="_blank">
          GitHub
        </a>
        <a href={demo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Article;
