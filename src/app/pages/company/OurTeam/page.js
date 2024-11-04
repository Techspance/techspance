"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaRegCheckCircle,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";


import profile from "../../../../assets/images/home/profile.png";
import teamImage from "../../../../assets/images/company/teamImage.png";
import { data } from "../../../../Databases/teams";

const localTeam = data.data;


const TeamPage = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchTeam = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://www.techspance.com/api/teams");
      const data = await response.json();

      if (data.success) {
        setTeam(data.data);
      } else {
        console.error("Failed to fetch projects:", data.message);
        setTeam(localTeam); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setTeam(localTeam); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished
    }
  };

  // Fetch featuredProjects on component mount
  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className="  p-5  md:px-[140px] md:py-10 bg-white ">
      <section className=" header max-w-[1200px]  flex flex-col justify-center mt-24 mx-auto text-center ">
        <h1 className=" font-roboto font-bold text-3xl text-darker-blue mb-2 ">
          Meet Our Dedicated Team
        </h1>
        <p className=" text-dark-blue text-xl mb-3 ">
          The minds behind Techspance, where creativity meets innovation.
        </p>
        <p className=" max-w-[800px] mx-auto mb-5 text-lg ">
          At Techspance, our team is our strength. With each member bringing a
          unique blend of expertise, creativity, and passion, we come together
          to deliver impactful digital solutions. Get to know the people who
          drive the vision behind our projects and make Techspance a leader in
          technology services.
        </p>
        <Image
          src={teamImage}
          alt="team image"
          width={1000}
          height={500}
          className=" w-full h-auto rounded-2xl "
        />
      </section>
      <section className=" leadership mt-5 ">
        <h2 className=" font-roboto font-bold text-2xl text-darker-blue mb-3 ">
          Our <span className=" text-primary  ">Leadership</span>
        </h2>
        <p className="  text-lg mb-2">
          Behind every successful project at Techspance is a leadership team
          with a clear vision and an unwavering commitment to innovation. Our
          leaders ensure that we stay ahead of the curve by embracing new
          technologies, fostering a collaborative culture, and delivering
          excellence in every aspect of our work.
        </p>
        <p className="  text-lg ">
          At the heart of Techspance is a mission to bridge the gap between
          businesses and cutting-edge technology. Our leadership team’s
          experience in software development, UX design, and IT solutions guides
          our approach in transforming ideas into scalable, effective solutions.
        </p>
      </section>
      <section className=" mt-5  ">
        <h2 className=" font-roboto font-bold text-2xl text-darker-blue mb-3 ">
          Meet The <span className=" text-primary  ">Team</span>
        </h2>
        {loading ? (
          <div className=" flex flex-wrap justify-center md:justify-around  ">
            <article className=" shadow-2xl   rounded-2xl w-[320px]  max-w-[500px] m-5 bg-silver animate-pulse h-[320px] "></article>
            <article className=" shadow-2xl   rounded-2xl w-[320px]  max-w-[500px] m-5 bg-silver animate-pulse h-[320px] "></article>
          </div>
        ) : (
          <div className=" flex flex-wrap justify-center md:justify-around  ">
            {team.map((member, index) => (
              <TeamCard team={member} />
            ))}
          </div>
        )}
      </section>
      <section className="values max-w-[600px] mt-5 ">
        <h2 className=" font-roboto font-bold text-2xl text-darker-blue mb-3 ">
          Our <span className=" text-primary  ">Values</span>
        </h2>
        <p className=" text-lg mb-3  ">
          At Techspance, we’re driven by our core values. These values guide
          every project we undertake and every interaction we have with our
          clients.
        </p>
        <ul className="   ">
          <li className=" text-lg text-dark-blue mb-2 ">
            {" "}
            <div className=" flex items-center ">
              <FaRegCheckCircle className=" mr-1   " />
              Collaboration
            </div>
            <p className=" ml-5  text-black text-base hidden sm:block  ">
              We believe that the best solutions come from teamwork. Our team
              thrives on working together, combining diverse skills to deliver
              exceptional results.
            </p>
          </li>
          <li className=" text-lg text-dark-blue mb-2 ">
            {" "}
            <div className=" flex items-center ">
              <FaRegCheckCircle className=" mr-1   " />
              Innovation
            </div>
            <p className=" ml-5  text-black text-base hidden sm:block  ">
              Technology is ever-evolving, and so are we. We continuously
              explore new technologies and push boundaries to create
              future-ready solutions.
            </p>
          </li>
          <li className=" text-lg text-dark-blue mb-2 ">
            {" "}
            <div className=" flex items-center ">
              <FaRegCheckCircle className=" mr-1   " />
              Integrity
            </div>
            <p className=" ml-5  text-black text-base hidden sm:block  ">
              Trust is built on transparency. We are honest and straightforward
              in our communications, ensuring that our clients can always rely
              on us.
            </p>
          </li>
          <li className=" text-lg text-dark-blue mb-2 ">
            {" "}
            <div className=" flex items-center ">
              <FaRegCheckCircle className=" mr-1   " />
              Client-Centric
            </div>
            <p className=" ml-5  text-black text-base hidden sm:Block  ">
              Our clients’ success is our success. We prioritize understanding
              their needs and work diligently to deliver solutions that drive
              their business forward.
            </p>
          </li>
        </ul>
      </section>
      <section className=" team-culture mt-5 mb-10 ">
        <h2 className=" font-roboto font-bold text-2xl text-darker-blue mb-3 ">
          Our Team <span className=" text-primary  ">Culture</span>
        </h2>
        <p className="text-lg">
          At Techspance, we’ve cultivated a work culture that encourages
          creativity, innovation, and collaboration. Our team members bring
          their diverse skills and perspectives to the table, making Techspance
          a hub for fresh ideas and technical excellence. We believe in
          continuous learning, supporting each other’s growth, and celebrating
          each milestone we achieve together. Whether we’re brainstorming the
          next big idea or working on the finer details of a project, the
          Techspance team is united by a shared goal: to deliver exceptional
          digital solutions that empower our clients.
        </p>
      </section>
      <section className=" CTA-section  -mb-5 -mx-5  md:-mx-[140px] md:-mb-10 bg-primary text-white text-center p-5 md:px-[140px] md:py-10 ">
        <h2 className=" mb-3 font-bold font-roboto text-2xl   ">
          Want to Work With Us?
        </h2>
        <p className=" text-lg max-w-[600px] mb-2 mx-auto ">
          Ready to take your business to the next level? At Techspance, we’re
          always excited to collaborate with innovative companies and talented
          individuals. Whether you’re looking to join our team or partner with
          us on your next project, we’d love to hear from you.
        </p>
        <div className=" pt-5 pb-3 flex flex-col md:flex-row justify-center ">
          <Link
            href="/pages/company/careers"
            className="  px-10 py-1 mb-3 mx-3 rounded-full bg-primary hover:bg-darker-blue border-white  hover:border-darker-blue border-2 text-secondary hover:text-white  transition-all duration-300 "
          >
            Explore Careers
          </Link>
          <Link
            href="/pages/contact"
            className=" px-10 py-1 mb-3 mx-3 rounded-full bg-primary hover:bg-darker-blue border-white  hover:border-darker-blue border-2 text-secondary hover:text-white  transition-all duration-300 "
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

const TeamCard = ({ team }) => {
  const { name, title, image, bio, social_link } = team;

  return (
    <article className=" shadow-2xl   rounded-2xl w-[320px]  max-w-[500px] m-5 ">
      <Image
        src={image || profile}
        alt="profile picture"
        className="  rounded-t-2xl w-full h-fit  "
        width={320}
        height={200}
      />
      <div className="p-5">
        <h3 className="text-xl text-darker-blue font-bold font-roboto -mt-2 truncate overflow-ellipsis whitespace-nowrap text-center ">
          {name}
        </h3>
        <p className="text-xl text-dark-blue truncate overflow-ellipsis whitespace-nowrap text-center ">
          {title}
        </p>
        <p className=" line-clamp-6 hover:line-clamp-none ">{bio}</p>
        <div className=" flex  ">
          <Link
            href={social_link.facebook}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300  "
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={social_link.linkedin}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300   "
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={social_link.github}
            className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300  "
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TeamPage;
