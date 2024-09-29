"use client";
import React, { useState } from "react";
import Link from 'next/link'

import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

// <IoIosArrowDown />
{
  /* <IoIosArrowUp />
   */
}

// FAQs data
const faqs = [
  {
    question: "What services does Techspance offer?",
    answer:
      "Techspance offers a wide range of technology services, including custom software development, web design, mobile app development, IT consulting, and tech support.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for a project depends on its complexity and scope. We provide estimates during the initial consultation.",
  },
  {
    question: "How do you ensure the quality of your work?",
    answer:
      "We have a rigorous quality assurance process in place to ensure that our deliverables meet the highest standards. Our team of experienced professionals conducts thorough testing and reviews to identify and address any issues.",
  },
  {
    question:
      "Can you create custom software tailored to my specific business needs?",
    answer:
      "Yes, we specialize in developing custom software solutions that address your unique requirements.",
  },
  {
    question: "What technologies do you use for software development?",
    answer:
      "We utilize a variety of modern programming languages and frameworks, including Python, JavaScript, Java, React, Angular, and Vue.js.",
  },
  {
    question:
      "Can you design a responsive website that looks great on all devices?",
    answer:
      "Yes, we create responsive websites that are optimized for viewing on desktops, tablets, and smartphones.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Technology-header min-w-[320px] max-w-[450px] bg-silver ">
      <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl mb-5 ">
        Techspance's <span className="text-primary italic">FAQs</span>
      </h2>

      <div className="w-full max-w-md  mb-2 flex justify-center flex-wrap  ">
        {faqs.map((faq, index) => (
          <div key={index} className="   shadow ">
            {/* Clickable Question */}
            <button
              onClick={() => handleToggle(index)}
              className={`w-full text-left p-4 font-bold text-darker-blue text-md focus:outline-none flex justify-between items-center border border-collapse ${
                openIndex === index
                  ? "bg-secondary text-lg border-b-0 text-dark-blue"
                  : ""
              } 
              } `}
            >
              {faq.question}
              <span>
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {/* Answer with height transition */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "max-h-40 border border-collapse bg-secondary"
                  : "max-h-0"
              }`}
            >
              <p className=" pl-4 pr-5 pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="./client/company/faqs" className="flex items-center text-dark-blue hover:text-primary text-lg" >
        See More <IoIosArrowForward className="mt-1.5 ml-2" />{" "}
      </Link>
    </div>
  );
};

export default FAQSection;
