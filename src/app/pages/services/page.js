import React from "react";
import Link from "next/link";
import Image from "next/image";

import { LuBadgeCheck } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiDotOutlineLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";

import ServiceCard from "../../../components/ServiceCard";

import design from "../../../assets/images/services/design.svg";
import IT from "../../../assets/images/services/IT.svg";
import mobile from "../../../assets/images/services/mobile.svg";
import software from "../../../assets/images/services/software.svg";
import web from "../../../assets/images/services/web.svg";

import designdetail from "../../../assets/images/services/designdetail.svg";
import ITdetail from "../../../assets/images/services/ITdetail.svg";
import mobiledetail from "../../../assets/images/services/mobiledetail.svg";
import softwaredetail from "../../../assets/images/services/softwaredetail.svg";
import webdetail from "../../../assets/images/services/webdetail.svg";

import thumbsup from "../../../assets/images/services/thumbsup.svg";

const services = [
  {
    name: "Product Design",
    description:
      "Our expert designers create innovative and user-friendly product interfaces that drive engagement and customer satisfaction.",
    image: design,
    link: "./pages/portfolio",
  },
  {
    name: "Website Development",
    description:
      "We design and develop responsive, visually appealing websites that showcase your brand and engage your audience.",
    image: web,
    link: "./pages/portfolio",
  },
  {
    name: "Mobile App Development",
    description:
      "Build native mobile apps for iOS and Android that offer a seamless user experience and drive business growth.",
    image: mobile,
    link: "./pages/portfolio",
  },
  {
    name: "Custom Software Development",
    description:
      "Tailor-made software solutions that address your specific business needs and streamline your operations.",
    image: software,
    link: "./pages/portfolio",
  },
  {
    name: "IT Consultation",
    description:
      "Our experienced consultants provide expert advice on technology strategy, implementation, and ongoing support.",
    image: IT,
    link: "./pages/portfolio",
  },
];

const serviceDetails = [
  {
    name: "A. Product Design",
    image: designdetail,
    offerText:
      "At Techspance, our Product Design services are dedicated to transforming your ideas into intuitive and engaging digital products. We focus on creating exceptional user experiences that align with your business goals.",
    offer: [
      {
        title: "User Experience (UX) Design",
        detail:
          "Crafting user-centric designs that ensure seamless interactions and satisfaction.",
      },
      {
        title: "User Interface (UI) Design",
        detail:
          "Developing visually appealing interfaces that reflect your brand identity.",
      },
      {
        title: "Prototyping & Wireframing",
        detail:
          "Building interactive prototypes and wireframes to visualize the product before development begins.",
      },
      {
        title: "Design Research & Strategy",
        detail:
          "Conducting market and user research to inform design decisions and strategy.",
      },
      {
        title: "Branding & Visual Identity",
        detail:
          "Establishing a cohesive look and feel that resonates with your target audience.",
      },
    ],
    helpText:
      "Our Product Design services help your business in several impactful ways:",
    help: [
      {
        title: "Enhance User Engagement",
        detail:
          "By prioritizing user needs, we create products that users love to interact with, increasing retention and loyalty.",
      },
      {
        title: "Accelerate Time to Market",
        detail:
          "Early prototyping identifies potential issues, streamlining the development process and reducing costs.",
      },
      {
        title: "Boost Conversion Rates",
        detail:
          "Intuitive design leads to better user experiences, resulting in higher conversion and sales rates.",
      },
      {
        title: "Strengthen Brand Identity",
        detail:
          "Consistent and attractive design reinforces your brand, building trust and recognition in the market.",
      },
      {
        title: "Gain Competitive Advantage",
        detail:
          "Innovative and user-friendly designs set you apart from competitors, positioning you as a leader in your industry.",
      },
    ],
    CTA: [
      "Ready to transform your ideas into compelling digital products? ",
      "Contact us today",
      "to explore how our Product Design services can elevate your business.",
    ],
  },
  {
    name: "B. Website Design & Development",
    image: webdetail,
    offerText:
      "At Techspance, we specialize in building modern, responsive websites that serve as the digital face of your business. Our comprehensive Website Design & Development services include:",
    offer: [
      {
        title: "Responsive Web Design",
        detail:
          "Prioritizing user experience and interface design to ensure intuitive navigation and engaging user journeys.",
      },
      {
        title: "UI/UX Design",
        detail:
          "Prioritizing user experience and interface design to ensure intuitive navigation and engaging user journeys.",
      },
      {
        title: "E-commerce Development",
        detail:
          "Building robust online stores with secure payment gateways and personalized shopping experiences.",
      },
      {
        title: "UI/UX Design",
        detail:
          "Prioritizing user experience and interface design to ensure intuitive navigation and engaging user journeys.",
      },
      {
        title: "Content Management Systems (CMS)",
        detail:
          "Integrating scalable and easy-to-manage CMS platforms such as WordPress, Joomla, or custom-built systems.",
      },
      {
        title: "Website Maintenance",
        detail:
          "Providing ongoing support, updates, and optimizations to keep your website running smoothly.",
      },
    ],
    helpText:
      "Our Website Design & Development services empower your business by:",
    help: [
      {
        title: "Increasing Customer Engagement",
        detail:
          "By focusing on user-centric designs, we help improve time spent on your site and overall engagement, translating to more leads and conversions.",
      },
      {
        title: "Improving User Experience",
        detail:
          "Responsive and intuitive designs ensure smooth navigation, keeping users happy and reducing bounce rates.",
      },
      {
        title: "Enhancing Brand Credibility",
        detail:
          "A professionally designed website builds trust with potential customers, showing that your business is reliable and credible.",
      },
      {
        title: "Optimizing for Search Engines (SEO)",
        detail:
          "Our websites are SEO-friendly, ensuring that your business can be easily found by your target audience online.",
      },
      {
        title: "Boosting Sales with E-commerce",
        detail:
          "Custom-built e-commerce platforms increase customer satisfaction and conversions through personalized shopping experiences. ",
      },
    ],
    CTA: [
      "Transform your digital presence with a stunning website",
      "Contact us",
      "to start building a website that drives engagement and success.",
    ],
  },
  {
    name: "C. Mobile App Development",
    image: mobiledetail,
    offerText:
      "Techspance brings your mobile app ideas to life with comprehensive development services for iOS, Android, and cross-platform applications. Our Mobile App Development services include:",
    offer: [
      {
        title: "Native & Cross-Platform Apps",
        detail:
          "Developing high-performance apps for iOS and Android platforms, as well as cross-platform solutions using React Native or Flutter.",
      },
      {
        title: "Prototyping & Wireframing",
        detail:
          "Creating detailed prototypes and wireframes to give you a visual representation of your app before development starts.",
      },
      {
        title: "User-Centered Design",
        detail:
          "Designing intuitive and user-friendly interfaces that keep users engaged and ensure a seamless experience.",
      },
      {
        title: "App Testing & QA",
        detail:
          "Thorough testing to ensure your app is bug-free, secure, and performs optimally across devices.",
      },
      {
        title: "Deployment & Support",
        detail:
          "Assisting with app store deployment and offering ongoing support to keep your app updated and performing efficiently.",
      },
    ],
    helpText: "Our Mobile App Development services help your business grow by:",
    help: [
      {
        title: "Improving Customer Engagement",
        detail:
          "A well-designed app keeps your users connected to your brand, making it easier for them to engage with your services on the go.",
      },
      {
        title: "Streamlining Business Operations",
        detail:
          "Custom apps can automate key processes, saving time and reducing operational costs while improving efficiency.",
      },
      {
        title: "Enhancing Brand Loyalty",
        detail:
          "By offering a seamless, feature-rich app, you can foster stronger customer relationships, increasing retention and loyalty.",
      },
      {
        title: "Increasing Revenue Opportunities",
        detail:
          "Mobile apps can open new revenue streams through in-app purchases, subscriptions, or mobile commerce.",
      },
    ],
    CTA: [
      "Ready to create a mobile experience that drives your business forward?",
      "Get in touch with us",
      "and start building your app today.",
    ],
  },
  {
    name: "D. Custom Software Solutions",
    image: softwaredetail,
    offerText:
      "Techspance delivers powerful custom software solutions designed to address your unique business challenges. We specialize in creating scalable, flexible, and efficient software tailored to meet your specific needs. Our services include:",
    offer: [
      {
        title: "Workflow Automation",
        detail:
          "Streamlining complex business processes with custom automation solutions to save time and reduce manual effort.",
      },
      {
        title: "Enterprise Software Development",
        detail:
          "Building robust enterprise-level software to handle large-scale operations with ease and security.",
      },
      {
        title: "API Integration",
        detail:
          "Seamlessly integrating third-party APIs to extend the functionality of your existing systems.",
      },
      {
        title: "Custom Web Applications",
        detail:
          "Developing web-based applications tailored to your business’s specific operational requirements.",
      },
      {
        title: "Software Maintenance & Support",
        detail:
          "Offering ongoing support and maintenance to ensure your software continues to meet your evolving business needs.",
      },
    ],
    helpText: "Our Custom Software Solutions enhance your business by:",
    help: [
      {
        title: "Boosting Operational Efficiency",
        detail:
          "By automating repetitive tasks and streamlining workflows, custom software can reduce costs and save time.",
      },
      {
        title: "Adapting to Business Growth",
        detail:
          "Custom-built software scales with your business, ensuring you remain agile and competitive as your business evolves.",
      },
      {
        title: "Enhancing Data Management",
        detail:
          "Tailored solutions help you manage data more effectively, ensuring accuracy and facilitating better decision-making.",
      },
      {
        title: "Integrating Seamlessly",
        detail:
          "Our API integrations ensure smooth connectivity between your existing systems and new tools, improving overall functionality.",
      },
      {
        title: "Improving Security & Control",
        detail:
          "With custom software, you get full control over the system’s security, ensuring data protection and compliance with industry standards.",
      },
    ],
    CTA: [
      "Need a solution that fits your business like a glove?",
      "Contact us today",
      "to learn how our custom software can transform your operations.",
    ],
  },
  {
    name: "E. IT Support & Maintenance",
    image: ITdetail,
    offerText:
      "Techspance provides comprehensive IT Support services designed to keep your business running smoothly and efficiently. Our support solutions are proactive, ensuring issues are prevented before they disrupt your operations. Our services include:",
    offer: [
      {
        title: "24/7 Technical Support",
        detail:
          "Round-the-clock support for troubleshooting, system monitoring, and resolving technical issues quickly and effectively.",
      },
      {
        title: "Network & System Maintenance",
        detail:
          "Ensuring your IT infrastructure is secure, stable, and optimized for peak performance.",
      },
      {
        title: "Cloud Management & Support",
        detail:
          "Assisting with cloud-based systems, including storage, migration, and monitoring to ensure your business runs seamlessly.",
      },
      {
        title: "Data Backup & Recovery",
        detail:
          "Providing robust data protection solutions, including automated backups and disaster recovery plans.",
      },
      {
        title: "Cybersecurity Services",
        detail:
          "Protecting your systems from external threats with advanced security measures such as firewalls, anti-virus solutions, and vulnerability assessments.",
      },
    ],
    helpText:
      "Our IT Support & Maintenance services ensure that your business stays operational and secure, providing peace of mind with:",
    help: [
      {
        title: "Minimized Downtime",
        detail:
          "Our proactive support reduces the risk of technical failures, ensuring your systems are always up and running.",
      },
      {
        title: "Enhanced Security",
        detail:
          "We protect your sensitive data and systems from cyber threats, reducing the risk of data breaches.",
      },
      {
        title: "Cost-Efficient IT Management",
        detail:
          "Outsourcing your IT support allows you to focus on core business operations while we handle the technical side.",
      },
      {
        title: "Quick Problem Resolution",
        detail:
          "With 24/7 support, any issues that arise are addressed promptly to minimize disruptions to your business.",
      },
      {
        title: "Scalable Solutions",
        detail:
          "As your business grows, our IT services adapt to meet your changing needs, ensuring long-term success.",
      },
    ],
    CTA: [
      "Looking for reliable IT support?",
      "Get in touch with us",
      "to keep your business running smoothly and securely.",
    ],
  },
];

const choices = [
  {
    title: "Customized Solutions for Your Needs",
    detail:
      "We understand that every business is unique. Our services are tailored to fit your specific requirements, ensuring that the technology we provide aligns perfectly with your goals.",
  },
  {
    title: "Expertise Across Multiple Technologies",
    detail:
      "Our team of experienced professionals specializes in a wide range of technologies—from website and mobile app development to custom software solutions and IT support—making us a one-stop shop for all your tech needs.",
  },
  {
    title: "Future-Proof Your Business",
    detail:
      "We leverage the latest tools and technologies, such as AI, machine learning, and cloud platforms, to help you stay ahead of the competition and future-proof your business.",
  },
  {
    title: "Transparent and Collaborative Process",
    detail:
      "At Techspance, we prioritize collaboration and transparency. We work closely with you throughout the project, keeping you informed and involved to ensure we deliver exactly what you need.",
  },
  {
    title: "Long-Term Partnerships",
    detail:
      "Our focus is on building lasting relationships. We offer continuous support and maintenance services to ensure your systems remain up-to-date and perform optimally as your business evolves.",
  },
  {
    title: "Proven Results",
    detail:
      "With a portfolio of successful projects and satisfied clients, Techspance is trusted to deliver high-quality solutions that drive growth, enhance efficiency, and improve customer engagement.",
  },
];

const processes = [
  {
    title: "1. Discovery & Consultation",
    detail:
      "We begin by understanding your business goals, challenges, and target audience. Through in-depth consultations, we gather the necessary information to tailor solutions that align with your specific needs. This phase involves:",
    list: [
      "Business Analysis: Understanding your objectives and identifying the best technologies to achieve them.",
      "Initial Strategy: Defining project scope, timelines, and resources.",
    ],
  },
  {
    title: "2. Research & Planning",
    detail:
      "In this phase, we dive deep into research to find the most effective strategies and solutions for your project. We work collaboratively with you to finalize the project’s roadmap and ensure all stakeholders are aligned. This stage includes:",
    list: [
      "Competitive Research: Identifying industry trends and opportunities.",
      "Project Blueprint: Outlining detailed project requirements, timelines, and milestones.",
    ],
  },
  {
    title: "3. Design & Prototyping",
    detail:
      "With the research and planning completed, our design team moves on to creating visual prototypes, wireframes, and mockups to bring your ideas to life. This process ensures that your project looks and functions as expected:",
    list: [
      "User-Centered Design: Prioritizing user experience (UX) and user interface (UI) for intuitive and attractive design.",
      "Prototyping & Feedback: Presenting initial designs for review and making necessary adjustments.",
    ],
  },
  {
    title: "4. Development",
    detail:
      "Once the design is approved, our developers start bringing the project to life by coding and implementing the agreed-upon features. This phase is handled by experts in web, mobile, and software development. We ensure:",
    list: [
      "Agile Development: Using an iterative process to adapt and improve throughout the development phase.",
      "Front-End & Back-End Development: Ensuring all elements, from the user interface to the underlying infrastructure, are built to perfection.",
    ],
  },
  {
    title: "5. Testing & Quality Assurance",
    detail:
      "Before launching, we rigorously test your product to identify and resolve any issues. We focus on performance, security, usability, and cross-device compatibility to ensure a seamless experience:",
    list: [
      "Bug Fixing & Optimization: Addressing issues and refining features for optimal performance.",
      "User Acceptance Testing (UAT): Involving you in the final testing process to ensure all requirements are met.",
    ],
  },
  {
    title: "6. Deployment & Launch",
    detail:
      "Once testing is complete, we deploy your product, whether it’s a website, app, or software solution. Our team ensures a smooth launch with minimal disruption:",
    list: [
      "Launch Strategy: Coordinating with you to choose the right time and approach for launch.",
      "Post-Launch Monitoring: Ensuring the product performs well after deployment and making immediate adjustments if needed.",
    ],
  },
  {
    title: "7. Support & Maintenance",
    detail:
      "Our partnership doesn’t end at launch. We offer ongoing support and maintenance services to ensure your product stays updated and runs smoothly. This includes:",
    list: [
      "Regular Updates: Keeping your systems secure and aligned with the latest technology advancements.",
      "Ongoing Support: Offering technical assistance and improvements based on user feedback.",
    ],
  },
];
const Page = () => {
  return (
    <div className="p-5 md:px-[140px] md:py-10 bg-background">
      <section className="page-intro mt-24 mx-auto mb-5">
        <h1 className="font-roboto font-bold text-3xl text-center text-darker-blue mb-5">
          Our Core <span className="text-primary italic">Services</span>
        </h1>
        <p className="max-w-[800px] mx-auto text-xl text-center">
          At Techspance, we offer a full suite of digital solutions tailored to
          meet the unique needs of your business. From cutting-edge websites to
          powerful mobile apps and custom software, we’re committed to helping
          you unlock growth and streamline operations.
        </p>
      </section>
      <section className="service-cards flex flex-wrap justify-evenly mb-5">
        {services.map((service) => (
          <ServiceCard key={service.name} detail={service} />
        ))}
      </section>
      <section className="service-details mt-10">
        {serviceDetails.map((service, index) => {
          const { name, image, offerText, offer, helpText, help, CTA } =
            service;

          return (
            <article key={index}>
              {/* service-detail-header */}
              <div className="service-detail-header">
                <h2 className="font-bold font-roboto text-2xl text-primary mb-5">
                  {name}
                  <hr className="w-full border-t-2 border-t-primary mt-1"></hr>
                </h2>
                <Image
                  src={image}
                  alt={`${name} image`}
                  className="min-w-[320px] sm:w-[500px] md:w-[800px] mx-auto my-5"
                />
              </div>
              {/* service-detail-offer */}
              <div className="service-detail-offer mt-10">
                <div className="flex items-center space-x-2">
                  <Image className="" src={thumbsup} alt="what we offer" />
                  <h3 className="text-xl text-darker-blue font-bold font-roboto">
                    What We Offer
                  </h3>
                </div>
                <p className="text-lg my-2">{offerText}</p>
                <ul className="offer-list">
                  {offer.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col w-full items-start mb-2"
                      >
                        <strong className="flex text-dark-blue text-md items-center mr-1 text-nowrap">
                          <LuBadgeCheck className="mr-2" />
                          {item.title}
                          <span className="hidden md:block ">:</span>
                        </strong>
                        <span className="hidden md:block ml-6">
                          {item.detail}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* service-detail-help */}
              <div className="service-detail-help mt-10">
                <div className="flex  items-center space-x-2">
                  <Image className="" src={thumbsup} alt="how it helps" />
                  <h3 className="text-xl text-darker-blue font-bold font-roboto">
                    How It Helps
                  </h3>
                </div>
                <p className="text-lg my-2">{helpText}</p>
                <ul className="help-list">
                  {help.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col w-full items-start mb-2"
                    >
                      <strong className="flex text-dark-blue text-md items-center mr-1 text-nowrap">
                        <CiStar className="mr-2" />
                        {item.title}
                        <span className="hidden md:block">:</span>
                      </strong>
                      <span className="hidden md:block ml-6">
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* service-detail-CTA */}
              <p className="service-detail-CTA mt-5 text-center max-w-[800px] mx-auto text-lg mb-10">
                {CTA[0]}{" "}
                <Link
                  href="#"
                  className="text-darker-blue hover:text-primary active:text-primary font-semibold"
                >
                  {CTA[1]}
                </Link>{" "}
                {CTA[2]}
              </p>
            </article>
          );
        })}
      </section>
      <section className="why-choose-techspance mt-10">
        <div className="sheader">
          <h3 className="font-bold font-roboto text-2xl text-primary mb-5">
            Why Choose Techspance
            <hr className="w-full border-t-2 border-t-primary mt-1"></hr>
          </h3>
          <p className="text-lg">
            At Techspance, we are committed to delivering innovative and
            scalable solutions that help businesses thrive in the digital era.
            Here’s why Techspance stands out as the perfect technology partner
            for your business:
          </p>
          <ul className="choice-list my-5 ">
            {choices.map((choice, index) => {
              const { title, detail } = choice;
              return (
                <li
                  key={index}
                  className="flex flex-col w-full items-start mb-3"
                >
                  <strong className="flex text-dark-blue text-md items-center mr-1 text-nowrap mb-1">
                    <IoMdCheckmarkCircleOutline className="mr-2" />
                    {title}
                  </strong>
                  <span className="hidden md:block ml-6">{detail}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section id="process" className="processes mt-10">
        <div className="header">
          <h3 className="font-bold font-roboto text-2xl text-primary mb-5">
            Our Process
            <hr className="w-full border-t-2 border-t-primary mt-1"></hr>
          </h3>
          <p className="text-lg">
            At Techspance, we follow a structured yet flexible approach to
            ensure that every project is executed with precision and meets the
            highest standards. Here’s a step-by-step breakdown of our process:
          </p>
          <ul className="processes-list my-5 ">
            {processes.map((process, index) => {
              const { title, detail, list } = process;
              return (
                <li
                  key={index}
                  className="flex flex-col w-full items-start mb-3"
                >
                  <strong className="flex text-dark-blue text-md items-center mr-1 text-nowrap mb-1">
                    {title}
                  </strong>
                  <span className="block ml-6">
                    {detail}
                    {/* nested list */}
                    <ul className="choice-list my-3 ">
                      {list.map((item, index) => {
                        return (
                          <li key={index} className="flex mb-2">
                            <PiDotOutlineLight size={24} className="min-w-10" />
                            <p className=" text-dark-blue block   ">{item}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className=" bottom-section bg-primary -mx-5 md:-mx-[140px] text-white py-10 -mb-10 flex flex-col justify-center ">
        <h2 className="  mx-auto text-center text-2xl mb-5 ">
          Ready to Elevate Your Business?
        </h2>
        <p className=" max-w-[800px] mx-auto text-center text-lg mb-5 px-5 ">
          At Techspance, we’re committed to delivering solutions that drive
          growth and innovation. Whether you need help with product design,
          website development, mobile apps, or custom software, our team is here
          to guide you every step of the way.
        </p>
        <Link
          className="  mx-auto  text-center py-1 px-5 rounded-full hover:bg-dark-blue border-2 border-white hover:border-dark-blue "
          href="./contact"
        >
          Get Started Today
        </Link>
      </section>
    </div>
  );
};

export default Page;
