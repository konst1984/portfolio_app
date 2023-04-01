import React from "react";
import s from "./About.module.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderChartLine } from "react-icons/ri";

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.cards}>
        <article className={s.cards__item}>
          <FaAward className={s.icon} />
          <h3>experience</h3>
          <small>3+ years working</small>
        </article>
        <article className={s.cards__item}>
          <FiUsers className={s.icon} />
          <h3>clients</h3>
          <small>200+ worldwide</small>
        </article>
        <article className={s.cards__item}>
          <RiFolderChartLine className={s.icon} />
          <h3>projects</h3>
          <small>80+ completed</small>
        </article>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi,
        aperiam commodi dolore ducimus et explicabo, inventore magnam minus nemo
        nihil numquam obcaecati odit quibusdam similique. Cum eos nihil nobis!
      </p>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Content;
