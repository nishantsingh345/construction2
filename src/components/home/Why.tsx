import React from "react";
import Section from "../common/Section";

type Props = {};

const Why = (props: Props) => {
  return (
    <div className="py-10 bg-[#040f28]/20">
      <Section>
        <div>
          <p className="text-center font-bold text-2xl text-[#ff5e14]">Click To Book Now</p>
          <img
            className="mx-auto h-10 w-96"
            src="https://static.vecteezy.com/system/resources/thumbnails/012/634/800/small/art-deco-outline-stroke-in-golden-color-for-classy-and-luxury-style-premium-vintage-line-art-design-element-free-png.png"
            alt=""
          />
        </div>
      </Section>
    </div>
  );
};

export default Why;
