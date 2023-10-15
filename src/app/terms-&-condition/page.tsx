import Hero from "@/components/common/Hero";
import Terms from "@/components/quicklinks/Terms";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero name="Term & Condition" />
      <Terms />
    </div>
  );
};

export default page;
