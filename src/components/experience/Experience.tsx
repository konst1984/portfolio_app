import React from "react";
import s from "./Experience.module.css";
import { TbShieldCheckeredFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <p className="pre-title">what skills i have</p>
      <h2>my experience</h2>
      <div className={`container ${s.experience}`}>
        <div className={s.frontend}>
          <h3 className={s.h3}>frontend development</h3>
          <div className={s.content}>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>HTML</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>css</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>javascript</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>tailwind</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>react</h4>
              <small className="text-light">intermediate</small>
            </article>
          </div>
        </div>
        <div className={s.backend}>
          <h3>backend development</h3>
          <div className={s.content}>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>node js</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>mongo DB</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>PHP</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>MySQl</h4>
              <small className="text-light">basic</small>
            </article>
            <article className={s.details}>
              <TbShieldCheckeredFilled className={s.details__icon} />
              <h4>python</h4>
              <small className="text-light">intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
