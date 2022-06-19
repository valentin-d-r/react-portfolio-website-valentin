import React from "react";
import "./testimonials.css";
import Sonia from "../../assets/Sonia.jpg";
import Alexandre from "../../assets/Alexandre.jpg";
import unknown from "../../assets/unknown.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Alexandre,
    name: "Alexandre (School Tutor)",
    review:
      "Samuel is a dynamic young man who is invested in both training and school activities. It is appreciable to work alongside him on a daily basis for his human qualities, his professional posture and his maturity. Samuel will be able to integrate into any team and bring satisfaction both technically and socially.",
  },
  {
    avatar: Sonia,
    name: "Sonia Ikken (School Tutor)",
    review: "Waiting for review",
  },
  {
    avatar: unknown,
    name: "Waiting for name (relation)",
    review: "Waiting for review",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Tutors and Colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="tutor__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="tutor__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
