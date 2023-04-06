import React from "react";
import AVRT1 from "../../assets/avatar1.jpg";
import AVRT2 from "../../assets/avatar2.jpg";
import AVRT3 from "../../assets/avatar3.jpg";
import AVRT4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import s from "./Testimonials.module.css";
import { IClient } from "../types";

const clients: IClient[] = [
  {
    img: AVRT1,
    name: "Agnes Palmer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequaturest fugit illum iste nihil placeat quo reiciendis voluptatum. Autemconsectetur consequatur cupiditate, dicta expedita fuga iure possimus?Autem, maiores, porro",
  },
  {
    img: AVRT2,
    name: "Alan Kelly",
    text: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequaturest fugit illum iste nihil placeat quo reiciendis voluptatum.",
  },
  {
    img: AVRT3,
    name: "David Young",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Autemconsectetur consequatur cupiditate, dicta expedita fuga iure possimus?Autem, maiores, porro",
  },
  {
    img: AVRT4,
    name: "Camilla Haig",
    text: "Consequaturest fugit illum iste nihil placeat quo reiciendis voluptatum. Autemconsectetur consequatur cupiditate, dicta expedita fuga iure possimus?Autem, maiores, porro",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <p className="pre-title">Review from clients</p>
      <h2>testimonials</h2>
      <Swiper
        className={s.testimonials}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map(({ img, name, text }, index) => (
          <SwiperSlide key={index} className={s.testimonial}>
            <div className={s.avatar}>
              <img src={img} alt="avatar" />
            </div>
            <h4>{name}</h4>
            <small>{text}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
