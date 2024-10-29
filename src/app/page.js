"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  return (
    <section className=" bg-white p-5 md:px-[140px] md:py-10  ">
      <h1 className=" font-bold text-2xl md:text-3xl text-darker-blue  my-5">
        Meet Our <span className=" italic text-primary ">Amazing Team</span>
      </h1>
      <div className=" flex flex-wrap justify-center md:justify-between  ">
        {team.map((member,index)=>(<TeamCard key={index} team={member} />))}
        
      </div>
      <div className=" my-5 ">
        <Link
          href="./pages/company/#teams"
          className=" px-5 py-1 rounded-full bg-primary hover:bg-darker-blue border-primary border-2 text-secondary hover:text-white w-[140px] "
        >
          See All Team
        </Link>
        <Link
          href="./pages/company/#careers"
          className=" px-5 py-1 rounded-full hover:bg-primary  border-primary border-2 text-darker-blue hover:text-white w-[140px] "
        >
          Join Our Team
        </Link>
      </div>
    </section>
  );
};

const team = [
  {
    name: "Alice Johnson",
    title: "Project Manager",
    image: "https://example.com/images/alice.jpg",
    bio: "Alice is an experienced project manager with a knack for delivering results on time and within budget. She loves organizing teams and ensuring smooth workflows.",
    social_link: {
      facebook: "https://facebook.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    name: "Bob Smith",
    title: "Frontend Developer",
    image: "https://example.com/images/bob.jpg",
    bio: "Bob is a creative frontend developer who specializes in building responsive and engaging user interfaces. He enjoys coding and exploring new technologies.",
    social_link: {
      facebook: "https://facebook.com/bobsmith",
      linkedin: "https://linkedin.com/in/bobsmith",
      github: "https://github.com/bobsmith",
    },
  },
  {
    name: "Catherine Lee",
    title: "Backend Developer",
    image: "https://example.com/images/catherine.jpg",
    bio: "Catherine is a backend developer with a passion for databases and server-side logic. She ensures that applications run smoothly behind the scenes.",
    social_link: {
      facebook: "https://facebook.com/catherinelee",
      linkedin: "https://linkedin.com/in/catherinelee",
      github: "https://github.com/catherinelee",
    },
  },
  {
    name: "David Kim",
    title: "UX/UI Designer",
    image: "https://example.com/images/david.jpg",
    bio: "David is a talented UX/UI designer who focuses on creating user-friendly and visually appealing interfaces. He loves to enhance user experiences through design.",
    social_link: {
      facebook: "https://facebook.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
    },
  },
  {
    name: "Eva Patel",
    title: "DevOps Engineer",
    image: "https://example.com/images/eva.jpg",
    bio: "Eva is a skilled DevOps engineer who bridges the gap between development and operations, ensuring efficient deployment and system performance.",
    social_link: {
      facebook: "https://facebook.com/evapatel",
      linkedin: "https://linkedin.com/in/evapatel",
      github: "https://github.com/evapatel",
    },
  },
  {
    name: "Frank White",
    title: "Data Scientist",
    image: "https://example.com/images/frank.jpg",
    bio: "Frank is a data scientist with a strong analytical background. He loves extracting insights from data to drive business decisions.",
    social_link: {
      facebook: "https://facebook.com/frankwhite",
      linkedin: "https://linkedin.com/in/frankwhite",
      github: "https://github.com/frankwhite",
    },
  },
  {
    name: "Grace O'Connor",
    title: "Marketing Specialist",
    image: "https://example.com/images/grace.jpg",
    bio: "Grace is a marketing specialist with expertise in digital marketing strategies. She enjoys creating campaigns that resonate with target audiences.",
    social_link: {
      facebook: "https://facebook.com/graceoconnor",
      linkedin: "https://linkedin.com/in/graceoconnor",
      github: "https://github.com/graceoconnor",
    },
  },
  {
    name: "Henry Garcia",
    title: "Content Writer",
    image: "https://example.com/images/henry.jpg",
    bio: "Henry is a content writer who crafts compelling narratives and informative articles. He enjoys writing about technology and innovation.",
    social_link: {
      facebook: "https://facebook.com/henrygarcia",
      linkedin: "https://linkedin.com/in/henrygarcia",
      github: "https://github.com/henrygarcia",
    },
  },
  {
    name: "Isabella Martinez",
    title: "Quality Assurance Engineer",
    image: "https://example.com/images/isabella.jpg",
    bio: "Isabella is a quality assurance engineer dedicated to maintaining high standards in software development through rigorous testing.",
    social_link: {
      facebook: "https://facebook.com/isabellamartinez",
      linkedin: "https://linkedin.com/in/isabellamartinez",
      github: "https://github.com/isabellamartinez",
    },
  },
  {
    name: "Jack Thompson",
    title: "Business Analyst",
    image: "https://example.com/images/jack.jpg",
    bio: "Jack is a business analyst who helps organizations understand their needs and develop solutions that align with their goals.",
    social_link: {
      facebook: "https://facebook.com/jackthompson",
      linkedin: "https://linkedin.com/in/jackthompson",
      github: "https://github.com/jackthompson",
    },
  },
];

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
            href={social_link.git}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300  "
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </article>
  );
};
