import React from "react";
import Section from "./Section";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <div className="bg-[#040f28] w-full">
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center  gap-2">
          <div className="flex flex-col md:flex-row md:gap-6 gap-2 pt-3 pb-3 items-center">
            <div className="flex items-center gap-2 ">
              <FaPhone size={20} className="text-white" />
              <p className="text-white text-[15px]">+00 325 4325 235</p>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail size={20} className="text-white" />
              <p className="text-white">construction@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5 pb-2">
            <FaFacebook size={25} className="text-white" />
            <FaWhatsapp size={25} className="text-white" />
            <FaInstagram size={25} className="text-white" />
            <FaTwitter size={25} className="text-white" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TopNav;
