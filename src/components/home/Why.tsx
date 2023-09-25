import React from "react";
import Section from "../common/Section";
import { IoMdTime } from "react-icons/io";
import { MdHeadphones, MdOutlineWork } from "react-icons/md";
import { FaDollarSign, FaHandshake } from "react-icons/fa";

type Props = {};

const card = [
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    title: "Quick Click to Book",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Why = (props: Props) => {
  return (
    <div className="py-10 md:py-12 stickyImg">
      <Section>
        <div>
          <div className="bg-[url('/whyus/titlebg2.jpg')] py-6">
            <p className="text-center text-2xl font-bold py-2 text-[#ff5e14]">Why Choose Us</p>
            <p className="text-center">
              anima, ex mane vere anima hi qui anima, ex mane vere anima hi qui anima, ex mane vere
              anima anima hi qui.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 py-2">
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col space-y-4 md:space-y-6 md:pt-10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff5e14]  rounded-md text-white text-3xl p-3">
                    <MdOutlineWork className="" />
                  </div>
                  <div>
                    <p className="font-bold md:text-2xl text-xl text-[#040f28]">GUARANTEED WORK</p>
                    <hr className="mt-3 h-1 w-20 rounded-md bg-[#ff5e14]" />
                  </div>
                </div>

                <p>
                  anima, ex mane vere anima hi qui anima, ex mane vere anima hi qui anima ex mane
                  vere anima
                </p>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-6 md:pb-10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff5e14]  rounded-md text-white text-3xl p-3">
                    <FaDollarSign className="" />
                  </div>
                  <div>
                    <p className="font-bold md:text-2xl text-xl text-[#040f28]">FAST SERVICE</p>
                    <hr className="mt-3 h-1 w-20 rounded-md bg-[#ff5e14]" />
                  </div>
                </div>
                <p>
                  anima, ex mane vere anima hi qui anima, ex mane vere anima hi qui anima ex mane
                  vere anima
                </p>
              </div>
            </div>
            <div className="">
              <img className="mx-auto" src="/whyus/whychooseusimg.png" alt="whychooseusimg" />
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col space-y-4 md:space-y-6 md:pt-10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff5e14]  rounded-md text-white text-3xl p-3">
                    <MdHeadphones className="" />
                  </div>
                  <div>
                    <p className="font-bold md:text-2xl text-xl text-[#040f28]">
                      24/7 EMERGENCY SUPPORT
                    </p>
                    <hr className="mt-3 h-1 w-20 rounded-md bg-[#ff5e14]" />
                  </div>
                </div>
                <p>
                  anima, ex mane vere anima hi qui anima, ex mane vere anima hi qui anima ex mane
                  vere anima
                </p>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-6 md:pb-10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff5e14]  rounded-md text-white text-3xl p-3">
                    <FaHandshake className="" />
                  </div>
                  <div>
                    <p className="font-bold md:text-2xl text-xl text-[#040f28]">BEST SUPPORT</p>
                    <hr className="mt-3 h-1 w-20 rounded-md bg-[#ff5e14]" />
                  </div>
                </div>
                <p>
                  anima, ex mane vere anima hi qui anima, ex mane vere anima hi qui anima ex mane
                  vere anima
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <Section>
        

        <div>
          <p className="text-center font-bold text-2xl text-[#ff5e14]">
            Why Choose Construction Duty
          </p>
          <img
            className="mx-auto h-10 w-96"
            src="https://static.vecteezy.com/system/resources/thumbnails/012/634/800/small/art-deco-outline-stroke-in-golden-color-for-classy-and-luxury-style-premium-vintage-line-art-design-element-free-png.png"
            alt=""
          />

          <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {card.map((item, index) => (
              <div
                key={index}
                className="h-[270px]  w-[270px] rounded-md bg-gradient-to-r from-[#040f28] via-[#ff5e14] to-yellow-500 p-1 cursor-pointer mx-auto"
              >
                <div className="flex flex-col h-full w-full items-center justify-center bg-white">
                  <IoMdTime size={80} className="text-[#040f28]" />
                  <p className="py-2 font-bold text-xl">{item?.title}</p>
                  <p className="text-center">{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section> */}
    </div>
  );
};

export default Why;
