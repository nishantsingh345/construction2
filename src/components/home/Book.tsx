import React from "react";
import Section from "../common/Section";
import Link from "next/link";
import { RiComputerFill } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";

type Props = {};

const card = [
  {
    id: 1,
    text: "CITB TEST",
    link: "/citb/book-now",
    icon: <RiComputerFill size={30} />,
  },
  {
    id: 1,
    text: "COURSE",
    link: "/course/book-now",
    icon: <GrNotes size={30} />,
  },
  {
    id: 1,
    text: "CSCS CARDS",
    link: "/cscscards/book-now",
    icon: <FaBookReader size={30} />,
  },
  {
    id: 1,
    text: "REVISION MATERIAL",
    link: "/revisnoal-material",
    icon: <FaBookReader size={30} />,
  },
];

const Book = (props: Props) => {
  return (
    <div className="py-10 bg-[#040f28]/70">
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-14">
            {card.map((item, index) => (
              <div
                key={index}
                className="border-2 rounded-2xl w-[225px] h-[120px] bg-white border-[#ff5e14] relative  px-2 mx-auto"
              >
                <Link href={item?.link} className="absolute -top-5 left-[50px]">
                  <div className="bg-white p-2 w-32 h-14 text-[#040f28] rounded-b-2xl border-2 border-[#ff5e14] border-t-2 border-t-[#040f28] flex items-center justify-center">
                    {item?.icon}
                  </div>
                </Link>
                <div>
                  <p className="flex items-center justify-center text-black font-bold pt-12">
                    {item?.text}
                  </p>
                </div>
                <Link href={item?.link} className="absolute -bottom-5 left-[66px]">
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
