"use client";

import Section from "@/components/common/Section";
import { Button, Select, Input, Form } from "@/components/forms";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  example: string;
  exampleRequired: string;
};

const CitbForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="py-10">
      <Section>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4 py-6 border-2 border-gray-500 rounded-md px-3">
            <p className="font-bold text-2xl py-3">Persnoal Details</p>
            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"string"}
                name={"name"}
                id="name"
                register={register}
                required={true}
                label="First Name"
                placeholder={""}
              />

              <Input
                type={"string"}
                name={"lastname"}
                id="lastname"
                register={register}
                required={true}
                label="Last Name"
                placeholder={""}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"date"}
                name={"birthdate"}
                id="birthdate"
                register={register}
                required={true}
                label="Birth Of Date"
                placeholder={""}
              />

              <Input
                type={"text"}
                name={"mobileNumber"}
                id="mobileNumber"
                register={register}
                required={true}
                maxLength={10}
                label="Phone Number"
                placeholder={""}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"email"}
                name={"email"}
                id="email"
                register={register}
                required={true}
                label="Email"
                placeholder={""}
              />

              <Input
                type={"text"}
                name={"postcpde"}
                id="postcode"
                register={register}
                required={true}
                maxLength={""}
                label="Postcode"
                placeholder={""}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"text"}
                name={"address"}
                id="address"
                register={register}
                required={true}
                label="Address"
                placeholder={""}
              />

              <Input
                type={"text"}
                name={"InsuranceNumber"}
                id="InsuranceNumber"
                register={register}
                required={true}
                maxLength={""}
                label="National Insurance Number (Optional)"
                placeholder={""}
              />
            </div>

            <div className="py-6 border-2 border-gray-500 rounded-md flex flex-col space-y-4 px-3">
              <p className="font-bold text-2xl">Test Details</p>
              <div className="grid md:grid-cols-2 gap-4 ">
                <Select
                  errors={errors}
                  required={true}
                  label="Choose Your Test*"
                  id="test"
                  name="test"
                  register={register}
                  options={[
                    {
                      name: "Operatives (Green, Blue, Gold CSCS Cards)",
                      value: { name: "Operatives (Green, Blue, Gold CSCS Cards)" },
                    },
                    {
                      name: "Plumbing or Gas Test (SPEC-PLUM)",
                      value: { name: "Plumbing or Gas Test (SPEC-PLUM)" },
                    },
                    {
                      name: "Working at Heights Test (SPEC-WAH)",
                      value: { name: "Working at Heights Test (SPEC-WAH)" },
                    },
                    {
                      name: "Managers & Professionals Test (MAP)",
                      value: { name: "Managers & Professionals Test (MAP)" },
                    },
                    {
                      name: "Supervisors Test (SPEC-SUP)",
                      value: { name: "Supervisors Test (SPEC-SUP)" },
                    },
                    {
                      name: "Highway Works Test (SPEC-HIW)",
                      value: { name: "Highway Works Test (SPEC-HIW)" },
                    },
                    {
                      name: "Demolition Test (SPEC-DEM)",
                      value: { name: "Demolition Test (SPEC-DEM)" },
                    },
                    {
                      name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)",
                      value: { name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)" },
                    },
                    {
                      name: "Ductwork HVACR Test (SPEC-DUCT)",
                      value: { name: "Ductwork HVACR Test (SPEC-DUCT)" },
                    },
                    {
                      name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)",
                      value: { name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)" },
                    },
                    {
                      name: "Services and Facilities HVACR Test (SPEC-SAF)",
                      value: { name: "Services and Facilities HVACR Test (SPEC-SAF)" },
                    },
                    {
                      name: "Lift and Escalators Test (SPEC-LAEE)",
                      value: { name: "Lift and Escalators Test (SPEC-LAEE)" },
                    },
                    {
                      name: "Tunnelling Test (SPEC-TUNN)",
                      value: { name: "Tunnelling Test (SPEC-TUNN)" },
                    },
                  ]}
                />
                <Select
                  errors={errors}
                  required={true}
                  label="Test Language"
                  id="Test Language"
                  name="Test Language"
                  register={register}
                  options={[
                    {
                      name: "Astrology",
                      // value: { name: "Astrology", price: 24999 },
                    },
                  ]}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type={"Date"}
                  name={"date"}
                  id="date"
                  register={register}
                  required={true}
                  maxLength={""}
                  label="Select Date"
                  placeholder={""}
                />

                <Input
                  type="text"
                  id="postcpde"
                  placeholder="postcpde"
                  name="postcode"
                  label="postcode"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 ">
                <Select
                  errors={errors}
                  required={true}
                  label="Test Center Venue*"
                  id="Test Center Venue*"
                  name="Test Center Venue*"
                  register={register}
                  options={[
                    {
                      value: { name: "Astrology" },
                    },
                  ]}
                />
                <Select
                  errors={errors}
                  required={true}
                  label="Preferred Time*"
                  id="time*"
                  name="time"
                  register={register}
                  options={[
                    {
                      name: "09:00  AM - 11:00 AM",
                      value: { name: "09:00  AM - 11:00 AM" },
                    },
                    {
                      name: "11:00  AM - 01:00 PM",
                      value: { name: "11:00  AM - 01:00 PM" },
                    },
                    {
                      name: "01:00  PM - 03:00 PM",
                      value: { name: "03:00  PM - 05:00 PM" },
                    },
                    {
                      name: "03:00  PM - 05:00 PM",
                      value: { name: "03:00  PM - 05:00 PM" },
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <Button
                className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 cursor-pointer px-10 focus:ring-gray-300 text-white py-3 font-bold mx-auto text-lg rounded-lg"
                btnText="PROCEED"
                type="Submit"
              />
            </div>
          </div>
        </Form>
      </Section>
    </div>
  );
};

export default CitbForm;

{
  /* <div className="max-w-sm md:max-w-4xl mx-auto my-8 rounded-lg md:gap-4 gap-3 bg-[#fff] p-4 grid">
  <div className="col-span-2">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full">
        <Select
          errors={errors}
          required={true}
          label="Choose Your Test*"
          id="test"
          name="test"
          register={register}
          options={[
            {
              name: "Operatives (Green, Blue, Gold CSCS Cards)",
              value: { name: "Operatives (Green, Blue, Gold CSCS Cards)" },
            },
            {
              name: "Plumbing or Gas Test (SPEC-PLUM)",
              value: { name: "Plumbing or Gas Test (SPEC-PLUM)" },
            },
            {
              name: "Working at Heights Test (SPEC-WAH)",
              value: { name: "Working at Heights Test (SPEC-WAH)" },
            },
            {
              name: "Managers & Professionals Test (MAP)",
              value: { name: "Managers & Professionals Test (MAP)" },
            },
            {
              name: "Supervisors Test (SPEC-SUP)",
              value: { name: "Supervisors Test (SPEC-SUP)" },
            },
            {
              name: "Highway Works Test (SPEC-HIW)",
              value: { name: "Highway Works Test (SPEC-HIW)" },
            },
            {
              name: "Demolition Test (SPEC-DEM)",
              value: { name: "Demolition Test (SPEC-DEM)" },
            },
            {
              name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)",
              value: { name: "Domestic Heating and Plumbing HVACR Test (SPEC-HAPS)" },
            },
            {
              name: "Ductwork HVACR Test (SPEC-DUCT)",
              value: { name: "Ductwork HVACR Test (SPEC-DUCT)" },
            },
            {
              name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)",
              value: { name: "Refrigeration and Air Conditioning HVACR Test (SPEC-RAAC)" },
            },
            {
              name: "Services and Facilities HVACR Test (SPEC-SAF)",
              value: { name: "Services and Facilities HVACR Test (SPEC-SAF)" },
            },
            {
              name: "Lift and Escalators Test (SPEC-LAEE)",
              value: { name: "Lift and Escalators Test (SPEC-LAEE)" },
            },
            {
              name: "Tunnelling Test (SPEC-TUNN)",
              value: { name: "Tunnelling Test (SPEC-TUNN)" },
            },
          ]}
        />
      </div>

      <div className="w-full">
        <Select
          errors={errors}
          required={true}
          label="Test Language"
          id="Test Language"
          name="Test Language"
          register={register}
          options={[
            {
              name: "Astrology",
              value: { name: "Astrology", price: 24999 },
            },
          ]}
        />
      </div>
    </div>
  </div>

  <div className="col-span-2">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full">
        <Input
          type={"Date"}
          name={"date"}
          id="date"
          register={register}
          required={true}
          maxLength={""}
          label="Select Date"
          placeholder={""}
        />
      </div>

      <div className="w-full">
        <Input
          type="text"
          id="postcpde"
          placeholder="postcpde"
          name="postcpde"
          label="postcpde"
          register={register}
          errors={errors}
        />
      </div>
    </div>
  </div>

  <div className="col-span-2">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full">
        <Select
          errors={errors}
          required={true}
          label="Test Center Venue*"
          id="Test Center Venue*"
          name="Test Center Venue*"
          register={register}
          options={[
            {
              name: "Astrology",
              value: { name: "Astrology" },
            },
          ]}
        />
      </div>

      <div className="w-full">
        <Select
          errors={errors}
          required={true}
          label="Preferred Time*"
          id="time*"
          name="time"
          register={register}
          options={[
            {
              name: "09:00  AM - 11:00 AM",
              value: { name: "09:00  AM - 11:00 AM" },
            },
            {
              name: "11:00  AM - 01:00 PM",
              value: { name: "11:00  AM - 01:00 PM" },
            },
            {
              name: "01:00  PM - 03:00 PM",
              value: { name: "03:00  PM - 05:00 PM" },
            },
            {
              name: "03:00  PM - 05:00 PM",
              value: { name: "03:00  PM - 05:00 PM" },
            },
          ]}
        />
      </div>
    </div>
  </div>
</div>; */
}
