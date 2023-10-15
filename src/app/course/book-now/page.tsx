import CourseForm from "@/components/book/course/CourseForm";
import Note from "@/components/book/course/Note";
import PersnoalDetails from "@/components/common/PersnoalDetails";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Note />
      <CourseForm />
      {/* <PersnoalDetails href="" /> */}
    </div>
  );
};

export default page;
