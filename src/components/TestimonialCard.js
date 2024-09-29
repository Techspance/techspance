// TestimonialCard.js
import React from "react";
import Image from "next/image";
import profileimage from "../assets/images/profileimage.svg";

const TestimonialCard = ({ testimonial }) => {
  let { testimonial_text, image, name, title } = testimonial;
  return (
    <article className="t-card w-[320px]  mt-5 flex flex-col p-5 shadow-lg h-[320px]">
      <div className="t-quote h-[90%]">
        <blockquote className="text-md md:text-lg  text-dark-blue ">
        {` "${testimonial_text}" `}
        </blockquote>
      </div>
      <div className="t-info flex space-x-2  ">
        <Image
          src={image || profileimage }
          alt={name}
          className="t-image"
          width={48}
          height={48}
        />
        <div className="t-summary ">
          <h3 className="t-name w-[250px] font-bold text-darker-blue truncate text-clip pr-5 ">{name}</h3>
          <p className="testimonial-title  text-darker-blue text-sm  ">{title}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
