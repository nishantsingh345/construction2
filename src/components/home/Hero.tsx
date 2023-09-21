// import React from 'react'

// type Props = {}

// const Hero = (props: Props) => {
//   return (
//     <div>
//       <div className="carousel w-full">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img src="/hero/HB-1-3.webp" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <img src="/hero/HB-1-3.webp" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img src="/hero/HB-1-3.webp" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <img src="/hero/HB-1-3.webp" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero

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
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        //   scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
