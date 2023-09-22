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
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Section from "./Section";

const Quickinks = [
  {
    id: 1,
    title: "Faq",
    url: "/faq",
  },
  {
    id: 2,
    title: "Terms and Conditions",
    url: "/quicklinks/teermsofuse",
  },
  {
    id: 3,
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
    title: "Privacy Policy",
    url: "/quicklinks/privacy-policy",
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
    title: "Terms and Conditions",
    url: "/quicklinks/teermsofuse",
  },
  {
    id: 3,
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
    title: "Privacy Policy",
    url: "/quicklinks/privacy-policy",
  },
];
function Footer() {
  return (
    <div className="bg-[#040f28] py-12 px-4  text-white lg:px-12">
      <Section>
        <div className="space-y-6 md:px-8">
          <div className="grid lg:grid-cols-4 space-x-6 space-y-6">
            <div className="w-fit space-y-4 text-justify">
              <p>Logo</p>
              <div className="flex flex-col gap-4 ">
                <p>
                  Our astrology course at Astrosevatalk.in comes with several practical features to
                  make learning more practical for all aspiring astrologers. It includes the
                  following features to make learning smooth and practical.
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
                    <p>123 456 7893</p>
                  </div>
                  <p className="flex items-center gap-2">
                    <AiOutlineMail />
                    info@construction.in
                  </p>
                </div>
                <div className="text-justify gap-1 items-start flex">
                  <FaMap size={25} />
                  Address: SPACIFY Plot 452 First Floor, Sector 19, Pocket 3, Dwarka, New Delhi,
                  Delhi 110075
                </div>
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
