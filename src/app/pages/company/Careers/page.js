"use client"
import React, {useState, useEffect} from 'react'
import { RiArrowDownWideFill } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";

import FAQSection from '@/components/FAQSection';
import Link from 'next/link'
import {data} from "../../../../Databases/careers"

const localCareersData = data.data

const Page = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  
  // Current Openings, Show more button logic
  const [displayedCount, setDisplayedCount] = useState(3); // Start with 3 displayed
  const [allDisplayed, setAllDisplayed] = useState(false); // 

  // FAQs display/hide content
  const [isVisible, setVisibility] = useState(false);

  const showMore = () => {
    const newCount = displayedCount + 3;
    setDisplayedCount(newCount);
    if (newCount >= careers.length) {
      setAllDisplayed(true); // Hide button when all items are displayed
    }
  };

  const toggleVisibility = (event) => {
    setVisibility(!isVisible)

    const parent = event.target.parentNode;                    // Select parent of button
    const nextSibling = parent.nextElementSibling;

    console.log(nextSibling)
    
  }

  const fetchCareers = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("http://localhost:3000/api/careers");
      // const response = await fetch("https://www.techspance.com/api/careers");
      const data = await response.json();

      if (data.success) {        
        setCareers(data.data);
      } else { 
        console.error("Failed to fetch projects:", data.message);
        setCareers(localCareersData); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setCareers(localCareersData); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished

      // If the total number of careers is <= initial displayedCount, set allDisplayed to true to hide the showMore button
      if (data.data.length <= displayedCount) {
        setAllDisplayed(true);
      }
    }
  };

  // Fetch jobs positions on component mount
  useEffect(() => {
    fetchCareers();
  }, []);

  
  return <div className='pt-32 flex flex-col items-center'>
    {/* Restricted width container */}
    <div className='md:w-[80%] flex flex-col space-y-9 p-7'>
      {/* Heading Section */}
      <div className='flex flex-col items-center space-y-5 p-[20px] py-[40px] md:px-[100px] md:py-[80px] bg-background rounded-2xl text-center'>
        <h1 className="text-darker-blue text-2xl md:text-4xl font-bold capitalize">Join Our Team at Techspance</h1>
        <span className='text-lighter-blue text-md capitalize'>Innovate, Inspire, and Grow with Us</span>
        <p className="md:text-lg">At Techspance, we’re building the future of technology with a team that’s passionate, skilled, and committed to creating impactful solutions. We’re not just a company; we’re a community where your talents will be valued, your ideas heard, and your growth supported.</p>
        <Link className="w-[100%] md:w-[auto] text-lighter-blue text-md border border-primary px-[40px] py-2 rounded-3xl" href="#open-positions">Explore Open Positions</Link>
      </div>

      {/* Our Culture */}
      <div className='flex flex-col md:flex-row md:space-x-20 space-y-5'>
        <div className='flex flex-col space-y-1'>
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Our Culture</h2>
          <span className='text-lighter-blue text-md capitalize'>Empowering Growth, Driving Innovation</span>
          <p>At Techspance, our culture is built on trust, collaboration, and a shared mission to create technology that empowers businesses. We believe in fostering an inclusive environment where everyone’s voice matters. Here, you’ll work with a team that values creativity, respect, and resilience. We invest in your growth through continuous learning opportunities, mentorship, and challenging projects that let you put your skills to work and make a difference.</p>
        </div>
        <div className='p-[15px] py-[15px] leading-7 bg-[#EAEEF2] border-b-[5px] border-[#00000025] shadow-lg rounded-2xl text-lighter-blue'>
          <p>“A Journey of Growth and Innovation”</p>
          <p>"Starting as an intern at Techspance, I felt welcomed and empowered from day one. I’ve grown both technically and professionally, thanks to the supportive team and mentorship here. The collaborative culture inspires me to innovate and continuously learn. Techspance is more than just a workplace; it’s a community where every effort is valued and celebrated."</p>
        </div>
      </div>
      {/* Why Work at Techspance? */}
      <div className='md:w-[75%] flex flex-col space-y-3'>
        <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Why Work at Techspance?</h2>
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
      <div className="flex flex-col space-y-5" id='open-positions'>
        <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Current Openings</h2>
        <p className='text-lighter-blue'>Explore the positions below to see how you can make an impact.</p>
          {loading ? 
          (<span>Loading ...</span>) : 
          /* Grid of three columns */
          (<div className='grid lg:grid-cols-3 grid-flow-row gap-6'>
          {
            careers.slice(0, displayedCount).map((position, i) => {
            // Job card
            return (<div key={i} className='p-[15px] border-[1.5px] border-[#00000025] shadow-lg rounded-2xl flex flex-col space-y-1'>
              <h3 className="text-darker-blue font-bold capitalize">{position.title}</h3>
              <div className='flex space-x-3'>
              <p className='text-sm leading-6'><span className="text-lighter-blue font-bold capitalize">Location: </span>{position.location}</p>
              </div>
              <div className='flex space-x-3'>
              <p className='text-sm leading-6'><span className="text-lighter-blue font-bold capitalize">Employment Type: </span>{position.employment_type}</p>
              </div>
              <div className='flex space-x-3'>
                <p className='text-sm leading-6'><span className="text-lighter-blue font-bold capitalize">Role Summary:</span> {position.summary}</p>
              </div>
            </div>)
          })}
        </div>)
        }
        {        console.log(careers)        }        
        {allDisplayed ? '' : (<button onClick={showMore} className="w-full md:w-[fit-content] self-center text-center bg-primary px-[40px] text-white py-2 rounded-3xl">Show More</button>)}

      </div>
      
      {/* Our Hiring Process */}
      <div className="md:w-[75%] flex flex-col space-y-3">
        <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Our Hiring Process</h2>
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
    <div className="w-full p-7 bg-background">
      <FAQSection />
      
    </div>

    
    
    
    <div className="w-full h-auto bg-primary flex flex-col items-center justify-center space-y-5 px-[10%] py-[5%] text-white text-center text-opacity-90 md:px-[25%]">
      <p className="text-xl font-light">
        Are you ready to take the next step in your career and join a team that values innovation, creativity, and growth? We’d love to hear from you!  
      </p>
      <Link className="w-[100%] md:w-[auto] font-bold border border-white px-[40px] py-2 rounded-3xl" href="#open-positions">View Open Positions</Link>
    </div>

  </div>
}

export default Page