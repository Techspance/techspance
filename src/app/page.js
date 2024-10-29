"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ServiceSection from "@/components/ServiceSection";
import FeaturedProjects from "@/components/FeaturedProjects";

import TestimonialSection from "@/components/TestimonialSection";
import MissionVision from "@/components/MissionVision";
import TechnologySection from "@/components/TechnologySection";
import BlogFaqsSection from "@/components/BlogFaqsSection";

import profile from "../assets/images/home/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { data } from "../Databases/teams";

const team = data.data

const getRandomData = (data, number) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
};

const localTeam = getRandomData(data.data, 3);



export default function Home() {
  return (
    <div>
      <Header />
      <TestimonialSection />
      <ServiceSection />
      <MissionVision />
      <TechnologySection />
      <FeaturedProjects />
      <TeamSection />
      <BlogFaqsSection />
      <CTA />
    </div>
  );
}

const CTA = () => {
  return (
    <section className="bg-primary p-5 md:px-[140px] md:py-10 space-y-10 flex flex-col justify-center flex-wrap ">
      <div className="max-w-[800px] self-center ">
        <h2 className="text-white text-3xl md:text-center font-bold self-center  ">
          Assess Your Business Potential Now & Find Opportunities For{" "}
          <span className="font-normal italic">Bigger Success</span>
        </h2>
      </div>

      <div className=" self-center ">
        <Link
          className="text-white text-md hover:bg-darker-blue border-2 hover:border-darker-blue rounded-full px-5 py-2 "
          href="./pages/contact"
        >
          Get Information
        </Link>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const [featuredTeam, setFeaturedTeam] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchTeam = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://www.techspance.com/api/teams");
      const data = await response.json();

      if (data.success) {
        const team = data.data;
        setFeaturedTeam(getRandomData(team, 3));
      } else {
        console.error("Failed to fetch projects:", data.message);
        setFeaturedTeam(localTeam); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setFeaturedTeam(localTeam); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished
    }
  };

  // Fetch featuredProjects on component mount
  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <section className=" bg-white p-5 md:px-[140px] md:py-10  ">
      <h1 className=" font-bold text-2xl md:text-3xl text-darker-blue  my-5">
        Meet Our <span className=" italic text-primary ">Amazing Team</span>
      </h1>
      {loading ? (
        <div className=" flex flex-wrap justify-center md:justify-between  ">
          <div className="size-[320px] bg-silver rounded-2xl shadow-2xl animate-pulse m-4 "></div>
          <div className="size-[320px] bg-silver rounded-2xl shadow-2xl animate-pulse  m-4 "></div>
          <div className="size-[320px] bg-silver rounded-2xl shadow-2xl animate-pulse  m-4 "></div>
        </div>
      ) : (
        <div className=" flex flex-wrap justify-center md:justify-between  ">
          {featuredTeam.map((member, index) => (
            <TeamCard key={index} team={member} />
          ))}
        </div>
      )}

      <div className=" my-5 flex justify-center space-x-5 ">
        <Link
          href="./pages/company/ourTeam"
          className=" px-5 py-1 rounded-full bg-primary hover:bg-darker-blue border-primary  hover:border-darker-blue border-2 text-secondary hover:text-white  transition-all duration-300 "
        >
          See All Team
        </Link>
        <Link
          href="./pages/company/careers"
          className=" px-5 py-1 rounded-full hover:bg-primary  border-primary border-2 text-darker-blue hover:text-white  transition-all duration-300 "
        >
          Join Our Team
        </Link>
      </div>
    </section>
  );
};



const TeamCard = ({ team }) => {
  const { name, title, image, bio, social_link } = team;

  return (
    <article className=" shadow-2xl   rounded-2xl w-[320px] mb-5 ">
      <Image
        src={image || profile}
        alt="profile picture"
        className="  rounded-t-2xl w-full h-fit  "
        width={320}
        height={200}
      />
      <div className="p-5">
        <h3 className="text-xl text-darker-blue font-bold font-roboto -mt-2 truncate overflow-ellipsis whitespace-nowrap ">
          {name}
        </h3>
        <p className="text-xl text-dark-blue truncate overflow-ellipsis whitespace-nowrap ">
          {title}
        </p>
        <div className=" flex  ">
          <Link
            href={social_link.facebook}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300  "
          >
            <FaFacebookF />
          </Link>
          <Link
            href={social_link.linkedin}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300   "
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={social_link.github}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300  "
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </article>
  );
};
