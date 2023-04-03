import React from "react";
import s from "./Services.module.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <p className="pre-title">what i offer</p>
      <h2>services</h2>
      <div className={`container ${s.services}`}>
        <article className={s.service}>
          <div className={s.head}>
            <h3>UI/UX Design</h3>
          </div>
          <ul className={s.list}>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className={s.service}>
          <div className={s.head}>
            <h3>Web Development</h3>
          </div>
          <ul className={s.list}>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className={s.service}>
          <div className={s.head}>
            <h3>content creation</h3>
          </div>
          <ul className={s.list}>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={s.list__icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
