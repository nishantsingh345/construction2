import React from "react";
import Section from "../common/Section";
import { IoMdTime } from "react-icons/io";

type Props = {};

const card = [
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Why = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div>
          <p className="text-center font-bold text-2xl text-[#ff5e14]">
            Why Choose Construction Duty
          </p>
          <img
            className="mx-auto h-10 w-96"
            src="https://static.vecteezy.com/system/resources/thumbnails/012/634/800/small/art-deco-outline-stroke-in-golden-color-for-classy-and-luxury-style-premium-vintage-line-art-design-element-free-png.png"
            alt=""
          />

          <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {card.map((item, index) => (
              <div
                key={index}
                className="h-[270px]  w-[270px] rounded-md bg-gradient-to-r from-[#040f28] via-[#ff5e14] to-yellow-500 p-1 cursor-pointer mx-auto"
              >
                <div className="flex flex-col h-full w-full items-center justify-center bg-white">
                  <IoMdTime size={80} className="text-[#040f28]" />
                  <p className="py-2 font-bold text-xl">{item?.title}</p>
                  <p className="text-center">{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Why;
