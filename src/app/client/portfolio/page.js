"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

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

const CategorySection = ({
  selectedCategory,
  handleToggle,
  openIndex,
  isMobile,
}) => {
  return (
    <div
      className={` flex  ${
        isMobile ? "flex-col justify-start items-start" : "flex-row"
      } `}
    >
      {categories.map((category, index) => (
        <button
          className={`text-dark-blue text-lg p-1 px-5 rounded-lg  ${
            openIndex === index
              ? "bg-primary text-white"
              : "hover:bg-[#EAEEF2] "
          } `}
          key={index}
          onClick={() => handleToggle(index)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Project title",
    services: [
      "service 1",
      "Product Design",
      "Website",
      "service 2",
      "service 2",
    ],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 2,
    title: "Project title",
    services: [
      "service 1",
      "service 2",
      "service 2",
      "Product Design",
      "service 2",
    ],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 3,
    title: "Project title",
    services: [
      "Mobile Application",
      "service 2",
      "service 2",
      "service 2",
      "service 2",
    ],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 4,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 5,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 6,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 7,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 8,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 9,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 10,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 11,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
  {
    id: 12,
    title: "Project title",
    services: ["service 1", "service 2", "service 2", "service 2", "service 2"],
    description:
      "service description service description service description service description service description service description",
    tools: ["tool 1", "tool 2", "tool 3", "tool 3", "tool 3", "tool 3"],
    image: design,
  },
];

const ProjectCard = ({ project }) => {
  const { title, services, description, tools, image } = project;

  return (
    <article className="w-[320px] h-[400px] rounded-xl shadow-xl mx-auto bg-white mb-5 self-start">
      <Image
        src={image}
        alt="project image"
        className="w-full h-[200px] rounded-t-xl"
      />
      <div className="w-[300px] h-[178px] overflow-hidden m-auto px-2 py-2">
        <h3 className="font-bold text-2xl font-roboto text-darker-blue hover:text-primary h-8 mt-1">
          <Link href="#">{title}</Link>
        </h3>
        <ul className="flex flex-wrap text-dark-blue text-xl space-x-2 mt-1 h-8 overflow-hidden">
          {services.map((service, serviceIndex) => (
            <li key={serviceIndex} className="py-1">
              {service}
            </li>
          ))}
        </ul>
        <p className="h-12 overflow-hidden mt-1">{description}</p>
        <ul className="flex  space-x-2 mt-2 h-8 flex-wrap overflow-hidden">
          {tools.map((tool, toolIndex) => (
            <li
              key={toolIndex}
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

const page = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1090);
  const [limit, setLimit] = useState(9);
  const [displayButton, setDisplayButton] = useState(true);
  const selectedCategory = categories[openIndex];

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  // useEffect to track window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1090);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.services.includes(selectedCategory)
        );
  const limitedProjects = filteredProjects.slice(0, limit);

  return (
    <div className=" bg-background p-5 md:px-[140px] md:py-10  ">
      {/* Header section */}
      <section className="header mt-28 max-w-[800px] mx-auto text-center ">
        <h1 className=" font-roboto font-bold text-darker-blue text-3xl  mb-3 ">
          Our <span className="  text-primary  italic ">Projects</span>
        </h1>
        <p className=" md:text-lg mb-3 ">
          At Techspance, every project is a testament to our commitment to
          excellence and innovation. From cutting-edge web development to
          tailored mobile applications, our portfolio showcases solutions that
          drive business success and create meaningful digital experiences.
        </p>
        <p className=" md:text-lg mb-3 ">
          Explore our featured work and discover how we’ve helped businesses
          like yours achieve their digital goals.
        </p>
        <Image
          src={animateddownarrow}
          alt="
        animated down arrow"
          className=" size-[150px] mx-auto  mb-3"
        />
      </section>
      {/* Header section end*/}
      {/* category section end*/}

      <section className="category mb-5 mx-auto ">
        <CategorySection
          selectedCategory={selectedCategory}
          handleToggle={handleToggle}
          openIndex={openIndex}
          isMobile={isMobile}
        />
      </section>
      {/* category section end*/}
      {/* project section start*/}

      <section className="projects  mx-auto flex flex-col justify-center ">
        <div className=" flex flex-wrap ">
          {limitedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {limitedProjects.length < 9 ? null : (
          <button
            className=" w-[200px] mx-auto bg-darker-blue text-secondary hover:bg-primary hover:text-white py-1 rounded-full self-center "
            onClick={() => {
              setLimit(filteredProjects.length);
            }}
          >
            See More
          </button>
        )}
      </section>
      {/* project section end*/}
      {/* bottom section*/}

      <section className="bottom-section bg-white -mx-5 md:-mx-[140px] p-5 mt-5 -mb-5 md:-mb-10 flex flex-col justify-center space-y-2 ">
        <p className=" max-w-[800px] mx-auto text-xl text-center -mb-3 sm:-mb-5 md:-mb-8   ">
          Harness the power of cutting-edge technology and innovative solutions
          to take your business to new heights. Let us turn your vision into a
          reality.
        </p>

        <Image src={hline} alt="horizontal line" className="  w-[50%] mx-auto " />

        <Link
          href="./client/contact"
          className=" border-2 border-primary rounded-full px-5 py-1 text-darker-blue hover:bg-primary hover:text-white mx-auto  "
        >
          Get Started
        </Link>
      </section>
      {/* bottom section end*/}
    </div>
  );
};

export default page;
