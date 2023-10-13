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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    label: "Health, safety and environment test for managers and professionals Book",
    price: 350,
  },
  {
    id: "safetydvd",
    label: "Health, safety and environment test for managers and professionals DVD",
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
  postcodetest: z.string().optional(),
  address: z.string().min(1).max(50),
  insurence: z.string().min(1).max(50),
  selecttest: z.string({
    required_error: "Please select an test to display.",
  }),
  selectlang: z
    .string({
      required_error: "Please select an Language to test.",
    })
    .optional(),
  preferredtime: z.string({
    required_error: "Please select Prefered Time for test.",
  }),
  testcenter: z.string({
    required_error: "Please select Test Center for test.",
  }),
  preferreddate: z.string().min(1).max(50),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type Props = {};

const CitbForm = (props: Props) => {
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
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
                          <Input placeholder="Birth of Date" type="date" {...field} />
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
                          <Input placeholder="Number" type="number" {...field} />
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
                          <Input placeholder="Postcode" type="text" {...field} />
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
                          <Input placeholder="Insurence Number" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-full space-y-4 border-2 border-slate-700 p-3 rounded-md">
                <p className="font-bold space-y-2 text-2xl">Test Details</p>

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="selecttest"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Choose Your Test*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Test*" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Operatives (Green, Blue, Gold CSCS Cards)">
                              Operatives (Green, Blue, Gold CSCS Cards)
                            </SelectItem>
                            <SelectItem value="Plumbing or Gas Test (SPEC-PLUM)">
                              Plumbing or Gas Test (SPEC-PLUM)
                            </SelectItem>
                            <SelectItem value="Working at Heights Test (SPEC-WAH)">
                              Working at Heights Test (SPEC-WAH)
                            </SelectItem>
                            <SelectItem value="Managers & Professionals Test (MAP)">
                              Managers & Professionals Test (MAP)
                            </SelectItem>
                            <SelectItem value="Supervisors Test (SPEC-SUP)">
                              Supervisors Test (SPEC-SUP)
                            </SelectItem>
                            <SelectItem value="Highway Works Test (SPEC-HIW)">
                              Highway Works Test (SPEC-HIW)
                            </SelectItem>
                            <SelectItem value="Demolition Test (SPEC-DEM)">
                              Demolition Test (SPEC-DEM)
                            </SelectItem>
                            <SelectItem value="Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)">
                              Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)
                            </SelectItem>
                            <SelectItem value="Ductwork HVACR Test (SPEC-DUCT)">
                              Ductwork HVACR Test (SPEC-DUCT)
                            </SelectItem>
                            <SelectItem value="Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)">
                              Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)
                            </SelectItem>
                            <SelectItem value="Services and Facilities HVACR Test (SPEC-SAF)">
                              Services and Facilities HVACR Test (SPEC-SAF)
                            </SelectItem>
                            <SelectItem value="Lift and Escalators Test (SPEC-LAEE)">
                              Lift and Escalators Test (SPEC-LAEE)
                            </SelectItem>
                            <SelectItem value="Tunnelling Test (SPEC-TUNN)">
                              Tunnelling Test (SPEC-TUNN)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="selectlang"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Select Language*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Language*" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Voice over English">Voice over English</SelectItem>
                            <SelectItem value="Bulgarian">Bulgarian</SelectItem>
                            <SelectItem value="Czech">Czech</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="German">German</SelectItem>
                            <SelectItem value="Hungarian">Hungarian</SelectItem>
                            <SelectItem value="Polish">Polish</SelectItem>
                            <SelectItem value="Punjabi">Punjabi</SelectItem>
                            <SelectItem value="Russia">Russia</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="preferredtime"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Preferred Time*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Preferred Time*" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="09:00 To 10:00 AM">09:00 To 10:00 AM</SelectItem>
                            <SelectItem value="09:00 To 10:00 AM">09:00 To 10:00 AM</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="testcenter"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Test Center Venue*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Test Center Venue*" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="OxFord">OxFord</SelectItem>
                            <SelectItem value="New York">New York</SelectItem>
                            <SelectItem value="London">London</SelectItem>
                            <SelectItem value="Brazil">Brazil</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="preferreddate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Preferred Date*</FormLabel>
                        <FormControl>
                          <Input placeholder="Preferred Date*" type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postcodetest"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-1">
                        <FormLabel>Postcode*</FormLabel>
                        <FormControl>
                          <Input placeholder="Postcode" type="text" {...field} />
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
                                className="flex  items-start md:items-center  py-3 gap-2 justify-between"
                              >
                                <FormLabel className="font-normal">{item.label}</FormLabel>
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter((value) => value !== item.id)
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
                <Button className="bg-[#ff5e14] hover:bg-[#ff5e14]/90" size="lg" type="submit">
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

export default CitbForm;

// "use client";

// import Section from "@/components/common/Section";
// import { Button, Select, Input, Form } from "@/components/forms";
// import Link from "next/link";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Props = {};

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

// const CitbForm = (props: Props) => {
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

//             <div className="py-6 border-2 border-gray-500 rounded-md flex flex-col space-y-4 px-3">
//               <p className="font-bold text-2xl">Test Details</p>
//               <div className="grid md:grid-cols-2 gap-4 ">
//                 <Select
//                   errors={errors}
//                   required={true}
//                   label="Choose Your Test*"
//                   id="test"
//                   name="test"
//                   register={register}
//                   options={[
//                     {
//                       name: "Operatives (Green, Blue, Gold CSCS Cards)",
//                       value: { name: "Operatives (Green, Blue, Gold CSCS Cards)" },
//                     },
//                     {
//                       name: "Plumbing or Gas Test (SPEC-PLUM)",
//                       value: { name: "Plumbing or Gas Test (SPEC-PLUM)" },
//                     },
//                     {
//                       name: "Working at Heights Test (SPEC-WAH)",
//                       value: { name: "Working at Heights Test (SPEC-WAH)" },
//                     },
//                     {
//                       name: "Managers & Professionals Test (MAP)",
//                       value: { name: "Managers & Professionals Test (MAP)" },
//                     },
//                     {
//                       name: "Supervisors Test (SPEC-SUP)",
//                       value: { name: "Supervisors Test (SPEC-SUP)" },
//                     },
//                     {
//                       name: "Highway Works Test (SPEC-HIW)",
//                       value: { name: "Highway Works Test (SPEC-HIW)" },
//                     },
//                     {
//                       name: "Demolition Test (SPEC-DEM)",
//                       value: { name: "Demolition Test (SPEC-DEM)" },
//                     },
//                     {
//                       name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)",
//                       value: { name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)" },
//                     },
//                     {
//                       name: "Ductwork HVACR Test (SPEC-DUCT)",
//                       value: { name: "Ductwork HVACR Test (SPEC-DUCT)" },
//                     },
//                     {
//                       name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)",
//                       value: { name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)" },
//                     },
//                     {
//                       name: "Services and Facilities HVACR Test (SPEC-SAF)",
//                       value: { name: "Services and Facilities HVACR Test (SPEC-SAF)" },
//                     },
//                     {
//                       name: "Lift and Escalators Test (SPEC-LAEE)",
//                       value: { name: "Lift and Escalators Test (SPEC-LAEE)" },
//                     },
//                     {
//                       name: "Tunnelling Test (SPEC-TUNN)",
//                       value: { name: "Tunnelling Test (SPEC-TUNN)" },
//                     },
//                   ]}
//                 />
//                 <Select
//                   errors={errors}
//                   required={true}
//                   label="Test Language"
//                   id="Test Language"
//                   name="Test Language"
//                   register={register}
//                   options={[
//                     {
//                       name: "Astrology",
//                       // value: { name: "Astrology", price: 24999 },
//                     },
//                   ]}
//                 />
//               </div>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <Input
//                   type={"Date"}
//                   name={"date"}
//                   id="date"
//                   register={register}
//                   required={true}
//                   maxLength={""}
//                   label="Select Date"
//                   placeholder={""}
//                 />

//                 <Input
//                   type="text"
//                   id="postcpde"
//                   placeholder="postcpde"
//                   name="postcode"
//                   label="postcode"
//                   register={register}
//                   errors={errors}
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-4 ">
//                 <Select
//                   errors={errors}
//                   required={true}
//                   label="Test Center Venue*"
//                   id="Test Center Venue*"
//                   name="Test Center Venue*"
//                   register={register}
//                   options={[
//                     {
//                       value: { name: "Astrology" },
//                     },
//                   ]}
//                 />
//                 <Select
//                   errors={errors}
//                   required={true}
//                   label="Preferred Time*"
//                   id="time*"
//                   name="time"
//                   register={register}
//                   options={[
//                     {
//                       name: "09:00  AM - 11:00 AM",
//                       value: { name: "09:00  AM - 11:00 AM" },
//                     },
//                     {
//                       name: "11:00  AM - 01:00 PM",
//                       value: { name: "11:00  AM - 01:00 PM" },
//                     },
//                     {
//                       name: "01:00  PM - 03:00 PM",
//                       value: { name: "03:00  PM - 05:00 PM" },
//                     },
//                     {
//                       name: "03:00  PM - 05:00 PM",
//                       value: { name: "03:00  PM - 05:00 PM" },
//                     },
//                   ]}
//                 />
//               </div>
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

// export default CitbForm;

// {
//   /* <div className="max-w-sm md:max-w-4xl mx-auto my-8 rounded-lg md:gap-4 gap-3 bg-[#fff] p-4 grid">
//   <div className="col-span-2">
//     <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//       <div className="w-full">
//         <Select
//           errors={errors}
//           required={true}
//           label="Choose Your Test*"
//           id="test"
//           name="test"
//           register={register}
//           options={[
//             {
//               name: "Operatives (Green, Blue, Gold CSCS Cards)",
//               value: { name: "Operatives (Green, Blue, Gold CSCS Cards)" },
//             },
//             {
//               name: "Plumbing or Gas Test (SPEC-PLUM)",
//               value: { name: "Plumbing or Gas Test (SPEC-PLUM)" },
//             },
//             {
//               name: "Working at Heights Test (SPEC-WAH)",
//               value: { name: "Working at Heights Test (SPEC-WAH)" },
//             },
//             {
//               name: "Managers & Professionals Test (MAP)",
//               value: { name: "Managers & Professionals Test (MAP)" },
//             },
//             {
//               name: "Supervisors Test (SPEC-SUP)",
//               value: { name: "Supervisors Test (SPEC-SUP)" },
//             },
//             {
//               name: "Highway Works Test (SPEC-HIW)",
//               value: { name: "Highway Works Test (SPEC-HIW)" },
//             },
//             {
//               name: "Demolition Test (SPEC-DEM)",
//               value: { name: "Demolition Test (SPEC-DEM)" },
//             },
//             {
//               name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)",
//               value: { name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)" },
//             },
//             {
//               name: "Ductwork HVACR Test (SPEC-DUCT)",
//               value: { name: "Ductwork HVACR Test (SPEC-DUCT)" },
//             },
//             {
//               name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)",
//               value: { name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)" },
//             },
//             {
//               name: "Services and Facilities HVACR Test (SPEC-SAF)",
//               value: { name: "Services and Facilities HVACR Test (SPEC-SAF)" },
//             },
//             {
//               name: "Lift and Escalators Test (SPEC-LAEE)",
//               value: { name: "Lift and Escalators Test (SPEC-LAEE)" },
//             },
//             {
//               name: "Tunnelling Test (SPEC-TUNN)",
//               value: { name: "Tunnelling Test (SPEC-TUNN)" },
//             },
//           ]}
//         />
//       </div>

//       <div className="w-full">
//         <Select
//           errors={errors}
//           required={true}
//           label="Test Language"
//           id="Test Language"
//           name="Test Language"
//           register={register}
//           options={[
//             {
//               name: "Astrology",
//               value: { name: "Astrology", price: 24999 },
//             },
//           ]}
//         />
//       </div>
//     </div>
//   </div>

//   <div className="col-span-2">
//     <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//       <div className="w-full">
//         <Input
//           type={"Date"}
//           name={"date"}
//           id="date"
//           register={register}
//           required={true}
//           maxLength={""}
//           label="Select Date"
//           placeholder={""}
//         />
//       </div>

//       <div className="w-full">
//         <Input
//           type="text"
//           id="postcpde"
//           placeholder="postcpde"
//           name="postcpde"
//           label="postcpde"
//           register={register}
//           errors={errors}
//         />
//       </div>
//     </div>
//   </div>

//   <div className="col-span-2">
//     <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//       <div className="w-full">
//         <Select
//           errors={errors}
//           required={true}
//           label="Test Center Venue*"
//           id="Test Center Venue*"
//           name="Test Center Venue*"
//           register={register}
//           options={[
//             {
//               name: "Astrology",
//               value: { name: "Astrology" },
//             },
//           ]}
//         />
//       </div>

//       <div className="w-full">
//         <Select
//           errors={errors}
//           required={true}
//           label="Preferred Time*"
//           id="time*"
//           name="time"
//           register={register}
//           options={[
//             {
//               name: "09:00  AM - 11:00 AM",
//               value: { name: "09:00  AM - 11:00 AM" },
//             },
//             {
//               name: "11:00  AM - 01:00 PM",
//               value: { name: "11:00  AM - 01:00 PM" },
//             },
//             {
//               name: "01:00  PM - 03:00 PM",
//               value: { name: "03:00  PM - 05:00 PM" },
//             },
//             {
//               name: "03:00  PM - 05:00 PM",
//               value: { name: "03:00  PM - 05:00 PM" },
//             },
//           ]}
//         />
//       </div>
//     </div>
//   </div>
// </div>; */
// }
