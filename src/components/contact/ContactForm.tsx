"use client";

import React from "react";
import Section from "../common/Section";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "../forms";

type Props = {};

const ContactForm = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="py-10">
      <Section>
        <div className="flex flex-col md:flex-row justify-between gap-2 items-start">
          <div className="shadow-2xl border-b-2 border-[#040f28] px-2 pb-2 rounded-sm w-full">
            <div className="">
              <p className="text-center text-[#040f28] font-bold text-xl pb-5">Request Call Back</p>
            </div>
            <div>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col space-y-4">
                  <div>
                    <Input
                      type={"string"}
                      name={"name"}
                      id="name"
                      register={register}
                      required={true}
                      label="Enter Your Name"
                      placeholder={""}
                    />
                  </div>

                  <div>
                    <Input
                      type={"email"}
                      name={"email"}
                      id="email"
                      register={register}
                      required={true}
                      label="E-mail"
                      placeholder={""}
                    />
                  </div>

                  <div>
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

                  <div>
                    <Textarea
                      name={"message"}
                      id="message"
                      register={register}
                      required={true}
                      cols={20}
                      // label="Suject"
                      placeholder={"Your Messege"}
                      className="border border-gray-800"
                    />
                  </div>
                  <Button
                    className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 cursor-pointer px-10 focus:ring-gray-300 text-white py-3 font-bold mx-auto text-lg rounded-lg"
                    btnText="Submit"
                    type="Submit"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.53404560735!2d77.04493215!3d28.6182658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e3!4m0!4m0!5e0!3m2!1sen!2sin!4v1680996942755!5m2!1sen!2sin"
              width="100%"
              height="470"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactForm;
