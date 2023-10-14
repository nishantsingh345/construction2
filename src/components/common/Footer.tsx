import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaAddressBook,
  FaVoicemail,
  FaLocationArrow,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMap,
  FaAddressCard,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Section from "./Section";

const Quickinks = [
  {
    id: 1,
    title: "Privacy Policy",
    url: "/quicklinks/privacy-policy",
  },
  {
    id: 2,
    title: "Terms and Conditions",
    url: "/quicklinks/teermsofuse",
  },
  {
    id: 3,
    title: "Refund Policy",
    url: "/refund-policy",
  },
];

const Usefulllinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];
function Footer() {
  return (
    <div className="bg-[#040f28] py-12 px-4  text-white lg:px-12">
      <Section>
        <div className="space-y-6 md:px-8">
          <div className="grid lg:grid-cols-4 space-x-6 space-y-6">
            <div className="w-fit space-y-4 text-justify">
              <img className="w-56" src="/logo1.jpeg" alt="" />
              <div className="flex flex-col gap-4 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dicta
                  nesciunt tempora nam eligendi repudiandae nisi, possimus commodi quasi maiores
                  autem dolor fugit. Ipsum necessitatibus veritatis impedit facilis eveniet.
                </p>
              </div>
            </div>

            <div className="w-fit space-y-4 md:px-8">
              <p className="text-xl font-semibold">Usefull Links</p>
              <hr className="my-2   w-16 text-white" />

              <ul className="flex flex-col gap-4 ">
                {Usefulllinks.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className="cursor-pointer flex items-center gap-2 hover:text-gray-300 border-b-2 border-white pb-1">
                      {/* <GoPrimitiveDot /> */}
                      {item?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Quick Links</p>
              <hr className="my-2   w-16 text-white" />

              <ul className="flex flex-col gap-4 ">
                {Quickinks.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className="cursor-pointer flex items-center gap-2 hover:text-gray-300  border-b-2 border-white pb-1">
                      {/* <GoPrimitiveDot /> */}
                      {item?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Contact Us</p>
              <hr className="my-2   w-16 text-white" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <FaPhone />
                    <p>+91 800 0016 122</p>
                  </div>
                  <p className="flex items-center gap-2">
                    <AiOutlineMail />
                    info@constructioncardshelpline.co.uk
                  </p>
                  <p className="flex items-center gap-2">
                    <FaAddressCard />
                    124, City Road London , EC1V 2NX
                  </p>
                </div>
                {/* <div className="text-justify gap-1 items-start flex">
                  <FaMap size={25} />
                  Address: SPACIFY Plot 452 First Floor, Sector 19, Pocket 3, Dwarka, New Delhi,
                  Delhi 110075
                </div> */}
                <div className="flex gap-4 text-white">
                  <Link href="https://www.facebook.com/profile.php?id=100091654873768">
                    <FaFacebook size={35} />
                  </Link>
                  <Link href="/">
                    <FaInstagram size={35} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/astro-seva-talk-learn-courses/">
                    <FaLinkedin size={35} />
                  </Link>
                  <Link href="https://twitter.com/learnastrosevat">
                    <FaTwitter size={35} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
