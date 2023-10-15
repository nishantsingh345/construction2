import CscseForm from "@/components/book/cscscards/CscseForm";
import Note from "@/components/book/cscscards/Note";
// import PersnoalDetails from "@/components/common/PersnoalDetails";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Note />
      <CscseForm />
      {/* <PersnoalDetails href="/" /> */}
    </div>
  );
};

export default page;
