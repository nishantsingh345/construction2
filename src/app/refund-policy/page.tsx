import Hero from "@/components/common/Hero";
import Refund from "@/components/quicklinks/Refund";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero name="Refund Policy" />
      <Refund />
    </div>
  );
};

export default page;
