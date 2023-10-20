import React from "react";
import Section from "../common/Section";
import Link from "next/link";

type Props = {};

const Who = (props: Props) => {
  return (
    <div className="py-16">
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-5">
          <div className="w-[50%]">
            <img
              className="w-[350px] h-[350px]"
              src="https://www.constructionduty.com/images/CDL%20Design.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-6 w-full">
            <p className="font-bold text-[#ff5e14] text-2xl md:text-3xl">Who We Are?</p>
            <p>
              Construction  card helpline is just not a name but the word itself defines it means, a duty in
              the construction industry that imparts knowledge and guidance on Health and Safety,
              risk management on construction sites to the labourer, tradesmen, and visitors to
              involve in the area of the construction sector. Construction  card helpline is one of the
              prominent consulting firms in the UK which gives appropriate information in the
              construction industry to make the site safer and risk-free.
            </p>
            <Link href="/about">
              <button className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 text-white font-semibold  px-3 py-2 rounded-lg cursor-pointer ease-in-out duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Who;
