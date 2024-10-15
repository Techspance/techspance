"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../../../Databases/projects";
import { ProjectCard } from "../../portfolio/page";

import logo from "../../../../assets/images/portfolio/logo.svg";

import { CiCircleCheck } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Page = ({ params }) => {
  const [initialIndex, setInitialIndex] = useState(0);
  const [project, setProject] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [relatedProjs, setRelatedProjs] = useState([]);
  const [nextProj, setNextProj] = useState([]);
  const [mockups, setMockups] = useState([]);
  const [mockupIndex, setMockupIndex] = useState(0);

  const project_id = params.project_id;
  const projects = data.data;

  useEffect(() => {
    //fetch data from the api

    // Find the specific project by id
    const projectIndex = projects.findIndex((p) => p._id == project_id);
    const foundProject = projects[projectIndex];

    if (foundProject) {
      setProject(foundProject);
      setIsloading(false);

      //mockup images
      setMockups(foundProject.result.mockups);

      const interval = setInterval(() => {
        setMockupIndex((prevIndex) =>
          prevIndex === foundProject.result.mockups.length - 1
            ? 0
            : prevIndex + 1
        );
      }, 3000); // Change mockup every 3 seconds
      clearInterval(interval); // Cleanup interval on component unmount

      // Find related projects
      const related = projects
        .filter((proj) =>
          proj.info.services.some((service) =>
            foundProject.info.services.includes(service)
          )
        )
        .filter((proj) => proj._id !== foundProject._id); // Exclude current project
      setRelatedProjs(related);
    }

    // Next Project
    const nextProject = () => {
      if (projectIndex + 1 < projects.length) {
        return projects[projectIndex + 1]; // Return the next project
      }
      return null; // No next project
    };
    const nextProj = nextProject();
    setNextProj(nextProj);
  }, [project_id, projects.concat]);

  if (isloading) {
    return (
      <div className="pt-32 flex justify-center items-center pb-32 ">
        <p className="text-2xl text-center text-darker-blue animate-pulse  ">
          Project detail is loading
        </p>
      </div>
    );
  }

  // Pagination handlers for related projects
  const handleNext = () => {
    setInitialIndex((prev) => (prev + 1) % relatedProjs.length);
  };

  const handlePrev = () => {
    setInitialIndex(
      (prev) => (prev - 1 + relatedProjs.length) % relatedProjs.length
    );
  };

  const limitedRelatedProjs = relatedProjs.slice(
    initialIndex,
    initialIndex + 3
  );

  return (
    <div className="p-5 md:px-[140px] md:py-10 ">
      {/* Header Section */}
      <section className="mt-28">
        <h1 className="project-title font-roboto font-bold text-3xl mx-auto text-center text-primary ">
          {project.title}
        </h1>
        <div className=" flex flex-wrap  justify-center md:justify-around my-5 ">
          <div className="project-client w-[200px]  text-center  mt-3 ">
            <h3 className=" text-dark-blue text-lg ">CLIENT</h3>
            <p className=" text-darker-blue">{project.info.client}</p>
          </div>
          <div className="project-services w-[320px]  text-center   mt-3 ">
            <h3 className=" text-dark-blue text-lg ">SERVICES</h3>
            <p className=" text-darker-blue">
              {project.info.services.join(", ")}
            </p>
          </div>
          <div className="project-date w-[200px] text-center mt-3 ">
            <h3 className=" text-dark-blue text-lg ">DATE</h3>
            <p className=" text-darker-blue ">{project.info.date}</p>
          </div>
          <div className="project-team w-[320px] text-center mt-3 ">
            <h3 className=" text-dark-blue text-lg ">TEAM</h3>
            <ul className=" text-darker-blue ">
              {project.info.team.map((member, index) => {
                const { name, title } = member;
                return (
                  <li key={index} className="  ">
                    {name} - <span className="  ">{title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="text-silver mt-5" />
      </section>
      {/* Hero Section */}
      <section className="project-hero my-5 ">
        <div className="main-image flex justify-center items-center w-full relative my-5 ">
          <Image
            src={logo}
            alt="logo image"
            width={300}
            height={300}
            className=" absolute w-[300px]   "
          />
          <Image
            src={project.info.main_image}
            alt="project image"
            width={850}
            height={908}
            className=" z-10 min-w-[320px] max-w-[800px]  mix-blend-multiply  "
          />
        </div>
        <div className=" hero-info max-w-[600px] text-center mx-auto text-lg ">
          <p className=" mb-5 ">{project.info.note}</p>
          {project.info.live_link ? (
            <Link
              href={project.info.live_link}
              className=" text-primary hover:text-dark-blue "
            >
              See live project
            </Link>
          ) : (
            <Link
              href={project.info.prototype_link}
              className=" text-primary hover:text-dark-blue  "
            >
              See prototype
            </Link>
          )}
        </div>
        <hr className=" text-silver my-5" />
      </section>
      {/* Challenge Section */}
      <section className=" challenge-section my-5 ">
        <div className=" flex flex-col md:flex-row justify-between ">
          <h2 className=" font-roboto font-bold text-2xl text-darker-blue mr-10 ">
            Our
            <span className=" flex  ml-5 text-primary w-fit h-fit relative ">
              <div className="px-2">Challenge</div>
              <div className=" bg-background absolute w-full  h-full -z-10 rounded-full top-1/2  shadow-xl "></div>
            </span>
          </h2>
          <div className="  my-5 md:mt-0 lg:max-w-[800px]  ">
            <p className=" mb-3 text-lg ">{project.challenge.text}</p>
            <ul className=" list-disc ml-5 text-dark-blue  ">
              {project.challenge.list.map((list, index) => (
                <li key={index} className="  ">
                  {list}
                </li>
              ))}
            </ul>
            <div className=" flex flex-wrap justify-around mt-5 ">
              {project.challenge.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="images of the design process"
                  width={320}
                  height={320}
                  className=" rounded-xl mb-10 shadow-xl min-w-fit max-w-full "
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Result Section */}
      <section className=" Result-section my-5 ">
        <div className=" flex flex-col md:flex-row justify-between ">
          <h2 className=" font-roboto font-bold text-2xl text-darker-blue mr-10 ">
            solution &
            <span className=" flex  ml-5 text-primary w-fit h-fit relative ">
              <div className="px-2">Result</div>
              <div className=" bg-background absolute w-full  h-full -z-10 rounded-full top-1/2  shadow-xl "></div>
            </span>
          </h2>
          <div className="  my-5 md:mt-0 lg:max-w-[800px]  ">
            <p className=" mb-3 text-lg ">{project.result.text}</p>
            <ul className="  ml-0 flex flex-wrap  ">
              {project.result.list.map((list, index) => (
                <li
                  key={index}
                  className=" flex md:flex-1/2 md:ml-3  text-dark-blue items-start "
                >
                  <CiCircleCheck className="mr-1 my-auto" />
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-background -mx-5 md:-mx-[140px] p-10 ">
          <div className="screen-container w-[300px] h-[500px] bg-primary rounded-3xl flex justify-center items-center  relative ">
            <div className="inner-screen w-[280px] h-[480px] bg-silver rounded-3xl ">
              {mockups && mockups.length > 0 && (
                <Image
                  src={mockups[mockupIndex]}
                  alt={`mockup image ${mockupIndex + 1}`}
                  width={300}
                  height={480}
                  className="object-cover w-auto h-full rounded-3xl "
                />
              )}
            </div>
            <div className="notification w-[100px] h-[30px]  absolute top-4 bg-[rgba(0,0,0,0.8)] rounded-full flex justify-center items-center  ">
              <div className="size-5 flex justify-center items-center bg-gradient-radial from-black  rounded-full ">
                <div className="size-1 bg-gradient-radial from-[#fff] to-black rounded-full "></div>
              </div>
            </div>
            <div className="w-3 h-10 bg-primary rounded-r-full absolute top-[70px] -right-1.5  "></div>
            <div className="w-3 h-10 bg-primary rounded-r-full absolute top-[110px] -right-1.5  "></div>
            <div className="w-3 h-16 bg-primary rounded-r-xl absolute top-1/3 -right-1  "></div>
          </div>
        </div>
        <div className=" max-w-[600px] mx-auto my-5 text-dark-blue text-center ">
          <p className="  ">{project.testimonial.content}</p>
          <p className=" text-lg text-darker-blue font-semibold ">
            {project.testimonial.client}
          </p>
        </div>
        <hr className=" text-silver my-5" />
      </section>
      {/* Next Project Section */}
      <section className="Next-project-section max-w-fit mx-auto mt-5 mb-20 text-center text-lg font-bold ">
        <h2 className=" text-silver mb-3  ">NEXT PROJECT</h2>
        {nextProj ? (
          <Link
            href={nextProj._id}
            className=" text-2xl text-darker-blue hover:text-primary "
          >
            {nextProj.title}
          </Link>
        ) : (
          <div className=" text-2xl text-darker-blue hover:text-primary ">
            This is the last project for now. check back later.
          </div>
        )}
      </section>
      {/* Related Project Section */}
      <section className="Related-projects bg-background  -m-5 md:-mx-[140px] md:-mb-10 pb-5 ">
        <div className="max-w-[800px] mx-auto text-center py-5 ">
          <div className=" flex justify-center items-center space-x-10 md:space-20 mb-5 ">
            <button
              onClick={handlePrev}
              className="size-10 flex justify-center items-center bg-white text-primary rounded-full font-thin  hover:bg-primary hover:text-white "
            >
              <FaLessThan />
            </button>
            <h2 className=" flex justify-center font-roboto font-bold text-2xl text-darker-blue  ">
              Related
              <span className=" flex   text-primary w-fit h-fit relative ">
                <div className="px-2">Projects</div>
                <div className=" bg-background absolute w-full  h-full -z-10 rounded-5xl   shadow-xl "></div>
              </span>
            </h2>
            <button
              onClick={handleNext}
              className="next-button  size-10 flex justify-center items-center bg-white text-primary rounded-full font-thin hover:bg-primary hover:text-white  "
            >
              <FaGreaterThan />
            </button>
          </div>

          <p className="min-w-[320px]">
            We have an experienced team of production and inspection personnel
            to ensure quality.
          </p>
        </div>

        <div className="flex flex-wrap overflow-hidden h-[400px]  px-5 md:mx-[140px] transition ease-in-out delay-150  duration-500 ">
          {limitedRelatedProjs.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
