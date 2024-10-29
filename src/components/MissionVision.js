import React from "react";
import Image from "next/image";
import Link from "next/link";

import Metrics from "../assets/images/home/Metrics.svg";

const metrics = [
    {
        name: "Projects Done",
        value: "100+"
    },
    {
        name: "Satisfied Clients",
        value: "65"
    },
    {
        name: "Awards Winner",
        value: "12"
    },
    {
        name: "Years of Experience",
        value: "3"
    },
]

const MissionVision = () => {
  return (
    <section className="p-5 md:py-10 md:px-[140px] flex flex-wrap bg-white justify-center md:justify-between ">
      <article className="metrics min-w-[320px] max-w-[400px] relative flex  justify-center items-center ">
        <Image
          src={Metrics}
          alt="metrics"
          className="w-full justify-self-center"
        />

        <div className="size-[120px] bg-darker-blue flex justify-center items-center rounded-full absolute top-3 left-[50%] text-secondary text-sm flex-col text-center ">
          <h4 className="font-bold text-xl text-white ">{metrics[0].value}</h4>
          <p>{metrics[0].name}</p>
        </div>
        <div className="size-[120px] bg-primary flex justify-center items-center rounded-full absolute top-[35%] border-4 z-20 left-[60%] text-secondary text-sm flex-col text-center ">
          <h4 className="font-bold text-xl text-white">{metrics[1].value}</h4>
          <p>{metrics[1].name}</p>
        </div>
        <div className="size-[120px] bg-[#B54BDB] flex justify-center items-center rounded-full absolute top-[55%] bg- left-[40%] text-secondary text-sm flex-col text-center ">
          <h4 className="font-bold text-xl text-white">{metrics[2].value}</h4>
          <p>{metrics[2].name}</p>
        </div>
        <div className="size-[120px] bg-[#8011F0] flex justify-center items-center rounded-full absolute top-[35%] -left-10 text-secondary text-sm flex-col text-center  ">
          <h4 className="font-bold text-xl text-white">{metrics[3].value}</h4>
          <p>{metrics[3].name}</p>
        </div>
      </article>
      <article className="Mission-header min-w-[320px] max-w-[500px] mt-5  ">
        <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl mt-2">
          Techspance's{" "}
          <span className="text-primary italic">Mission & Vision</span>
        </h2>
        <blockquote className="font-bold text-dark-blue text-sm italic my-2">
          "Technology is not a magic wand, but it is a powerful tool."
        </blockquote>
        <p className="text-md my-2 md:pr-10">
          Just as machines reveal their true power when they falter, Techspance
          unlocks the potential of businesses through innovative technology
          solutions. We are the partner of choice for leading enterprises, SMEs,
          and technology challengers, offering custom software development,
          product design, QA, and consultancy services.
        </p>
        <p className="text-md mt-2 mb-2 md:pr-10 pb-4">
          To redefine the boundaries of what is possible in the digital age by
          providing exceptional technology solutions that drive business growth
          and innovations
        </p>
        <Link
          href="./pages/company/about"
          className=" px-12 py-2   bg-primary text-secondary hover:bg-darker-blue hover:text-white rounded-full text-center text-sm "
        >
          More About Us
        </Link>
      </article>
    </section>
  );
};

export default MissionVision;
