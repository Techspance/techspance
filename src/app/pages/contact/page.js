"use client"; // Mark this component as a Client Component to use useState

import React, { useState } from "react";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

//icon <IoIosArrowDown />

//mapData for Techspance Address
const mapData = {
  lat: 7.429351650496903,
  long: 3.9546351753953335,
};

// How can we help you dropdown menu
const helpDropdown = [
  "Consultation",
  "Product Design",
  "Website Development",
  "Mobile Application",
  "Custom software solutions",
];

const Page = () => {
  //formData state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    helpTopic: "",
    message: "",
    agreement: false,
  });

  // Handle the change in the fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "Thank you for submitting the form. Our team will review your message and get back to you soon."
        );
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      helpTopic: "",
      message: "",
      agreement: false,
    });
  };

  // Html & CSS for the formData
  return (
    <div className="flex flex-col justify-center items-center  bg-white leading-9  ">
      <section className="contact-info text-center max-w-[800px] p-5 md:px-[140px] md:py-10 ">
        <div className="contact-info_headings mb-4">
          <h1 className="text-darker-blue text-2xl font-bold uppercase">
            Get In <span className="text-primary text-highlight">Touch</span>
          </h1>
          <p className="text-lighter-blue text-md font-normal">
            You will hear from us in 24 hours
          </p>
        </div>
        <div className="contact-info_text">
          <p className="text-primary md:text-4xl text-2xl font-normal">
            +2348144213665
          </p>
          <p className="text-lighter-blue text-md font-normal">
            info@techspance.com
          </p>
          <p className="text-lighter-blue text-md font-normal">
            9a, Road 1, Aho Estate, Ajibode, Ibadan, 200284, Nigeria
          </p>
        </div>
      </section>

      {/* *** CONTACT FORM STRUCTURE*** */}
      <section className="border border-[8px] border-t-[20px] border-b-0 border-primary rounded-2xl w-[90%] md:max-w-2xl bg-gradient-to-b from-background to-[#8bcbe9] p-5 flex justify-center -mx-20 mb-10   ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-between space-y-2 w-full rounded-2xl "
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="outline-none  border-2 border-silver hover:border-primary focus-border-darker-blue rounded-xl px-4 w-full md:w-[47%] mt-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="outline-none  border-2 border-silver hover:border-primary  focus-border-darker-blue rounded-xl px-4 w-full md:w-[47%]"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="outline-none  border-2 border-silver hover:border-primary focus-border-darker-blue rounded-xl px-4 w-full md:w-[47%] "
          />
          <input
            type="url"
            name="website"
            placeholder="Website (Optional)"
            value={formData.website}
            onChange={handleChange}
            className="outline-none  border-2 border-silver hover:border-primary focus-border-darker-blue rounded-xl px-4 w-full md:w-[47%]"
          />
          <select
            name="helpTopic"
            value={formData.helpTopic}
            onChange={handleChange}
            className="outline-none  border-2 border-silver hover:border-primary focus-border-darker-blue rounded-xl px-4 py-2 rounded-full w-full"
          >
            <option value="" disabled>
              Select Help Topic
            </option>
            {helpDropdown.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="outline-none  border-2 border-silver hover:border-primary focus-border-darker-blue rounded-xl p-2 w-full leading-5"
            rows="8"
          />
          <label>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mr-2"
            />
            By submitting, you agree to the{" "}
            <Link
              className="text-primary"
              href="/pages/company/termsandconditions"
            >
              Terms & Conditons
            </Link>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-1 rounded-full hover:bg-blue-600 w-full"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="contact-map bg-primary w-full flex justify-center  ">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Aho/Agbeja%20Estate,%209a%20Rd%201,%20Ajibode%20Road,%20Akobo,%20Ibadan%20200284,%20Oyo,%20%D9%86%D9%8A%D8%AC%D9%8A%D8%B1%D9%8A%D8%A7+(Techspance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Page;
