"use client";

import React from "react";
import Section from "./Section";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "../forms";
import Link from "next/link";

type Props = {
  href: string;
};

const PersnoalDetails = ({ href }: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div>
      <Section>
        <div className="py-10">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col space-y-4">
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
              <div className="flex items-center justify-center ">
                <Link href={href}>
                  <Button
                    className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 cursor-pointer px-10 focus:ring-gray-300 text-white py-3 font-bold mx-auto text-lg rounded-lg"
                    btnText="PROCEED"
                    type="Submit"
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default PersnoalDetails;
