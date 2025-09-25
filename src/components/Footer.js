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
    <footer className="w-full p-5 md:pl-[140px] md:py-10 bg-slate-200 relative">
      <div>
        <div>
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 flex-wrap justify-between items-start">
            {/* Company Info */}
            <div className="max-w-xs">
              <h3 className="font-bold text-darker-blue text-xl mb-3 font-roboto">
                Techspance: Your Innovative Technology Partner
              </h3>
              <p className="text-dark-blue text-base mb-4">
                A leading startup delivering tailored IT solutions for
                businesses worldwide. Empowering your business with custom
                software, web development, and mobile app development.
              </p>
              <div className="flex space-x-2">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61565308981633"
                  className="bg-background p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/techspance-ltd"
                  className="bg-background p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            {/* Information */}
            <div className="max-w-xs">
              <h3 className="font-bold text-darker-blue text-xl font-roboto mb-3">
                Information
              </h3>
              <address className="not-italic text-dark-blue text-base mb-2">
                9a, Road 1, Aho Estate, Ajibode, Ibadan, 200284, Nigeria
              </address>
              <p className="text-dark-blue text-base mb-1">
                <a href="tel:+2348144213665" className="hover:underline">
                  +2348144213665
                </a>
              </p>
              <p className="text-dark-blue text-base">
                <a
                  href="mailto:info@techspance.com"
                  className="hover:underline"
                >
                  info@techspance.com
                </a>
              </p>
            </div>
            {/* Useful Links */}
            <div className="min-w-[150px]">
              <h3 className="font-bold text-darker-blue text-xl font-roboto mb-3">
                Useful Links
              </h3>
              <nav className="flex flex-col space-y-1">
                {[
                  ...navItems,
                  {
                    id: "8",
                    name: "Terms of Service",
                    href: "/pages/terms_of_service",
                  },
                  {
                    id: "7",
                    name: "Policies",
                    href: "/pages/policies",
                  },
                ].map(({ id, name, href }) => (
                  <Link
                    className="text-dark-blue text-base hover:underline underline-offset-4 hover:text-darker-blue"
                    key={id}
                    href={href}
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            {/* Services */}
            <div className="min-w-[180px]">
              <h3 className="font-bold text-darker-blue text-xl mb-3 font-roboto">
                Services
              </h3>
              <ul className="text-dark-blue text-base space-y-1">
                <li>Product Design</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Custom Software Development</li>
                <li>IT Consultation</li>
              </ul>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden md:block my-8">
            <Image src={hline} alt="horizontal line" />
          </div>
          {/* Footer Bottom */}
          <div className="flex flex-col space-y-4 mt-4 md:flex-row md:items-center md:space-x-8">
            <Image src={f_logo} alt="Techspance logo" />
            <div className="flex flex-wrap items-center text-sm text-dark-blue md:text-base space-x-2">
              <FaRegCopyright />
              <span>
                {new Date().getFullYear()}{" "}
                <span className="font-bold text-darker-blue">
                  Techspance LTD.
                </span>
              </span>
              <span>All Rights Reserved.</span>
            </div>
          </div>
        </div>
        {/* World Map */}
        <div className="hidden md:flex justify-center items-center">
          <Image
            src={worldmap}
            alt="world map"
            className="size-[400px] animate-spin-slow absolute top-5 z-30"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
