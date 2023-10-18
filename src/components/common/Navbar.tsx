"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section from "./Section";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";
type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("hello tooglee");

    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full bg-white">
      <Section>
        <nav>
          {/* Desktop Menue */}
          <div className="flex items-center justify-between py-2 relative">
            <Link href="/">
              <img className="w-40 md:w-60" src="/logo2.png" alt="" />
            </Link>

            <div className="text-black md:flex hidden">
              <ul className="flex items-center">
                <li className="uppercase  border-b border-[#040f28] hover:border-orange-500 ml-10  cursor-pointer">
                  <Link href="/"> Home</Link>
                </li>
                <li className="uppercase  border-b border-[#040f28] hover:border-orange-500 ml-10  cursor-pointer">
                  <Link href="/about"> About</Link>
                </li>
                <li className="uppercase  border-b border-[#040f28] hover:border-orange-500 ml-10 cursor-pointer">
                  <Link href="/contact"> Contact</Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#ff5e14] hidden md:flex  hover:bg-[#ff5e14]/90 text-white font-semibold text-2xl px-4 py-2 rounded-lg cursor-pointer ease-in-out duration-300">
              Apply
            </div>

            {/* Mobile menue */}

            <div
              onClick={() => {
                toggleMenu();
              }}
              className="md:hidden cursor-pointer "
            >
              <BsList className="w-8 h-8" />
            </div>
          </div>

          <div
            className={
              menuOpen
                ? "absolute top-0 left-0 w-[75%] md:hidden h-screen bg-white p-[20px] ease-in-out duration-500"
                : "absolute top-0 left-[-100%]  p-[20px] ease-in-out duration-500"
            }
          >
            <div className="w-full flex items-center justify-end">
              <div onClick={toggleMenu} className="cursor-pointer">
                <BsX className="w-8 h-8" />
              </div>
            </div>
            {/* menue links */}
            <div className="flex flex-col py-4">
              <ul>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase py-4  border-b border-[#040f28] hover:border-orange-500  text-xl cursor-pointer"
                >
                  <Link href="/"> Home</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase py-4  border-b border-[#040f28] hover:border-orange-500  text-xl cursor-pointer"
                >
                  <Link href="/about"> About</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase py-4 border-b border-[#040f28] hover:border-orange-500  text-xl cursor-pointer"
                >
                  <Link href="/contact"> Contact</Link>
                </li>
              </ul>
            </div>
            <div className="bg-[#ff5e14]  flex items-center justify-center   hover:bg-[#ff5e14]/90 text-white font-semibold text-2xl px-2 py-2 rounded-lg cursor-pointer ease-in-out duration-300">
              Apply
            </div>
          </div>
        </nav>
      </Section>
    </div>
  );
};

export default Navbar;
