// TestimonialCard.js
import React from "react";


const TestimonialCard = ({ testimonial }) => {
  let { testimonial_content, client, project_name } = testimonial;
  return (
    <article className="t-card w-[320px]  mt-5 flex flex-col p-5 shadow-xl h-[300px] rounded-xl bg-white relative">
      <p className="absolute left-0 top-0 bg-primary size-10 text-5xl       text-white rounded-tl-xl rounded-br-xl font-serif flex place-content-center pt-2 ">
        “
      </p>
      <div className="t-quote h-[90%]">
        <blockquote className="text-lg  text-dark-blue mt-6 overflow-ellipsis  ">
          {testimonial_content}
        </blockquote>
      </div>
      <div className="t-info flex space-x-2  ">
        <div className="t-summary ">
          <h3 className="t-name w-[250px] font-bold text-darker-blue overflow-hidden truncate text-clip pr-5 text-xl ">
            {client}
          </h3>
          <p className="testimonial-title  text-darker-blue overflow-hidden ">
            {project_name}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
