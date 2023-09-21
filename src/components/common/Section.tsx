import React from "react";

type Props = {
  children: JSX.Element;
};

const Section = ({ children }: Props) => {
  return <div className="max-w-7xl mx-auto px-1">{children}</div>;
};

export default Section;
