import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ServiceCard from "./ServiceCard";
import design from "../assets/images/services/design.svg";
import IT from "../assets/images/services/IT.svg";
import mobile from "../assets/images/services/mobile.svg";
import software from "../assets/images/services/software.svg";
import web from "../assets/images/services/web.svg";

const services = [
  {
    name: "Product Design",
    description:
      "Our expert designers create innovative and user-friendly product interfaces that drive engagement and customer satisfaction.",
    image: design,
    link: "./projects/designs",
  },
  {
    name: "Website Development",
    description:
      "We design and develop responsive, visually appealing websites that showcase your brand and engage your audience.",
    image: web,
    link: "./projects/websites",
  },
  {
    name: "Mobile App Development",
    description:
      "Build native mobile apps for iOS and Android that offer a seamless user experience and drive business growth.",
    image: mobile,
    link: "./projects/mobileapps",
  },
//   {
//     name: "Custom Software Development",
//     description:
//       "Tailor-made software solutions that address your specific business needs and streamline your operations.",
//     image: software,
//     link: "./projects/softwares",
//   },
//   {
//     name: "IT Consultation",
//     description:
//       "Our experienced consultants provide expert advice on technology strategy, implementation, and ongoing support.",
//     image: IT,
//     link: "./projects/IT",
//   },
];

const ServiceSection = () => {
  return (
    <section className="bg-background p-5 md:py-10 md:px-[140px] flex flex-col">
      <div className="service-header flex flex-col md:flex-row md:items-center ">
        <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl mt-2">
          Our Main <span className="text-primary italic">Services</span>
        </h2>
        <div className="flex items-center md:pt-2 text-dark-blue hover:text-primary text-xl">
          <Link href="./Services" className="pl-32 md:pl-5 ">
            See All Services
          </Link>
          <IoIosArrowForward className="ml-2 mt-1.5 " />
        </div>
      </div>
      <div className="service-cards flex flex-wrap justify-around">
        {services.map((service) => (
          <ServiceCard key={service.name} detail={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
