import React from "react";
import Section from "../common/Section";
import { FaAddressCard } from "react-icons/fa";

type Props = {};

const card = [
  {
    id: 1,
    icon: <FaAddressCard size={40} />,
    title: "Registered Address:",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    id: 1,
    icon: <FaAddressCard size={40} />,
    title: "Registered Address:",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    id: 1,
    icon: <FaAddressCard size={40} />,
    title: "Registered Address:",
    text: "Lorem ipsum dolor sit amet",
  },
];

const Cards = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {card.map((item, index) => (
            <div
              key={index}
              className="group bg-[#040f28]/70 hover:bg-[#ff5e14] ease-in-out duration-300 rounded-md p-5 mx-auto"
            >
              <div className="flex items-center  justify-center ">
                <div className=" text-white bg-[#040f28] px-6 py-3 rounded-3xl  group-hover:bg-[#ff5e14]">
                  {item?.icon}
                </div>
              </div>
              <div className="py-4 bg-[#040f28] px-10 mt-3 text-white rounded-3xl">
                <p className="text-center font-bold text-2xl">{item?.title}</p>
                <p className="text-center pt-3 ">{item?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Cards;
