import Note from "@/components/book/citb.tsx/Note";
import PersnoalDetails from "@/components/common/PersnoalDetails";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Note />
      <PersnoalDetails href="/" />
    </div>
  );
};

export default page;
