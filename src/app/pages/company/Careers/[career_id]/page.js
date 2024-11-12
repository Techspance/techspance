"use client";
import React, { useState, useEffect, use } from "react";
import "./styles.css";
import DOMPurify from "dompurify";

import { data } from "../../../../../Databases/careers";

const localCareersData = data.data;

const Page = ({ params }) => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const id = use(params);
  const career_id = id.career_id;

  const fetchCareers = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://www.techspance.com/api/careers");
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
    }
  };

  // Fetch featuredProjects on component mount
  useEffect(() => {
    fetchCareers();
  }, []);

 return loading ? (
   <h2 className="career-content text-2xl text-darker-blue mx-auto  ">
     Loading...
   </h2>
 ) : (
   <div
     className=" career-content flex flex-col space-y-2 -mb-0  "
     dangerouslySetInnerHTML={{
       __html: DOMPurify.sanitize(
         careers.find((career) => career._id === career_id)?.detail ||
           "career detail not found"
       ),
     }}
   />
 );


};

export default Page;
