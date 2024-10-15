"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../../../Databases/projects"; // Assuming this is the local data
import { ProjectCard } from "../../portfolio/page";

import logo from "../../../../assets/images/portfolio/logo.svg";
import { CiCircleCheck } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Page = ({ params }) => {
  const [initialIndex, setInitialIndex] = useState(0);
  const [project, setProject] = useState(null);
  const [relatedProjs, setRelatedProjs] = useState([]);

  const project_id = params.project_id;
  const projects = data.data;

  useEffect(() => {
    // Find the specific project by id
    const projectIndex = projects.findIndex((p) => p._id == project_id);
    const foundProject = projects[projectIndex];

    if (foundProject) {
      setProject(foundProject);
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
  }, [project_id, projects]);

  if (!project) {
    return (
      <div className="pt-32">
        <p>Project not found.</p>
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
    <div className="p-5 md:px-[140px] md:py-10">
      {/* Header Section */}
      <section className="mt-28">
        <h1 className="project-title font-roboto font-bold text-3xl mx-auto text-center text-primary">
          {project.title}
        </h1>
        {/* Project details */}
        <div className="flex flex-wrap justify-center md:justify-around my-5">
          <div className="project-client w-[200px] text-center mt-3">
            <h3 className="text-dark-blue text-lg">CLIENT</h3>
            <p className="text-darker-blue">{project.info.client}</p>
          </div>
          <div className="project-services w-[320px] text-center mt-3">
            <h3 className="text-dark-blue text-lg">SERVICES</h3>
            <p className="text-darker-blue">
              {project.info.services.join(", ")}
            </p>
          </div>
          {/* Additional info */}
        </div>
        <hr className="text-silver mt-5" />
      </section>

      {/* Other sections like Hero, Challenge, and Result will go here */}

      {/* Next Project Section */}
      <section className="Next-project-section max-w-fit mx-auto mt-5 mb-20 text-center text-lg font-bold">
        <h2 className="text-silver mb-3">NEXT PROJECT</h2>
        {relatedProjs.length > 0 && (
          <Link href={`/homepage/${relatedProjs[0]._id}`}>
            {relatedProjs[0].title}
          </Link>
        )}
      </section>

      {/* Related Projects Section */}
      <section className="Related-projects bg-background -m-5 md:-mx-[140px] md:-mb-10 pb-5">
        <div className="max-w-[800px] mx-auto text-center py-5">
          <div className="flex justify-center items-center space-x-10 md:space-20 mb-5">
            <button
              onClick={handlePrev}
              className="size-10 flex justify-center items-center bg-white text-primary rounded-full hover:bg-primary hover:text-white"
            >
              <FaLessThan />
            </button>
            <h2 className="font-roboto font-bold text-2xl text-darker-blue">
              Related Projects
            </h2>
            <button
              onClick={handleNext}
              className="size-10 flex justify-center items-center bg-white text-primary rounded-full hover:bg-primary hover:text-white"
            >
              <FaGreaterThan />
            </button>
          </div>

          <div className="flex flex-wrap overflow-hidden h-[410px] px-5 md:mx-[140px]">
            {limitedRelatedProjs.map((proj, index) => (
              <ProjectCard key={index} project={proj} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
