import Hero from "@/components/common/Hero";
import Cards from "@/components/contact/Cards";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero name="Contact Us" />
      <Cards />
    </div>
  );
};

export default page;
