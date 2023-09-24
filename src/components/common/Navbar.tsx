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
          <div className="flex items-center justify-between py-5">
            <Link href="/">
              <img className="w-48" src="/logo1.jpeg" alt="" />
            </Link>

            <div className="text-black md:flex hidden">
              <ul className="flex items-center">
                <li className="uppercase  border-b border-[#040f28] hover:border-orange-500 ml-10 text-xl cursor-pointer">
                  <Link href="/"> Home</Link>
                </li>
                <li className="uppercase  border-b border-[#040f28] hover:border-orange-500 ml-10 text-xl cursor-pointer">
                  <Link href="/about"> About</Link>
                </li>
                <li className="uppercase  border-b border-[#040f28] hover:border-orange-500 ml-10 text-xl cursor-pointer">
                  <Link href="/contact"> Contact</Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#ff5e14]  hover:bg-[#ff5e14]/90 text-white font-semibold  px-3 py-1 rounded-lg cursor-pointer ease-in-out duration-300">
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
                ? "fixed top-[119px] left-0 w-[75%] md:hidden h-screen bg-gray-300 p-[20px] ease-in-out duration-500"
                : "fixed left-[-100%] top-[119px] p-[20px] ease-in-out duration-500"
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
          </div>
        </nav>
      </Section>
    </div>
  );
};

export default Navbar;
