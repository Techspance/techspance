"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import animateddownarrow from "../../../assets/images/portfolio/animateddownarrow.gif";
import hline from "../../../assets/images/portfolio/hline.svg";
import design from "../../../assets/images/portfolio/design.svg";

const categories = [
  "All",
  "Product Design",
  "Website",
  "Mobile Application",
  "Software",
  "IT Consultation",
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState("");
  const [limit, setLimit] = useState(9);
  const [projects, setProjects] = useState([]);
  const selectedCategory = categories[openIndex];

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1090);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch projects data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/projects`); // Ensure the URL is correct
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        const data = await response.json(); // Store response in a variable
        setProjects(data.data); // Assuming data is the array of projects
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.info.services.includes(selectedCategory)
        );

  const limitedProjects = filteredProjects.slice(0, limit);

  return (
    <div className="bg-background p-5 md:px-[140px] md:py-10">
      {/* Header section */}
      <section className="header mt-28 max-w-[800px] mx-auto text-center">
        <h1 className="font-roboto font-bold text-darker-blue text-3xl mb-3">
          Our <span className="text-primary italic">Projects</span>
        </h1>
        <p className="md:text-lg mb-3">
          At Techspance, every project is a testament to our commitment to
          excellence and innovation. From cutting-edge web development to
          tailored mobile applications, our portfolio showcases solutions that
          drive business success and create meaningful digital experiences.
        </p>
        <p className="md:text-lg mb-3">
          Explore our featured work and discover how we’ve helped businesses
          like yours achieve their digital goals.
        </p>
        <Image
          src={animateddownarrow}
          alt="animated down arrow"
          className="size-[150px] mx-auto mb-3"
        />
      </section>

      {/* Category section */}
      <section className="category mb-5 mx-auto">
        <CategorySection
          selectedCategory={selectedCategory}
          handleToggle={handleToggle}
          openIndex={openIndex}
          isMobile={isMobile}
        />
      </section>

      {/* Project section */}
      <section className="projects mx-auto flex flex-col justify-center">
        <div className="flex flex-wrap">
          {limitedProjects.length > 0 ? (
            limitedProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <p>No project for the selected Category</p>
          )}
        </div>
        {limitedProjects.length >= limit && (
          <button
            className="w-[200px] mx-auto bg-darker-blue text-secondary hover:bg-primary hover:text-white py-1 rounded-full self-center"
            onClick={() => setLimit(filteredProjects.length)} // Show all projects
          >
            See More
          </button>
        )}
      </section>

      {/* Bottom section */}
      <section className="bottom-section bg-white -mx-5 md:-mx-[140px] p-5 mt-5 -mb-5 md:-mb-10 flex flex-col justify-center space-y-2">
        <p className="max-w-[800px] mx-auto text-xl text-center -mb-3 sm:-mb-5 md:-mb-8">
          Harness the power of cutting-edge technology and innovative solutions
          to take your business to new heights. Let us turn your vision into a
          reality.
        </p>
        <Image src={hline} alt="horizontal line" className="w-[50%] mx-auto" />
        <Link
          href="./contact"
          className="border-2 border-primary rounded-full px-5 py-1 text-darker-blue hover:bg-primary hover:text-white mx-auto"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

const CategorySection = ({
  selectedCategory,
  handleToggle,
  openIndex,
  isMobile,
}) => {
  return (
    <div
      className={`flex ${
        isMobile ? "flex-col justify-start items-start" : "flex-row"
      }`}
    >
      {categories.map((category, index) => (
        <button
          className={`text-dark-blue text-lg p-1 px-5 rounded-lg ${
            openIndex === index ? "bg-primary text-white" : "hover:bg-[#EAEEF2]"
          }`}
          key={index}
          onClick={() => handleToggle(index)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export const ProjectCard = ({ project }) => {
  const { _id, title, info } = project;

  return (
    <article className="w-[320px] h-[380px] rounded-xl shadow-xl mx-auto bg-white mb-5 self-start">
      <Image
        src={info.main_image}
        alt="project image"
        className="w-auto h-[200px] rounded-t-xl"
        width={320}
        height={200}
      />
      <div className="w-[300px] h-[178px] overflow-hidden m-auto px-2 py-2">
        <h3 className="font-bold text-xl font-roboto text-darker-blue hover:text-primary h-8 mt-1 text-wrap overflow-hidden">
          <Link href={`./portfolio/${_id}`}>{title}</Link>
        </h3>

        <p className="flex flex-wrap text-dark-blue text-lg space-x-2 h-8 overflow-hidden -mt-1">
          {info.services.join(", ")}
        </p>

        <p className="h-12 overflow-hidden mt-1">{info.note}</p>
        <ul className="flex space-x-2 mt-2 h-8 flex-wrap overflow-hidden">
          {info.tools.map((tool, index) => (
            <li
              key={index}
              className="bg-background px-2 py-1 text-dark-blue rounded-lg"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Page;
