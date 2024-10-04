"use client";
import React, { useState, useEffect } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]); // State for testimonials
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("./api/testimonials"); // Ensure correct endpoint
        const data = await response.json();

        if (data.success) {
          setTestimonials(data.data); // Set testimonials state with fetched data
        } else {
          console.error("Failed to fetch testimonials:", data.message);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array to run once on mount

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
    <div className="bg-primary">
      <section className="bg-background p-5 md:px-[140px] md:py-10 rounded-t-[30px]">
        {/* Testimonial header */}
        <div className="flex justify-between">
          <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl">
            Client <span className="text-primary italic">Testimonials</span>
          </h2>
          {!loading? <div className="flex justify-around w-[80px] md:w-[100px]">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous testimonial"
              className="prev-btn size-[32px] flex justify-center items-center bg-white hover:bg-primary rounded-full text-darker-blue hover:text-white"
            >
              <FaLessThan className="w-[10px] " />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              type="button"
              className="next-btn size-[32px] flex justify-center items-center bg-white hover:bg-primary rounded-full text-darker-blue hover:text-white"
            >
              <FaGreaterThan className="w-[10px]" />
            </button>
          </div>: null}
          
        </div>

        {/* Testimonial cards */}
        <div className="flex justify-center md:justify-between">
          {loading ? (
            <div className=" font-bold text-2xl text-dark-blue  rounded-full animate-pulse md:self-center p-5">
              Loading testimonials...
            </div> // Loading message
          ) : (
            <>
              <div className="flex">
                <TestimonialCard testimonial={t1} />
              </div>
              <div className="hidden md:flex">
                <TestimonialCard testimonial={t2} />
              </div>
              <div className="hidden lg:flex">
                <TestimonialCard testimonial={t3} />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
