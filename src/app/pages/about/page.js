import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CiCircleCheck } from "react-icons/ci";
import aboutImg from "../../../assets/images/about/about-img.svg";
import heroImage from "src/assets/images/company/heroImage.png";


const page = () => {
  return <div className="leading-9 pt-32 flex flex-col items-center">
    {/* Restricted width content */}
    <div className="w-[80%]">
      {/* Page Headings */}
      <div className="text-center">
        <h1 className="text-darker-blue text-3xl font-bold capitalize">Driving Innovation with Custom Digital Solutions</h1>
        <p className="text-lighter-blue text-xl font-normal">Empowering businesses with expertly tailored websites, mobile apps, custom software, and IT support services.</p>
      </div>

      {/* Page Image */}
      <div>
        <Image className="" src={heroImage} alt="about-img" />
      </div>

      {/* Company Overview Sections */}
      <div>
        {/* Company Overview */}
        <div>
          <h2>Company Overview</h2>
          <p>At Techspance, we specialize in providing comprehensive digital solutions, including website design and development, mobile app development, custom software solutions, UX design, and IT support. Our focus is on helping businesses leverage the power of technology to achieve their goals, streamline their operations, and enhance their digital presence. We understand that every business is unique, and we tailor our services to meet the specific needs of our clients, ensuring they stay competitive in a rapidly evolving digital world.</p>
        </div>
        {/* Our Mission */}
        <div>
          <h2>Our Mission</h2>
          <p>To deliver innovative, high-quality digital solutions that drive business success.At Techspance, our mission is to bridge the gap between businesses and technology by offering customized digital solutions that help businesses grow, increase efficiency, and stay ahead of their competition. We strive to empower our clients by offering cutting-edge technology solutions tailored specifically to their needs.</p>
        </div>
        {/* Our Vision */}
        <div>
          <h2>Our Vision</h2>
          <p>Creating a future where every business has access to innovative digital solutions to achieve seamless growth and success.We envision a world where businesses of all sizes can easily tap into the latest technologies to enhance their operations and meet their goals. At Techspance, we work tirelessly to make this vision a reality, continually evolving our offerings to align with the most current trends in technology.</p>
        </div>
        {/* Our Values */}
        <div>
          <h2>Our Values</h2>
          <ul>
            <li>
              <div>
                <CiCircleCheck/>
                Innovation
              </div>
              <p>We are committed to staying ahead of technological advancements to provide cutting-edge solutions to our clients.</p>
            </li>
            <li>
              <div>
                <CiCircleCheck/>
                Customer-Centricity
              </div>
              <p>Our clients are at the heart of everything we do. We build solutions that prioritize their needs and goals.</p>
            </li>
            <li>
              <div>
                <CiCircleCheck/>
                Integrity
              </div>
              <p>We maintain transparency, honesty, and trust in every project we undertake.</p>
            </li>
            <li>
              <div>
                <CiCircleCheck/>
                Collaboration
              </div>
              <p>Our team works hand-in-hand with clients to deliver solutions that perfectly align with their objectives.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Techspance Sections */}
      <div>
        {/* Why Choose Techspance */}
        <div>
          <h2>Why Choose Techspance</h2>
          <p>Choosing Techspance means working with a diverse team of experts who are passionate about technology and dedicated to delivering high-quality results. Whether you need a responsive website, a user-friendly mobile app, or custom software to streamline your business processes, we have the skills, knowledge, and experience to bring your vision to life.</p>
          <ul>
            <li>
              <div>
                <CiCircleCheck/>
                Expertise in the Latest Technologies
              </div>
              <p>From web and mobile app development to custom software and IT solutions, we use the most advanced technologies to provide you with state-of-the-art services.</p>
            </li>
            <li>
              <div>
                <CiCircleCheck/>
                Tailored Solutions
              </div>
              <p>We understand that every business has unique needs. That's why we create customized solutions designed specifically for your goals.</p>
            </li>
            <li>
              <div>
                <CiCircleCheck/>
                Client-First Approach
              </div>
              <p>We believe in building long-lasting partnerships with our clients, working closely with you to understand your vision and deliver results that exceed expectations.</p>
            </li>
            <li>
              <div>
                <CiCircleCheck/>
                Proven Track Record
              </div>
              <p>Our portfolio showcases our ability to deliver innovative solutions that drive measurable business results.</p>
            </li>

          </ul>
        </div>

        {/* Brief History */}
        <div>
          <h2>Brief History</h2>
          <p>Techspance was founded with a clear purpose: to fill a critical gap in the tech industry by offering growing businesses, particularly in developing regions, access to premium digital services. Recognizing that many businesses struggle to keep up with the fast-paced changes in technology, Techspance was established to provide a solution—a one-stop-shop for all digital needs, from design and development to IT support.</p>
        </div>
      </div>

    </div>

    {/* Full width content */}
    <div className="w-full">
      <h3>Ready to transform your business with cutting-edge digital solutions?</h3>
      <p>
      Let Techspance help you take the next step. <Link href="../contact">Contact us</Link> today to discover how our services can elevate your business to new heights.  
      </p>
    </div>
    </div>;
};

export default page;
