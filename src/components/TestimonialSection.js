"use client";
import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

import herocontainer from "@/assets/images/herocontainer.svg";
import heromiddle from "@/assets/images/heromiddle.svg";

// Replace with actual testimonial data
const testimonials = [
  {
    name: "startup delivering tailored IT ",
    title: "CEO of Company",
    testimonial_text:
      "A leading startup delivering tailored IT solutions for businesses worldwide. Empowering your business with custom software, web development, and mobile app development.",
    image: "",
  },
  {
    name: "startup delivering tailored IT",
    title: "Marketing Manager",
    testimonial_text:
      "A leading startup delivering tailored IT solutions for businesses worldwide. Empowering your business with custom software, web development, and mobile app development.",
    image: herocontainer,
  },
  {
    name: "startup delivering tailored IT",
    title: "Product Designer",
    testimonial_text:
      "A leading startup delivering tailored IT solutions for businesses worldwide. Empowering your business with custom software, web development, and mobile app development.",
    image: "",
  },
  {
    name: "4",
    title: "Software Engineer",
    testimonial_text: "Exceptional quality and support.",
    image: "",
  },
  {
    name: "5",
    title: "CEO of Company",
    testimonial_text: "This is a great service!",
    image: heromiddle,
  },
  {
    name: "6",
    title: "Marketing Manager",
    testimonial_text: "Highly recommend this to everyone.",
    image: "",
  },
  {
    name: "7",
    title: "Product Designer",
    testimonial: "A game-changer in the industry.",
    image: "",
  },
  {
    name: "8",
    title: "Software Engineer",
    testimonial_text: "Exceptional quality and support.",
    image: "",
  },
];

const TestimonialSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleNext = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Function to get testimonial based on index
  const getTestimonial = (index) => {
    return testimonials[(index + testimonials.length) % testimonials.length];
  };

  const t1 = getTestimonial(testimonialIndex);
  const t2 = getTestimonial(testimonialIndex + 1);
  const t3 = getTestimonial(testimonialIndex + 2);

  return (
    <div className="bg-background">
      <section className="bg-silver p-5 md:px-[140px] md:py-10 rounded-t-[30px]">
        {/* Testimonial header */}
        <div className="flex justify-between">
          <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl">
            Client{" "}
            <span className="text-primary italic">
              Testimonials
            </span>
          </h2>
          <div className="flex justify-around w-[80px] md:w-[100px]">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous testimonial"
              className="prev-btn size-[32px]  flex justify-center items-center bg-secondary hover:bg-primary rounded-full text-darker-blue hover:text-white"
            >
              <FaLessThan className="w-[10px] h-[24px]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              type="button"
              className="next-btn size-[32px]  flex justify-center items-center bg-secondary hover:bg-primary rounded-full text-darker-blue hover:text-white"
            >
              <FaGreaterThan className="w-[10px] h-[24px]" />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="flex justify-center md:justify-between">
          <div className="flex">
            <TestimonialCard testimonial={t1} />
          </div>
          <div className="hidden md:flex">
            <TestimonialCard testimonial={t2} />
          </div>
          <div className="hidden lg:flex">
            <TestimonialCard testimonial={t3} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
