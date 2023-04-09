import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section id="contacts">
      <p className="pre-title">get in touch</p>
      <h2>contact me</h2>
      <div className={s.contacts}>
        <div className={s.options}>
          <article className={s.option}>
            <AiOutlineMail className={s.icon} />
            <h3>email</h3>
            <h4 className={s.h4}>doe@gmail.com</h4>
            <a href="mailto:unknown@gmail.com" target="_blank" rel="noopener">
              <span className={s.send}>send</span> a message
            </a>
          </article>
          <article className={s.option}>
            <BsMessenger className={s.icon} />
            <h3>messenger</h3>
            <h4 className={s.h4}>unknown</h4>
            <a
              href="https://m.me/ernest.achiever"
              target="_blank"
              rel="noopener"
            >
              <span className={s.send}>send</span> a message
            </a>
          </article>
          <article className={s.option}>
            <AiOutlineWhatsApp className={s.icon} />
            <h3>whatsapp</h3>
            <h4 className={s.h4}>+79261234567</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+79261234567"
              target="_blank"
              rel="noopener"
            >
              <span className={s.send}>send</span> a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" placeholder="your email" required />
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="your message"
          />
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
