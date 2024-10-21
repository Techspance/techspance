"use client";
import React from "react";
import { navItems } from "./NavigationBar";
import Link from "next/link";
import Image from "next/image";
import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import f_logo from "@/assets/images/footerlogo.svg";
import hline from "@/assets/images/hline.svg";
import worldmap from "@/assets/images/worldmap.svg";

const Footer = () => {
  return (
    <footer className="w-full p-5 md:pl-[140px]  md:py-10 bg-secondary relative ">
      <div>
        <div>
          <div className="flex flex-col space-y-5 flex-wrap md:flex-row place-content-between sm:place-content-between items-start">
            <div className="w-[320px] ">
              <h3 className="font-bold text-darker-blue text-xl    mb-3 font-roboto">
                Techspance: Your Innovative Technology Partner
              </h3>
              <p className="text-dark-blue text-md md: text-lg">
                A leading startup delivering tailored IT solutions for
                businesses worldwide. Empowering your business with custom
                software, web development, and mobile app development.
              </p>
              <div className="sIcons flex space-x-5 mt-3 mb-3 ">
                <Link
                  href={`https://www.facebook.com/profile.php?id=61565308981633`}
                  className="size-[32px] md:size-[48px] bg-silver flex justify-center items-center rounded-full hover:bg-darker-blue text-dark-blue hover:text-white"
                >
                  <FaFacebookF className="size-[16px] md:size-[24px] " />
                </Link>
                <Link
                  href={`https://www.linkedin.com/company/techspance-ltd`}
                  className="size-[32px] md:size-[48px] bg-silver flex justify-center items-center rounded-full hover:bg-darker-blue text-dark-blue hover:text-white"
                >
                  <FaLinkedinIn className="size-[16px] md:size-[24px] " />
                </Link>
                {/* <Link
                  href={`#`}
                  className="size-[32px] md:size-[48px] bg-silver flex justify-center items-center rounded-full hover:bg-darker-blue text-dark-blue hover:text-white"
                >
                  <FaXTwitter className="size-[16px] md:size-[24px] " />
                </Link> */}
              </div>
            </div>
            <div className="w-[320px] ">
              <h3 className="font-bold text-darker-blue text-xl font-roboto mb-3 md:-mt-5">
                Information
              </h3>
              <p className="text-dark-blue text-sm md: text-md">
                9a, Road 1, Aho Estate, Ajibode, Ibadan, 200284, Nigeria
              </p>
              <p className="text-dark-blue text-sm md: text-md">
                +2348144213665
              </p>
              <p className="text-dark-blue text-sm md: text-md">
                info@techspance.com
              </p>
            </div>
            <div className="w-[150px] ">
              <h3 className="font-bold text-darker-blue text-xl font-roboto mb-3 md:-mt-5 ">
                Useful Links
              </h3>
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const { id, name, href, hasDropdown } = item;
                  return (
                    <Link
                      className="text-dark-blue text-md hover:underline underline-offset-4 hover:text-darker-blue"
                      key={id}
                      href={href}
                    >
                      {name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="w-[250px]  ">
              <h3 className="font-bold text-darker-blue text-xl mb-3 md:-mt-5  ">
                Services
              </h3>
              <ul className="text-dark-blue text-md ">
                <li>Product Design</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Custom Software Development</li>
                <li>IT Consultation</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex">
            <Image src={hline} alt="horizontal line" />
          </div>
          <div className="flex flex-col space-y-4 mt-4  sm:space-x-4 md:flex-row md:items-center  md:space-x-20  ">
            <Image src={f_logo} alt="Techspance logo" />

            <div className="flex flex-wrap  text-sm text-dark-blue md:text-md items-center">
              <FaRegCopyright />
              <p className="mr-1">
                2024 Copyrights by{" "}
                <span className="font-bold text-darker-blue">
                  Techspance LTD.
                </span>{" "}
              </p>
              <p>All Rights Reserved. </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center ">
          <Image
            src={worldmap}
            alt="world map"
            className=" size-[400px]  animate-spin-slow absolute top-5  z-30 "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
