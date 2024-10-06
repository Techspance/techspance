import React from "react";
import { IoIosArrowDown } from "react-icons/io";

//icon <IoIosArrowDown />

//mapData for Techspance Address
const mapData = {
  lat: 7.429351650496903,
  long: 3.9546351753953335,
};

// How can we help you
const helpDropdown = [
  "Consultation",
  "Product Design",
  "Website Development",
  "Mobile Application",
  "Custom software solutions",
];



const page = () => {
  //formData state


  // Resend API logic for sending contact form

  // Html & CSS for the formData

  return (
    <div className="  p-5 md:px-[140px] md:py-10 bg-white ">
      <section className=" contact-info mt-24">Contact page</section>
      <section className=" contact-form "></section>
      <section className=" contact-map -mx-5 md:-mx-[140px] h-10 bg-primary "></section>
    </div>
  );
};

export default page;
