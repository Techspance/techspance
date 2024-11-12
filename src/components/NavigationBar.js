"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import mlogo from "@/assets/images/mlogo.svg";

export const navItems = [
  { name: "Home", href: "/", id: 1 },
  {
    name: "Company",
    href: "/pages/company/about",
    id: 2,
    hasDropdown: true,
  }, // Add hasDropdown property
  { name: "Services", href: "/pages/services", id: 3 },
  { name: "Portfolio", href: "/pages/portfolio", id: 4 },
  { name: "Blog", href: "/pages/blog", id: 5 },
  { name: "Contact", href: "/pages/contact", id: 6 },
];

const dropdownItems = [
  { name: "About Us", href: "/pages/company/about", id: 1 },
  { name: "Our Team", href: "/pages/company/ourteam", id: 2 },
  // { name: "Our History", href: "/pages/company/ourhistory", id: 3 },
  { name: "FAQs", href: "/pages/company/faqs", id: 4 },
  { name: "Careers", href: "/pages/company/careers", id: 5 },
  { name: "Privacy Policy", href: "/pages/company/privacypolicy", id: 6 },
  { name: "Terms And Conditions", href: "/pages/company/termsandconditions", id: 7 },
];

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const handleResize = () => {
      if (!window.innerWidth <= 768) {
        setShowMenu(false);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header
        className={`bg-primary min-h-24 max-h-full w-full px-5    md:h-24 md:px-[140px] sm:px-[70px]   pt-6 shadow  sticky top-0 z-50 transition-all duration-1000 ${
          showMenu ? "" : ""
        } `}
      >
        <div className=" flex justify-between items-center transition-all duration-1000 ">
          <Link href={`/`}>
            <Image src={mlogo} alt="logo" className="min-w-[200px]" />
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 ml-2 transition-all duration-1000 ">
            {navItems.map((item) => {
              const { name, href, id, hasDropdown } = item;
              return (
                <div
                  onMouseOver={
                    hasDropdown ? () => setShowDropdown(true) : undefined
                  }
                  onMouseOut={() => setShowDropdown(false)}
                  key={id}
                  className="relative transition-all duration-1000"
                >
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? "underline text-white"
                        : "text-secondary"
                    } hover:text-white hover:underline text-2xl transition-all duration-1000`}
                  >
                    {name}
                  </Link>
                  {/* Company DropDown */}
                  {hasDropdown && showDropdown && (
                    <div
                      className={` absolute top-full left-0 p-5 bg-background w-[200px]  flex flex-col  transition-all duration-1000  `}
                    >
                      {dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.id}
                          href={dropdownItem.href}
                          className={` hover:text-darker-blue text-dark-blue hover:underline text-xl px-4 py-1 transition-all duration-1000 `}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>{" "}
          {/* End Desktop navigation */}
          <div className="hidden md:flex"></div>
          {/* Menu Icon */}
          <div
            onClick={handleNavigation}
            className=" md:hidden flex justify-center items-center text-secondary hover:border-2 size-[48px] opacity-80 transition-all duration-1000 "
          >
            {showMenu ? (
              <RiCloseLargeFill
                className="text-secondary hover:text-white"
                size={32}
              />
            ) : (
              <FiMenu className="text-secondary hover:text-white" size={32} />
            )}
          </div>
          {/* End Menu Icon */}
        </div>
        {/* Mobile navigation */}
        <nav
          className={`${
            showMenu ? " flex  max-h-full   " : " hidden  h-0 "
          }  flex-col space-y-5 md:hidden mt-5  pb-5 bg-primary w-full  overflow-hidden transition-all duration-500 `}
        >
          {navItems.map((item) => {
            const { name, href, id, hasDropdown } = item;
            return (
              <div
                className="transition-all duration-1000"
                onMouseOver={
                  hasDropdown ? () => setShowDropdown(true) : undefined
                }
                onMouseOut={() => setShowDropdown(false)}
                key={id}
              >
                <Link
                  href={href}
                  className={`${
                    pathname === href
                      ? "underline text-white"
                      : "text-secondary"
                  } hover:text-white hover:underline text-xl `}
                  onClick={() => {
                    setShowMenu(false);
                    if (hasDropdown) toggleDropdown();
                  }}
                >
                  {name}
                </Link>
                {/* Mobile Company DropDown */}
                {hasDropdown && showDropdown && (
                  <div
                    onMouseOver={
                      hasDropdown ? () => setShowDropdown(true) : undefined
                    }
                    onMouseOut={() => setShowDropdown(false)}
                    className="flex flex-col pl-5 bg-background transition-all duration-1000 "
                  >
                    {dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.id}
                        href={dropdownItem.href}
                        className={`hover:text-darker-blue text-dark-blue hover:underline text-xl px-4 py-1 transition-all duration-1000 `}
                        onClick={() => setShowMenu(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="hidden mt-5">Products</div>
        </nav>
        {/* End Mobile navigation */}
      </header>
    </>
  );
};

export default Header;
