import Contant from "@/components/about/Contant";
import Apply from "@/components/common/Apply";
import Hero from "@/components/common/Hero";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero name="Who We Are" />
      <Contant />
      <Apply />
    </div>
  );
};

export default page;
