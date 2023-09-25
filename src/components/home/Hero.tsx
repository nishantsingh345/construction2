"use client";

import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


type Props = {};



const Hero = (props: Props) => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        //   scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img className="w-full " src="/hero/HB-1-3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full " src="/hero/HB-1-3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full " src="/hero/HB-1-3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full " src="/hero/HB-1-3.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
