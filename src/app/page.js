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
          href="./client/contact"
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
      <h1 className=" font-bold text-2xl md:text-3xl text-darker-blue  my-5">Meet Our <span className=" italic text-primary " >Amazing Team</span></h1>
      <div className=" flex flex-wrap justify-center md:justify-between  ">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <div className=" my-5 ">
        <Link href="./client/company/#teams" className=" px-5 py-1 rounded-full bg-primary hover:bg-darker-blue border-primary border-2 text-secondary hover:text-white w-[140px] " >See All Team</Link>
        <Link href="./client/company/#careers" className=" px-5 py-1 rounded-full hover:bg-primary  border-primary border-2 text-darker-blue hover:text-white w-[140px] " >Join Our Team</Link>
      </div>
    </section>
  )
}

const TeamCard = () => {
  return (
    <article className=" shadow-2xl border-2 mb-5 mr-5  rounded-2xl">
      <Image
        src={profile}
        alt="profile"
        className="  rounded-2xl "
      />
      <div>
        <h3 className="text-xl text-darker-blue text-bold" >Abdul Wasiu Adebayo</h3>
        <p className="text-xl text-darker-blue text-bold" >Lead Developer</p>
        <div>
          <Link href="#">
            <FaLinkedinIn />
          </Link>
          <Link href="#">
            <FaGithub />
          </Link>
          <Link href="#">
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </article>
  );
}