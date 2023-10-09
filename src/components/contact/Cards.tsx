import React from "react";
import Section from "../common/Section";
import { FaAddressCard, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {};

const card = [
  {
    id: 1,
    icon: <FaAddressCard size={40} />,
    title: "Registered Address:",
    text: "124, City Road London , EC1V 2NX",
  },
  {
    id: 1,
    icon: <FaPhone size={40} />,
    title: "Phone:",
    text: "+91 800 0016 122",
  },
  {
    id: 1,
    icon: <MdEmail size={40} />,
    title: "Email:",
    text: "info@constructioncardshelpline.co.uk",
  },
];

const Cards = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="flex flex-col md:flex-row  items-center justify-center md:gap-10 gap-8">
          {card.map((item, index) => (
            <div
              key={index}
              className="group bg-[#040f28]/70 hover:bg-[#ff5e14] ease-in-out duration-300 rounded-md px-5 py-5 mx-auto w-full"
            >
              <div className="flex items-center  justify-center ">
                <div className=" text-white bg-[#040f28] px-6 py-3 rounded-3xl  group-hover:bg-[#ff5e14]">
                  {item?.icon}
                </div>
              </div>
              <div className="py-4 bg-[#040f28] px-3  mt-3 text-white rounded-3xl">
                <p className="text-center font-bold text-2xl">{item?.title}</p>
                <p className="text-center pt-3">{item?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Cards;
