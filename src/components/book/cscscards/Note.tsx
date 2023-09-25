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
                CSCS Card Application Form
              </p>
            </div>
          </div>

          <div className="py-5 px-2 shadow-2xl mt-5 rounded-t-2xl border-t-4 border-[#040f28] text-justify">
            <p className="font-bold text-xl text-[#040f28]">
              Get Your CSCS Card Hassle Free, CSCS Card Online Booking
            </p>
            <p>
              Please enter the address where you want your card to delivered to in the form below.
            </p>
            <p>
              You must have completed the CITB HS&E Test within the last 2 years to apply for a CSCS
              Card. You can apply for a New Card, renew or request a replacement for lost CSCS card.
              This is an application for a CSCS Card through Construction Duty, an online provider
              of bookings, applications and training.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Note;
