import React from "react";
import s from "./Portfolio.module.css";
import { IPortfolio } from "../types";

type ArticleProps = Omit<IPortfolio, "id">;

const Article = ({ image, github, demo, title }: ArticleProps) => {
  return (
    <article className={s.portfolio__item}>
      <div className={s.portfolio__image}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className={s.portfolio__cta}>
        <a
          href={github}
          className="btn"
          target="_blank"
          title="go to game page"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Article;
