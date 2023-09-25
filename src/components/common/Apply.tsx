import React from "react";
import Section from "./Section";
import { BsStars } from "react-icons/bs";

type Props = {};

const Apply = (props: Props) => {
  return (
    <div className="py-5 bg-yellow-500 ">
      <Section>
        <div className="flex flex-col  justify-between items-center gap-2 md:flex-row">
          <div className="flex items-center gap-2 text-[#ff5e14]">
            <BsStars size={25} />
            <p className="font-bold text-white text-xl"> Feel free to apply now </p>
            <BsStars size={25} />
          </div>
          <div className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 text-white font-semibold text-2xl px-4 py-2 rounded-lg cursor-pointer ease-in-out duration-300">
            Apply
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Apply;
