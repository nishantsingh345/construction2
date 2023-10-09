import Hero from "@/components/common/Hero";
import PersnoalDetails from "@/components/common/PersnoalDetails";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero name="Revisional Material" />
      <PersnoalDetails href="/" />
    </div>
  );
};

export default page;
