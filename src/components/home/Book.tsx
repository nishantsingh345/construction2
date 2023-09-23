import React from "react";
import Section from "../common/Section";
import Link from "next/link";

type Props = {};

const card = [
  {
    id: 1,
    text: "CITB TEST",
    link: "/",
  },
  {
    id: 1,
    text: "CITB TEST",
    link: "/",
  },
  {
    id: 1,
    text: "CITB TEST",
    link: "/",
  },
  {
    id: 1,
    text: "CITB TEST",
    link: "/",
  },
];

const Book = (props: Props) => {
  return (
    <div className="py-10 bg-[#040f28]/20">
      <Section>
        <div>
          <div>
            <p className="text-center font-bold text-2xl text-[#ff5e14]">Click To Book Now</p>
            <img
              className="mx-auto h-10 w-96"
              src="https://static.vecteezy.com/system/resources/thumbnails/012/634/800/small/art-deco-outline-stroke-in-golden-color-for-classy-and-luxury-style-premium-vintage-line-art-design-element-free-png.png"
              alt=""
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {card.map((item, index) => (
              <div
                key={index}
                className="border-2 rounded-2xl w-[225px] h-[120px] bg-white border-[#ff5e14] relative  px-2 mx-auto"
              >
                <div>
                  <p className="flex items-center justify-center text-black font-bold pt-12">
                    {item?.text}
                  </p>
                </div>

                <Link href={item?.link} className="relative bottom-0 left-14 top-[26px]">
                  <button className="bg-[#ff5e14] p-2 text-white rounded-2xl">Book Now</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Book;
