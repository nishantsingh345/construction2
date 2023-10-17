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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
  citbtesting: z.string().optional(),
  type: z.enum(["new-card", "renewcard", "replacecard", "none"], {
    required_error: "You need to select a notification type.",
  }),
  selectcard: z.string({
    required_error: "Please select Prefered Time for test.",
  }),
});

type Props = {};

const select = [
  {
    img: "/cscs-card/Advanced_Craft.jpg",
    text: "CSCS Gold Skilled Worker Card",
  },
  {
    img: "/cscs-card/Apprentice.jpg",
    text: "CSCS Red Apprentice Card",
  },
  {
    img: "/cscs-card/AQP.jpg",
    text: "CSCS White Academically Qualified Person",
  },
  {
    img: "/cscs-card/Ex_tech_super_manager.jpg",
    text: "CSCS Experienced Technical, Supervisor or Manager",
  },
  {
    img: "/cscs-card/Exp_workertemp.jpg",
    text: "CSCS Experienced Worker Card",
  },
  {
    img: "/cscs-card/IND_placement.jpg",
    text: "CSCS Industry Placement Card ",
  },
  {
    img: "/cscs-card/Labourer_hi.jpg",
    text: "CSCS Green Labourer Card",
  },
  {
    img: "/cscs-card/Manager.jpg",
    text: "CSCS Gray Manager Card",
  },
  {
    img: "/cscs-card/PQP.jpg",
    text: "CSCS Professionally Qualified Person",
  },
  {
    img: "/cscs-card/Provisionaltemp.jpg",
    text: "CSCS Pink Provisional (temporary only) ",
  },
  {
    img: "/cscs-card/Skilled_Worker.jpg",
    text: "CSCS Blue Skilled Worker Card",
  },
  {
    img: "/cscs-card/Supervisory.jpg",
    text: "CSCS Gold Supervisory Card",
  },
  {
    img: "/cscs-card/Trainee_lo.jpg",
    text: "CSCS Red Trainee Card ",
  },
];

const CscseForm = (props: Props) => {
  //TODO state with price
  const [price, setPrice] = useState<any>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastname: "",
      number: "",
      birthdate: "",
      email: "",
      insurence: "",
      type: "none",
      address: "",
      postcode: "",
      selectcard: "",
      citbtesting: "",
    },
  });
  const { watch } = form;

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
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
                        <FormLabel>National Insurance No.*</FormLabel>
                        <FormControl>
                          <Input placeholder="National Insurance No.*" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-full space-y-4 border-2 border-slate-700 p-3 rounded-md">
                <p className="font-bold space-y-2 text-2xl">Card Details</p>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="">Application Type*</FormLabel>
                      <FormControl className="">
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-2 flex-wrap items-center"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="new-card" />
                            </FormControl>
                            <FormLabel className="font-normal">New Card</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="renewcard" />
                            </FormControl>
                            <FormLabel className="font-normal">Renew Card</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="replacecard" />
                            </FormControl>
                            <FormLabel className="font-normal">Replace Card</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="selectcard"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel>Card Type*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Green , Blue , Black etc" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="h-[400px] overflow-y-scroll">
                          {select.map((item, index) => (
                            <SelectItem key={index} value={item?.text}>
                              <div className="flex items-center gap-4">
                                <img className="w-16 h-10" src={item?.img} alt="" />
                                <span>{item?.text}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full space-y-4 border-2 border-slate-700 p-3 rounded-md">
                <p className="font-bold space-y-2 text-2xl">Additional Information</p>

                <FormField
                  control={form.control}
                  name="citbtesting"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel>CITB Testing ID (If Available)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="CITB Testing ID (If Available)"
                          type="text"
                          {...field}
                        />
                      </FormControl>
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

export default CscseForm;
