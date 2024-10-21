"use client"; // Mark this component as a Client Component to use useState 

import React, { useState } from 'react';
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



const page = () => {
  //formData state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    helpTopic: '',
    message: '',
    agreement: false,
  });
  
  // Handle the change in the fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Resend API logic for sending contact form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Html & CSS for the formData
  return (
    <div className="flex flex-col justify-center items-center bg-white leading-9 pt-32">
      <section className="contact-info text-center py-4">
        <div className="contact-info_headings mb-4">
          <h1 className="text-darker-blue text-2xl font-bold uppercase">Get In <span className="text-primary text-highlight">Touch</span></h1>
          <p className="text-lighter-blue text-md font-normal">You will hear from us in 24 hours</p>
        </div>
        <div className="contact-info_text">
          <p className="text-primary md:text-4xl text-2xl font-normal">+2348144213665</p>
          <p className="text-lighter-blue text-md font-normal">info@techspance.com</p>
          <p className="text-lighter-blue text-md font-normal">9a, Road 1, Aho Estate, Ajibode, Ibadan, 200284, Nigeria</p>
        </div>
      </section>

      {/* *** CONTACT FORM STRUCTURE*** */}
      <section className="border border-[8px] border-t-[20px] border-b-0 border-primary rounded-[20px] w-[80%] bg-gradient-linear p-9 flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between space-y-2 w-[80%]">
      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        className="border border-[#4D4D4D] px-4 rounded-full w-full md:w-[47%] mt-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        className="border border-[#4D4D4D] px-4 rounded-full w-full md:w-[47%]"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (Optional)"
        value={formData.phone}
        onChange={handleChange}
        className="border border-[#4D4D4D] px-4 rounded-full w-full md:w-[47%] "
      />
      <input
        type="url"
        name="website"
        placeholder="Website (Optional)"
        value={formData.website}
        onChange={handleChange}
        className="border border-[#4D4D4D] px-4 rounded-full w-full md:w-[47%]"
      />
      <select
        name="helpTopic"
        value={formData.helpTopic}
        onChange={handleChange}
        className="border border-[#4D4D4D] px-4 py-2 rounded-full w-full"
      >
        <option value="" disabled>Select Help Topic</option>
        {helpDropdown.map((topic, index) => (
          <option key={index} value={topic}>{topic}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="border border-[#4D4D4D] px-4 rounded-[14px] w-full"
        rows="4"
      />
      <label>
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          className="mr-2"
        />
        By submitting, you agree to the <Link className="text-primary" href="#">Terms & Conditons</Link>
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
      >
        Submit
      </button>
    </form>        
      </section>
      <section className="contact-map bg-primary w-full mt-9">
        <div style={{width: "100%"}}>
          <iframe 
            width="100%" 
            height="600" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Aho/Agbeja%20Estate,%209a%20Rd%201,%20Ajibode%20Road,%20Akobo,%20Ibadan%20200284,%20Oyo,%20%D9%86%D9%8A%D8%AC%D9%8A%D8%B1%D9%8A%D8%A7+(Techspance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default page;
