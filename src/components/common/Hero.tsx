import React from "react";
import Section from "./Section";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  name: string;
};

const Hero = ({ name }: Props) => {
  return (
    <div className="bg-[#040f28] w-full py-10 md:py-20">
      <Section>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Link href="/">Home</Link>
              <FaArrowRight />
              <p>{name}</p>
            </div>

            <p className="text-2xl font-bold text-white text-center py-3">{name}</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
