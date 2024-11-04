import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import techstacks from "../assets/images/home/techstacks.svg";
import { CiStar } from "react-icons/ci";

{
  /* <FaStar /> */
}

const techstacksInfo = [
  "Cutting-Edge Web and Mobile Solutions",
  "Integration with Leading Cloud Platforms",

  "Robust Cybersecurity Measures",
  "Scalable Custom Software Solutions",

  "24/7 Dedicated IT Support",
  "AI & Machine Learning for Smarter Business Operations",
  "Cross-Platform Development for Seamless Experience",
];

const TechnologySection = () => {
  return (
    <section className="bg-white p-5 md:py-5 md:px-[140px] flex flex-wrap md:justify-between">
      <div className="Technology-header min-w-[320px] max-w-[450px] pb-5 ">
        <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl ">
          Techspance's <span className="text-primary italic">Technology</span>
        </h2>
        <p className="text-md py-3">
          <span className="font-bold ">
            At Techspance, we are committed to empowering businesses with
            cutting-edge technology solutions.
          </span>
          Our team of experts can help you leverage the latest tech capabilities
          to stay ahead of the curve.
        </p>
        <ul className="w-full flex flex-col mb-5 space-y-1 ">
          {techstacksInfo.map((stackInfo, index) => {
            return (
              <li
                className="flex  text-dark-blue items-center  space-x-2  "
                key={index}
              >
                <CiStar />
                <span>{stackInfo}</span>
              </li>
            );
          })}
        </ul>
        <Link
          href="./pages/services/#process"
          className="px-10 py-2 text-dark-blue bg-white border-2 border-primary rounded-full hover:bg-primary hover:text-white "
        >
          How We Work
        </Link>
      </div>
      <div className="tech-image flex justify-center items-center min-w-[320px] max-w-[600px] mt-10">
        <Image
          src={techstacks}
          alt="Techspance's Technology"
          className="mx-20 w-[320px] max-w-[600px]"
        />
      </div>
    </section>
  );
};

export default TechnologySection;
