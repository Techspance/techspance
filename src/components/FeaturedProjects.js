"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import mobile from "../assets/images/services/mobile.svg";
const FeaturedProjectCard = () => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <article className=" relative rounded-2xl max-size-[320px] flex justify-center">
      <Image
        src={mobile}
        alt={`mobile`}
        className={` size-[320px] rounded-2xl object-cover scale-90 hover:scale-100   transition-all duration-500 `}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      />
      <div
        className={` absolute bottom-0 h-[72px] bg-white py-2 px-5 rounded-2xl w-[90%] ${
          mouseOver ? "  -translate-y-3 opacity-100 " : "hidden opacity-0"
        }  transition-all duration-500 `}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        <Link href="./client/portfolio/id">
          <h3 className="title h-[32px] overflow-hidden text-ellipsis text-xl font-bold font-roboto text-darker-blue ">
            Note Taking App
          </h3>
        </Link>
        <p className="category h-[40px] overflow-hidden text-ellipsis text-lg font-roboto text-dark-blue">
          {" "}
          Mobile Application{" "}
        </p>
      </div>
    </article>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="bg-background p-5 md:py-10 md:px-[140px] flex flex-col space-y-5 justify-center  ">
      <h1 className="text-darker-blue text-2xl md:text-3xl font-bold font-roboto self-start ">
        Our Featured <span className="italic text-primary">Projects</span>
      </h1>
      <div className=" flex flex-wrap justify-center md:justify-between ">
        <FeaturedProjectCard />
        <FeaturedProjectCard />
        <FeaturedProjectCard />
      </div>
    </section>
  );
};

 export default FeaturedProjects;

