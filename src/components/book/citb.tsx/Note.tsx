import Section from "@/components/common/Section";
import React from "react";

type Props = {};

const Note = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div>
          <div className="flex items-center justify-center">
            <div className="bg-[#040f28] py-4 px-10 md:px-16 rounded-tl-3xl rounded-br-3xl">
              <p className="text-center font-bold text-white md:text-3xl text-2xl">
                Book Your CITB Test
              </p>
            </div>
          </div>

          <div className="py-5 px-2 shadow-2xl mt-5 rounded-t-2xl border-t-4 border-[#040f28] text-justify">
            <p className="font-bold text-xl text-[#040f28]">Book Your CITB Test</p>
            <p>
              Book your CITB Health, Safety & Environment Test (commonly known as a CITB test or a
              CITB Touch Screen Test), the CITB Health, Safety & Environment Test that is required
              to apply for a CSCS Card or to renew your CSCS Card. Not Sure which test to take?
              Speak to our Experts
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Note;
