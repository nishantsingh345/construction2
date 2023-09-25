import React from "react";
import Section from "../common/Section";
import { FaPlus, FaTrophy } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";

type Props = {};

const card = [
  {
    id: 1,
    img: "/slat/countericon1.png",
    title: 2000,
    icon: <FaPlus />,
    btn: "PROJECTS COMPLETED",
  },
  {
    id: 2,
    img: "/slat/countericon2.png",
    title: 500,
    icon: <FaPlus />,
    btn: "HAPPY CLIENTS",
  },
  {
    id: 3,
    img: "/slat/countericon3.png",
    title: 225,
    icon: <FaPlus />,
    btn: "AWARDS WON",
  },
  {
    id: 4,
    img: "/slat/countericon4.png",
    title: 2100,
    icon: <FaPlus />,
    btn: "TOTAL STAFF",
  },
];

const Stat = (props: Props) => {
  return (
    <div className=" stickyImgslat">
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {card.map((item, index) => (
            <div key={index}>
              <div className="bg-white p-5 flex flex-col gap-2 items-center justify-center w-[130px] mx-auto">
                <div>
                  <img src={item?.img} alt="" />
                  <div className="flex items-center gap-2 text-2xl text-[#ff5e14] font-bold">
                    <p>{item?.title}</p> {item?.icon}
                  </div>
                </div>
              </div>
              <div className="bg-[#ff5e14] md:px-4 px-2 md:py-3 py-2 text-lg text-white font-bold md:text-xl">
                <p className="text-center">{item?.btn}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-2">
          <div className="flex items-start gap-5 md:border-r border-[#040f28]">
            <FaTrophy size={60} className="text-[#ff5e14] pt-2" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">20 %</p>
              <p className="text-white text-xl">years of experience</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:pl-2 md:border-r border-[#040f28]">
            <IoIosPeople size={80} className="text-[#ff5e14]" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">1,346</p>
              <p className="text-white text-xl">Satisfied customers</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:pl-2 md:border-r border-[#040f28]">
            <CgNotes size={60} className="text-[#ff5e14] pt-2" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">85</p>
              <p className="text-white text-xl">Complete projects</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:pl-2">
            <FaTrophy size={60} className="text-[#ff5e14] pt-2" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">13</p>
              <p className="text-white text-xl">Award winning</p>
            </div>
          </div>
        </div> */}
      </Section>
    </div>
  );
};

export default Stat;
