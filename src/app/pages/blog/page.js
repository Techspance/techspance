import React from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import {
  FaRegClock,
  FaRegCommentAlt,
  FaRegUser,
  FaSearch,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";





//icons
{
  /*
  <IoIosArrowBack />
  <IoIosArrowForward />
  <IoIosArrowDown />
  <IoIosArrowUp />
  // <FaRegClock />
  <FaRegEye />
  <FaRegCommentAlt />
  <FaRegUser />
  <FaSearch />
  <FaFacebookF />
  <FaLinkedinIn />
  
  */
}


//blogs api endpoint
const url = "./api/blogs"



const page = () => {
  return (
    <div className="blog-page  p-5 md:px-[140px] md:py-10 bg-background ">
      <section className=" header-section mt-24">blog page</section>
      <section className=" recent-posts-slide "></section>
      <section className=" popular-posts "></section>
      <section className=" main-page  ">
        <main className=" main-posts " ></main>
        <aside className=" right-side-panel " ></aside>
      </section>
    </div>
  );
};

export default page;
