import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CiCircleCheck } from "react-icons/ci";
import heroImage from "src/assets/images/company/heroImage.png";


const page = () => {
  return <div className="pt-32 flex flex-col space-y-7 items-center">
    {/* Restricted width content */}
    <div className="w-[80%] flex flex-col space-y-7 ">
      {/* Page Headings */}
      <div className="flex flex-col space-y-5 text-center md:px-[10%]">
        <h1 className="text-darker-blue text-2xl md:text-3xl font-bold capitalize">Driving Innovation with Custom Digital Solutions</h1>
        <p className="text-lighter-blue text-xl md:text-2xl font-normal">Empowering businesses with expertly tailored websites, mobile apps, custom software, and IT support services.</p>
      </div>

      {/* Page Image */}
      <div>
        <Image className="" src={heroImage} alt="about-img" />
      </div>

      {/* Company Overview Sections */}
      <div className="flex flex-col space-y-5">
        {/* Company Overview */}
        <div className="flex flex-col space-y-2 leading-9">
          <h2 className="text-darker-blue text-3xl font-bold capitalize">Company <span className="text-primary">Overview</span></h2>
          <p className="text-xl font-medium">At Techspance, we specialize in providing comprehensive digital solutions, including website design and development, mobile app development, custom software solutions, UX design, and IT support. Our focus is on helping businesses leverage the power of technology to achieve their goals, streamline their operations, and enhance their digital presence. We understand that every business is unique, and we tailor our services to meet the specific needs of our clients, ensuring they stay competitive in a rapidly evolving digital world.</p>
        </div>
        {/* Our Mission */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-darker-blue text-3xl font-bold capitalize">Our <span className="text-primary">Mission</span></h2>
          <p className="text-l font-medium">To deliver innovative, high-quality digital solutions that drive business success.At Techspance, our mission is to bridge the gap between businesses and technology by offering customized digital solutions that help businesses grow, increase efficiency, and stay ahead of their competition. We strive to empower our clients by offering cutting-edge technology solutions tailored specifically to their needs.</p>
        </div>
        {/* Our Vision */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-darker-blue text-3xl font-bold capitalize">Our <span className="text-primary">Vision</span></h2>
          <p className="text-l font-medium">Creating a future where every business has access to innovative digital solutions to achieve seamless growth and success.We envision a world where businesses of all sizes can easily tap into the latest technologies to enhance their operations and meet their goals. At Techspance, we work tirelessly to make this vision a reality, continually evolving our offerings to align with the most current trends in technology.</p>
        </div>
        {/* Our Values */}
        <div className="flex flex-col space-y-2"> 
          <h2 className="text-darker-blue text-3xl font-bold capitalize">Our <span className="text-primary">Values</span></h2>
          <ul className="flex flex-col space-y-5">
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Innovation</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">We are committed to staying ahead of technological advancements to provide cutting-edge solutions to our clients.</p>
            </li>
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Customer-Centricity</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">Our clients are at the heart of everything we do. We build solutions that prioritize their needs and goals.</p>
            </li>
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Integrity</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">We maintain transparency, honesty, and trust in every project we undertake.</p>
            </li>
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Collaboration</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">Our team works hand-in-hand with clients to deliver solutions that perfectly align with their objectives.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Techspance Sections */}
      <div className="flex flex-col space-y-5">
        {/* Why Choose Techspance */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-darker-blue text-3xl font-bold capitalize">Why Choose <span className="text-primary">Techspance</span></h2>
          <p className="text-xl font-medium">Choosing Techspance means working with a diverse team of experts who are passionate about technology and dedicated to delivering high-quality results. Whether you need a responsive website, a user-friendly mobile app, or custom software to streamline your business processes, we have the skills, knowledge, and experience to bring your vision to life.</p>
          <ul className="flex flex-col space-y-5">
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Expertise in the Latest Technologies</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">From web and mobile app development to custom software and IT solutions, we use the most advanced technologies to provide you with state-of-the-art services.</p>
            </li>
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Tailored Solutions</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">We understand that every business has unique needs. That's why we create customized solutions designed specifically for your goals.</p>
            </li>
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Client-First Approach</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">We believe in building long-lasting partnerships with our clients, working closely with you to understand your vision and deliver results that exceed expectations.</p>
            </li>
            <li>
              <div className="flex space-x-3 items-center text-lighter-blue text-xl">
                <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
                <h5>Proven Track Record</h5>
              </div>
              <p className="text-l font-medium pl-[32px]">Our portfolio showcases our ability to deliver innovative solutions that drive measurable business results.</p>
            </li>

          </ul>
        </div>

        {/* Brief History */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-darker-blue text-3xl font-bold capitalize">Brief <span className="text-primary">History</span></h2>
          <p className="text-l font-medium">Techspance was founded with a clear purpose: to fill a critical gap in the tech industry by offering growing businesses, particularly in developing regions, access to premium digital services. Recognizing that many businesses struggle to keep up with the fast-paced changes in technology, Techspance was established to provide a solution—a one-stop-shop for all digital needs, from design and development to IT support.</p>
        </div>
      </div>

    </div>

    {/* Full width content */}
    <div className="w-full h-auto bg-primary flex flex-col items-center justify-center space-y-5 px-[10%] py-[1.66rem] text-white text-center text-opacity-90 md:px-[25%]">
      <h3 className="text-2xl font-bold capitalize">Ready to transform your business with cutting-edge digital solutions?</h3>
      <p className="text-xl font-light">
      Let Techspance help you take the next step. <Link className="font-bold" href="../contact">Contact us</Link> today to discover how our services can elevate your business to new heights.  
      </p>
    </div>
    </div>;
};

export default page;
