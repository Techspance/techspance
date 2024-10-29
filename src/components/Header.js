"use client";
import { Resend } from "resend";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import herocontainer from "@/assets/images/herocontainer.svg";
import heromiddle from "@/assets/images/heromiddle.svg";

const Header = () => {
  const [consultationForm, setConsultationForm] = useState({
    email: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/consultation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultationForm),
      });

      const result = await response.json();

      if (result.success) {
        alert("Your consultation request has been sent successfully!");
      } else {
        alert("Failed to send consultation request: " + result.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }

    setConsultationForm({
      email: "",
      category: "",
    });
  };

  return (
    <header className="bg-primary p-5  md:py-10 md:px-[140px]  ">
      <div className="mt-24 flex flex-wrap justify-between  ">
        <section className="min-w-[320px] max-w-[420px] flex flex-col space-y-5 md:space-y-10 mb-5  ">
          <div className="text-white flex flex-col space-y-3 md:space-y-5 w-full">
            <h1 className="text-3xl font-roboto font-bold w-full">
              Innovative Digital Solutions for Your Business Success from
              Techspance
            </h1>
            <h2 className="text-xl ">
              Elevate Your Business with Custom Digital Solutions: From Websites
              & Apps to Enterprise Software.
            </h2>
            <p>
              Get Expert Advice and Tailored Solutions with our{" "}
              <span className="font-bold">free consultation.</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 "
          >
            <div className="flex   flex-wrap items-center justify-center  ">
              <div className="relative text-darker-blue hover:text-dark-blue focus:text-dark-blue ">
                <MdOutlineEmail
                  size={24}
                  className=" absolute top-2 left-2  "
                />
                <input
                  className=" w-[320px] md:w-[200px] mb-2   h-[40px] pl-10 outline-none  border-2 border-primary hover:border-background focus-border-darker-blue rounded-xl  pr-2  "
                  type="email"
                  name="email"
                  value={consultationForm.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="">
                <select
                  className=" w-[320px] md:w-[200px] mb-2  h-[40px] pl-10 text-darker-blue hover:text-dark-blue focus:text-dark-blue  outline-none  border-2 border-primary hover:border-background focus-border-darker-blue rounded-xl pr-2"
                  name="category"
                  id="category"
                  required
                  value={consultationForm.category}
                  
                  onChange={handleChange}
                  
                >
                  <option  value="General">
                    General
                  </option>
                  <option value="IT">IT</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Product Development">
                    Product Development
                  </option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-[320px] md:w-full border-2 border-darker-blue hover:bg-darker-blue text-secondary hover:text-white py-2 mx-auto rounded-full "
            >
              Request a consultation
            </button>
          </form>
        </section>
        <section className="hidden md:flex justify-center items-center w-[500px] h-[333px] relative    ">
          <Image
            src={herocontainer}
            alt="hero image"
            className="md:min-w-[500px] md:min-h-[333px] md:max-w-[500px] md:max-h-[333px]"
          />
          <Image
            alt="hero image 2"
            className=" md:min-size-[223.33px] md:max-size-[223.33px] absolute top-[46.87px] left-[149.82px] animate-spin-slow"
            src={heromiddle}
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
