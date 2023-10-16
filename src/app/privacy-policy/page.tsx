import Hero from "@/components/common/Hero";
import Privacy from "@/components/quicklinks/Privicy";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero name="Privacy Policy" />
      <Privacy />
    </div>
  );
};

export default page;
