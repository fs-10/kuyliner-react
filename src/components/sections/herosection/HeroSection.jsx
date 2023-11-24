import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImgSlide1 from "../../../assets/herosection/herosection-slide-1.png";
import ImgSlide2 from "../../../assets/herosection/herosection-slide-2.png";
import ImgSlide3 from "../../../assets/herosection/herosection-slide-3.png";

import "./hero-section.css";

function HeroSection() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
      >
        <SwiperSlide>
          <img
            src={ImgSlide1}
            className="w-full h-48 md:h-64 lg:h-96 object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgSlide2}
            className="w-full h-48 md:h-64 lg:h-96 object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgSlide3}
            className="w-full h-48 md:h-64 lg:h-96 object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroSection;
