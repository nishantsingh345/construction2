import React from "react";
import Section from "../common/Section";
import { FaTrophy } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";

type Props = {};

const Stat = (props: Props) => {
  return (
    <div className="py-12">
      <Section>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-2">
          <div className="flex items-start gap-5 md:border-r border-[#040f28]">
            <FaTrophy size={60} className="text-[#ff5e14] pt-2" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">20 %</p>
              <p className="text-[#040f28] text-xl">years of experience</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:pl-2 md:border-r border-[#040f28]">
            <IoIosPeople size={80} className="text-[#ff5e14]" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">1,346</p>
              <p className="text-[#040f28] text-xl">Satisfied customers</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:pl-2 md:border-r border-[#040f28]">
            <CgNotes size={60} className="text-[#ff5e14] pt-2" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">85</p>
              <p className="text-[#040f28] text-xl">Complete projects</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:pl-2">
            <FaTrophy size={60} className="text-[#ff5e14] pt-2" />
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#ff5e14]">13</p>
              <p className="text-[#040f28] text-xl">Award winning</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Stat;
