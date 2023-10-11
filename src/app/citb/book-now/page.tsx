import CitbForm from "@/components/book/citb/CitbForm";
import Note from "@/components/book/citb/Note";
// import PersnoalDetails from "@/components/common/PersnoalDetails";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Note />
      <CitbForm />
    </div>
  );
};

export default page;
