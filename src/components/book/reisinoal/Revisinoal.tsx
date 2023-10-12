"use client";

import Section from "@/components/common/Section";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type Props = {};

const Revisinoal = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("form subited");
  };
  return (
    <div>
      <Section>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </Section>
    </div>
  );
};

export default Revisinoal;

// import Section from "@/components/common/Section";
// import { Button, Select, Input, Form, Checkbox } from "@/components/forms";
// // import { error } from "console";
// import Link from "next/link";
// import React, { Children } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Props = {};

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

// const RevisinoalForm = (props: Props) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
//   return (
//     <div className="py-10">
//       <Section>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <div className="flex flex-col space-y-4 py-6 border-2 border-gray-500 rounded-md px-3">
//             <p className="font-bold text-2xl py-3">Persnoal Details</p>
//             <div className="grid md:grid-cols-2 gap-4 ">
//               <Input
//                 type={"string"}
//                 name={"name"}
//                 id="name"
//                 register={register}
//                 required={true}
//                 label="First Name"
//                 placeholder={""}
//               />

//               <Input
//                 type={"string"}
//                 name={"lastname"}
//                 id="lastname"
//                 register={register}
//                 required={true}
//                 label="Last Name"
//                 placeholder={""}
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 ">
//               <Input
//                 type={"date"}
//                 name={"birthdate"}
//                 id="birthdate"
//                 register={register}
//                 required={true}
//                 label="Birth Of Date"
//                 placeholder={""}
//               />

//               <Input
//                 type={"text"}
//                 name={"mobileNumber"}
//                 id="mobileNumber"
//                 register={register}
//                 required={true}
//                 maxLength={10}
//                 label="Phone Number"
//                 placeholder={""}
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 ">
//               <Input
//                 type={"email"}
//                 name={"email"}
//                 id="email"
//                 register={register}
//                 required={true}
//                 label="Email"
//                 placeholder={""}
//               />

//               <Input
//                 type={"text"}
//                 name={"postcpde"}
//                 id="postcode"
//                 register={register}
//                 required={true}
//                 maxLength={""}
//                 label="Postcode"
//                 placeholder={""}
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 ">
//               <Input
//                 type={"text"}
//                 name={"address"}
//                 id="address"
//                 register={register}
//                 required={true}
//                 label="Address"
//                 placeholder={""}
//               />

//               <Input
//                 type={"text"}
//                 name={"InsuranceNumber"}
//                 id="InsuranceNumber"
//                 register={register}
//                 required={true}
//                 maxLength={""}
//                 label="National Insurance Number (Optional)"
//                 placeholder={""}
//               />
//             </div>

//             <div className="py-6 border-2 border-gray-500 rounded-md flex flex-col space-y-2 px-3">
//               <p className="font-bold text-2xl">Buy Books & DVD</p>
//               <label className="cursor-pointer label">
//                 <span className="label-text font-bold md:text-lg">
//                   HS&E Test for Operatives & Specialists Book
//                 </span>
//                 <input
//                   name="isDeveloper"
//                   type="checkbox"
//                   ref={register}
//                   required={false}
//                   className="checkbox checkbox-error"
//                 />
//               </label>
//               <label className="cursor-pointer label">
//                 <span className="label-text font-bold md:text-lg">
//                   HS&E Test for Operatives & Specialists DVD
//                 </span>
//                 <input type="checkbox" className="checkbox checkbox-error" />
//               </label>
//               <label className="cursor-pointer label">
//                 <span className="label-text font-bold md:text-lg">
//                   Health, safety and environment test for managers and professionals Book
//                 </span>
//                 <input type="checkbox" className="checkbox checkbox-error" />
//               </label>
//               <label className="cursor-pointer label">
//                 <span className="label-text font-bold md:text-lg">
//                   Health, safety and environment test for managers and professionals DVD
//                 </span>
//                 <input type="checkbox" className="checkbox checkbox-error" />
//               </label>
//             </div>

//             <div className="flex items-center justify-center ">
//               <Button
//                 className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 cursor-pointer px-10 focus:ring-gray-300 text-white py-3 font-bold mx-auto text-lg rounded-lg"
//                 btnText="PROCEED"
//                 type="Submit"
//               />
//             </div>
//           </div>
//         </Form>
//       </Section>
//     </div>
//   );
// };

// export default RevisinoalForm;
