import React from "react";
import Section from "./Section";
import Marquee from "react-fast-marquee";

type Props = {};

const Marque = (props: Props) => {
  return (
    <div className="overflow-x-hidden">
      <Section>
        <div className="py-12">
          <p className="text-center font-bold text-2xl text-[#ff5e14] pb-4">Our Partners</p>
          <Marquee pauseOnHover className="">
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
            <div className="mx-4 w-48">
              <img src="/logo1.jpeg" alt="" />
            </div>
          </Marquee>
        </div>
      </Section>
    </div>
  );
};

export default Marque;
