"use client";
import Section from "@/components/common/Section";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
  {
    id: "hS&Ebook",
    label: "HS&E Test for Operatives & Specialists Book",
    price: 150,
  },
  {
    id: "hS&Edvd",
    label: "HS&E Test for Operatives & Specialists DVD",
    price: 250,
  },
  {
    id: "safetybook",
    label:
      "Health, safety and environment test for managers and professionals Book",
    price: 350,
  },
  {
    id: "safetydvd",
    label:
      "Health, safety and environment test for managers and professionals DVD",
    price: 450,
  },
] as const;

const FormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  birthdate: z.string().min(2).max(50),
  number: z.string().min(10).max(50),
  email: z.string().min(1).max(50),
  postcode: z.string().optional(),
  address: z.string().min(1).max(50),
  insurence: z.string().min(1).max(50),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type Props = {};

const Revisinoal = (props: Props) => {
  //TODO state with price
  const [price, setPrice] = useState<any>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastname: "",
      items: [],
    },
  });
  const { watch } = form;

  const itemsWatch = watch("items");
  // ! useeffectg
  useEffect(() => {
    const itemW = items?.filter((watch) => itemsWatch.includes(watch.id));
    setPrice(itemW);
  }, [itemsWatch]);

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    values.items = price;
    console.log(values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="py-10">
      <Section>
        <div className="border-slate-700 border-2 p-3 rounded-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <div className="w-full space-y-4 border-2 border-slate-700 p-3 rounded-md">
                <p className="font-bold space-y-2 text-2xl">Persnoal Details</p>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>First Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Last Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="birthdate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Birth Of Date*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Birth of Date"
                            type="date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Mobile*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Number"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Postcode*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Postcode"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Address*</FormLabel>
                        <FormControl>
                          <Input placeholder="Address" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="insurence"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Insurence No.*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Insurence Number"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-full space-y-4 border-2 border-slate-700 p-3 rounded-md">
                <p className="font-bold space-y-2 text-2xl">Buy Books & DVD</p>
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      {items.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex  md:items-center items-start  gap-2 space-y-4 justify-between"
                              >
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  className="bg-[#ff5e14] hover:bg-[#ff5e14]/90"
                  size="lg"
                  type="submit"
                >
                  PROCEED
                </Button>
              </div>
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
