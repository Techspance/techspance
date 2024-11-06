"use client"
import React, {useState, useEffect} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link'
import {data} from "../../../../Databases/careers"

const localCareersData = data.data

const Page = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchCareers = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("http://localhost:3000/api/careers");
      // const response = await fetch("https://www.techspance.com/api/careers");
      const data = await response.json();

      if (data.success) {
        
        setCareers(data.data);
        console.log(data)
      } else {
        console.error("Failed to fetch projects:", data.message);
        setCareers(localCareersData); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setCareers(localCareersData); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished
    }
  };

  // Fetch featuredProjects on component mount
  useEffect(() => {
    fetchCareers();
  }, []);

  return <div>
    {/* Restricted width container */}
    <div className='w-[80%] flex flex-col items-center'>
      {/* Heading Section */}
      <div className='flex flex-col items-center'>
        <h1>Join Our Team at Techspance</h1>
        <span>Innovate, Inspire, and Grow with Us</span>
        <p>At Techspance, we’re building the future of technology with a team that’s passionate, skilled, and committed to creating impactful solutions. We’re not just a company; we’re a community where your talents will be valued, your ideas heard, and your growth supported.</p>
        <Link className="font-bold border border-white px-[40px] py-2 rounded-3xl" href="#open-positions">Explore Open Positions</Link>
      </div>
      {/* Our Culture */}
      <div>
        <div>
          <h2>Our Culture</h2>
          <span>Empowering Growth, Driving Innovation</span>
          <p>At Techspance, our culture is built on trust, collaboration, and a shared mission to create technology that empowers businesses. We believe in fostering an inclusive environment where everyone’s voice matters. Here, you’ll work with a team that values creativity, respect, and resilience. We invest in your growth through continuous learning opportunities, mentorship, and challenging projects that let you put your skills to work and make a difference.</p>
        </div>
        <div>
          <p>“A Journey of Growth and Innovation”</p>
          <p>"Starting as an intern at Techspance, I felt welcomed and empowered from day one. I’ve grown both technically and professionally, thanks to the supportive team and mentorship here. The collaborative culture inspires me to innovate and continuously learn. Techspance is more than just a workplace; it’s a community where every effort is valued and celebrated."</p>
        </div>
      </div>
      {/* Why Work at Techspance? */}
      <div>
        <h2>Why Work at Techspance?</h2>
        <ul className="flex flex-col space-y-5">
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Professional Development</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">We’re committed to helping you grow, offering access to workshops, industry resources, and skill-development programs.</p>
          </li>
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Flexible Work Options</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">Many of our roles support remote work or flexible hours to suit diverse needs.</p>
          </li>
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Collaborative Projects</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">Join forces with top talent on cross-functional teams to solve real-world problems and create innovative solutions.</p>
          </li>
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Inclusive Environment</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">At Techspance, we celebrate diversity, equity, and inclusivity, ensuring that every voice contributes to our shared success.</p>
          </li>
        </ul>
      </div>
      {/* Current Openings */}
      <div id='open-positions'>
        <h2>Current Openings</h2>
        <p>Explore the positions below to see how you can make an impact.</p>
        <div>
          <div></div>
        </div>
      </div>
      {/* Our Hiring Process */}
      <div>
        <h2>Our Hiring Process</h2>
        <p>We’ve designed our hiring process to be clear, supportive, and efficient.</p>
        <ul className="flex flex-col space-y-5">
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Application Submission</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">Submit your Resume, cover letter, and any relevant portfolio samples.</p>
          </li>
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Initial Screening</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">We’ll review your application and reach out if your background matches our needs.</p>
          </li>
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Interviews</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">Participate in interviews to discuss your skills, experience, and alignment with our culture.</p>
          </li>
          <li>
            <div className="flex space-x-3 items-center text-lighter-blue text-xl">
              <CiCircleCheck style={{ strokeWidth: 0.8 }} size={20}/>
              <h5>Offer</h5>
            </div>
            <p className="text-l font-medium pl-[32px]">If you’re a match, we’ll extend an offer and outline next steps for joining our team.</p>
          </li>
        </ul>
      </div>
    </div>
    
    {/* Full width content */}

    {/* FAQs */}
    <div>
      <h2>FAQS</h2>

      <div>
        <div>
          <h5>Does Techspance offer remote work opportunities?</h5>
          <IoIosArrowDown />
        </div>
        <div>
          <h5>What career growth opportunities does Techspance provide?</h5>
          <IoIosArrowDown />
        </div>
        <div>
          <h5>How long does the recruitment process usually take?</h5>
          <IoIosArrowDown />
        </div>
        <div>
          <h5>What kind of projects will I work on?</h5>
          <IoIosArrowDown />
        </div>
      </div>
      <Link>See More</Link>
    </div>
    
    
    
    <div className="w-full h-auto bg-primary flex flex-col items-center justify-center space-y-5 px-[10%] py-[1.66rem] text-white text-center text-opacity-90 md:px-[25%]">
      <h3 className="text-2xl font-bold capitalize">Ready to transform your business with cutting-edge digital solutions?</h3>
      <p className="text-xl font-light">
        Are you ready to take the next step in your career and join a team that values innovation, creativity, and growth? We’d love to hear from you!  
      </p>
      <Link className="font-bold border border-white px-[40px] py-2 rounded-3xl" href="#open-positions">View Open Positions</Link>
    </div>;
  </div>
}

export default Page