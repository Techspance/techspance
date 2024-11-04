"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import mobile from "../assets/images/services/mobile.svg";

import { data } from "../Databases/projects";

const getRandomProjects = (projects, number) => {
  const shuffled = projects.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
};

const localProjects = getRandomProjects(data.data, 3);

const FeaturedProjectCard = ({ mainImage, title, services, id }) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Link href={`./pages/portfolio/${id}`}>
      <article className=" relative rounded-2xl max-size-[320px] flex justify-center">
        <Image
          src={mainImage}
          alt={`main image of ${title}`}
          className={` size-[320px] rounded-2xl object-cover scale-90 hover:scale-100   transition-all duration-500 `}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          width={320}
          height={320}
        />
        <div
          className={` absolute bottom-0 h-[72px] bg-white py-2 px-5 rounded-2xl w-[90%] ${
            mouseOver ? "  -translate-y-3 opacity-100 " : "hidden opacity-0"
          }  transition-all duration-500 `}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          <h3 className="title h-[32px] truncate overflow-ellipsis whitespace-nowrap text-xl font-bold font-roboto text-darker-blue hover:text-primary ">
            {title}
          </h3>

          <p className="category h-[40px] truncate overflow-ellipsis whitespace-nowrap text-lg font-roboto text-dark-blue">
            {" "}
            {services}{" "}
          </p>
        </div>
      </article>
    </Link>
  );
};

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchProjects = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://www.techspance.com/api/projects");
      const data = await response.json();

      if (data.success) {
        const projects = data.data;
        setFeaturedProjects(getRandomProjects(projects, 3));
      } else {
        console.error("Failed to fetch projects:", data.message);
        setFeaturedProjects(localProjects); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setFeaturedProjects(localProjects); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished
    }
  };

  // Fetch featuredProjects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="bg-background p-5 md:py-10 md:px-[140px] flex flex-col space-y-5 justify-center  ">
      <h1 className="text-darker-blue text-2xl md:text-3xl font-bold font-roboto self-start ">
        Our Featured <span className="italic text-primary">Projects</span>
      </h1>
      {loading ? (
        <div className=" flex flex-wrap justify-center md:justify-between     ">
          <div className=" bg-silver size-[320px] rounded-2xl shadow-2xl animate-pulse m-5 "></div>
          <div className=" bg-silver size-[320px] rounded-2xl shadow-2xl animate-pulse m-5"></div>
          <div className=" bg-silver size-[320px] rounded-2xl shadow-2xl animate-pulse m-5"></div>
        </div>
      ) : (
        <div className=" flex flex-wrap justify-center md:justify-between  ">
          {featuredProjects.map((project, index) => {
            const { title, _id, info } = project;

            return (
              <FeaturedProjectCard
                key={index}
                mainImage={info.main_image}
                title={title}
                id={_id}
                services={info.services.join(", ")}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
