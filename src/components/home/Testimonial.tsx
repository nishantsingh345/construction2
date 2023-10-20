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
import Link from "next/link";

type Props = {};

const data = [
  {
    id: 1,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "James Martin",
    text: "anima ex mane vere anima hi qui anima, ex mane vere anima hi qui anima, ex mane vere anima anima hi qui te in toto . Ego sum , et in de macula, mei. Sum tam felix, tam in sit Sum tam felix felix, ut talenta. Ut felix hoc tempore;",
  },
  {
    id: 1,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "James Martin",
    text: "anima ex mane vere anima hi qui anima, ex mane vere anima hi qui anima, ex mane vere anima anima hi qui te in toto . Ego sum , et in de macula, mei. Sum tam felix, tam in sit Sum tam felix felix, ut talenta. Ut felix hoc tempore;",
  },
  {
    id: 1,
    immg: "https://freesvg.org/img/1458084029.png",
    title: "James Martin",
    text: "anima ex mane vere anima hi qui anima, ex mane vere anima hi qui anima, ex mane vere anima anima hi qui te in toto . Ego sum , et in de macula, mei. Sum tam felix, tam in sit Sum tam felix felix, ut talenta. Ut felix hoc tempore;",
  },
];

const Testimonial = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* <div>
            <p className="font-bold text-[#040f28] text-2xl text-center py-4'">Testimonial</p>
            <p className="font-bold text-[#ff5e14] text-2xl text-center py-4'">
              What our clients say
            </p>
          </div> */}

          <div className="bg-[url('/testimonialsbg1.jpg')]  w-full py-6">
            <div className="flex items-center justify-center">
              <div className="bg-[#ff5e14] p-5 flex-col items-center gap-2">
                <img className="mx-auto" src="/titleicon.png" alt="" />
                <p className="font-bold text-center text-2xl py-3 text-white">Our Testimonial</p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-3">
              <div className="bg-transparent border-2 border-[#ff5e14] hover:bg-[#ff5e14] cursor-pointer px-4 rounded-md  md:py-3 py-2 text-lg text-[#040f28] hover:text-white ease-in duration-500 font-bold md:text-xl">
                <Link
                  href="https://www.trustpilot.com/review/constructioncardshelpline.co.uk"
                  target="_blank"
                  className="text-center"
                >
                  View All Testimonial
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full bg-[url('/whyus/whychooseusbg.jpg')] py-6">
            <div>
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
                    <div className=" flex flex-col md:flex-row items-center gap-2 md:mx-10 py-10">
                      {/* <img className="w-1/4" src={item?.immg} alt={item?.title} /> */}
                      <div className="flex flex-col items-end  gap-4">
                        <p className="">{item?.text}</p>
                        <p className="font-bold text-xl capitalize">{item?.title}</p>

                        <div className="flex items-center text-xl text-yellow-500">
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
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Testimonial;
