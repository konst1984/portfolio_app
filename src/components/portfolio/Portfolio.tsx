import React from "react";
import s from "./Portfolio.module.css";
import { data } from "./data-portfolio";
import Article from "./Article";

const Portfolio = () => {
  const renderArticle = data.map(({ id, image, title, github, demo }) => (
    <Article key={id} image={image} title={title} github={github} demo={demo} />
  ));

  return (
    <section id="portfolio">
      <p className="pre-title">my recent work</p>
      <h2>Portfolio</h2>
      <div className={`container ${s.portfolio}`}>{renderArticle}</div>
    </section>
  );
};

export default Portfolio;
