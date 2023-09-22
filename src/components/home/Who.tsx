import React from "react";
import Section from "../common/Section";

type Props = {};

const Who = (props: Props) => {
  return (
    <div className="py-16">
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full">
            <img className="h-96" src="/hero/HB-1-3.webp" alt="" />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <p className="font-bold text-[#ff5e14] text-2xl">Who We Are?</p>
            <p>
              Construction Duty is just not a name but the word itself defines it means, a duty in
              the construction industry that imparts knowledge and guidance on Health and Safety,
              risk management on construction sites to the labourer, tradesmen, and visitors to
              involve in the area of the construction sector. Construction Duty is one of the
              prominent consulting firms in the UK which gives appropriate information in the
              construction industry to make the site safer and risk-free.
            </p>
            <div>
              <button className="bg-yellow-400 text-white font-semibold hover:bg-yellow-500 px-3 py-2 rounded-lg cursor-pointer ease-in-out duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Who;
