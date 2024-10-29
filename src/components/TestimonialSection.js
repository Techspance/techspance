"use client";
import React, { useState, useEffect } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";
import { data } from "../Databases/projects";

// Filtered local projects with testimonials
const localProjects = data.data.filter((project) => {
  return (
    project.testimonial &&
    typeof project.testimonial === "object" &&
    Object.keys(project.testimonial).length > 0
  );
});

const TestimonialSection = () => {
  const [projects, setProjects] = useState([]); // State for testimonials
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchProjects = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://www.techspance.com/api/projects");
      const data = await response.json();

      if (data.success) {
        const projectData = data.data.filter((project) => {
          return (
            project.testimonial &&
            typeof project.testimonial === "object" &&
            Object.keys(project.testimonial).length > 0
          );
        });
        setProjects(projectData.length ? projectData : localProjects);
      } else {
        console.error("Failed to fetch testimonials:", data.message);
        setProjects(localProjects); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setProjects(localProjects); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished
    }
  };

  // Fetch testimonials on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleNext = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="bg-primary">
      <section className="bg-background p-5 md:px-[140px] md:py-10 rounded-t-[30px]">
        {/* Testimonial header */}
        <div className="flex justify-between">
          <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl">
            Client <span className="text-primary italic">Testimonials</span>
          </h2>
          {!loading && projects.length > 0 && (
            <div className="flex justify-around w-[80px] md:w-[100px]">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="prev-btn size-[32px] flex justify-center items-center bg-white hover:bg-primary rounded-full text-darker-blue hover:text-white"
              >
                <FaLessThan className="w-[10px]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="next-btn size-[32px] flex justify-center items-center bg-white hover:bg-primary rounded-full text-darker-blue hover:text-white"
              >
                <FaGreaterThan className="w-[10px]" />
              </button>
            </div>
          )}
        </div>

        {/* Testimonial cards */}
        <div>
          {loading ? (
            <div className="flex flex-wrap h-[330px] overflow-y-hidden overflow-x-auto scrollbar-hide justify-center sm:justify-between transition-all duration-500">
              <div className="size-[300px] bg-silver animate-pulse rounded-2xl shadow-2xl " > </div>
              <div className="size-[300px] bg-silver animate-pulse rounded-2xl shadow-2xl " > </div>
              <div className="size-[300px] bg-silver animate-pulse rounded-2xl shadow-2xl " > </div>
            </div>
          ) : (
            <div className="flex flex-wrap h-[330px] overflow-y-hidden overflow-x-auto scrollbar-hide justify-center sm:justify-between transition-all duration-500">
              {projects
                .slice(testimonialIndex, testimonialIndex + 3)
                .map((project, index) => {
                  const { testimonial, info, title } = project;
                  return (
                    <TestimonialCard
                      key={`${testimonial.client}-${index}`} // Unique key
                      client={info.client}
                      title={title}
                      content={testimonial.content}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
