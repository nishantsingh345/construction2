"use client";

import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Section from "../common/Section";
import { FaStar } from "react-icons/fa";

type Props = {};

const data = [
  {
    id: 1,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "first slide",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, modi odio reprehenderit deserunt facilis sapiente recusandae? Quibusdam deleniti perferendis officiis?",
  },
  {
    id: 2,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "first slide",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, modi odio reprehenderit deserunt facilis sapiente recusandae? Quibusdam deleniti perferendis officiis?",
  },
  {
    id: 3,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "first slide",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, modi odio reprehenderit deserunt facilis sapiente recusandae? Quibusdam deleniti perferendis officiis?",
  },
  {
    id: 4,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "first slide",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, modi odio reprehenderit deserunt facilis sapiente recusandae? Quibusdam deleniti perferendis officiis?",
  },
  {
    id: 4,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "first slide",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, modi odio reprehenderit deserunt facilis sapiente recusandae? Quibusdam deleniti perferendis officiis?",
  },
];

const Testimonial = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div>
          <div>
            <p className="font-bold text-[#040f28] text-2xl text-center py-4'">Testimonial</p>
            <p className="font-bold text-[#ff5e14] text-2xl text-center py-4'">
              What our clients say
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            //   navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col md:flex-row items-center gap-5 md:mx-10">
                  <img className="w-1/4" src={item?.immg} alt={item?.title} />
                  <div className="flex flex-col items-start  gap-4">
                    <p className="font-bold text-xl">{item?.title}</p>
                    <p className="">{item?.text}</p>
                    <div className="flex items-center text-2xl text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
    </div>
  );
};

export default Testimonial;
