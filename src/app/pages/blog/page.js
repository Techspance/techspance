import React from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  FaRegClock,
  FaRegCommentAlt,
  FaRegUser,
  FaSearch,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';

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
const url = './api/blogs';

const page = () => {
  return (
    <div className="blog-page  p-5 md:px-[140px] md:py-10 bg-background ">
      <section className="header-section text-center mt-24 mx-auto w-[650px]">
        <h2 className="text-[#0EC2F56] font-bold text-2xl my-1">
          Our
          <span className="text-primary"> Blogs</span>
        </h2>
        <p>
          Dive into the latest trends, expert insights, and industry news that are shaping the
          digital landscape. From cutting-edge web development to the future of mobile applications,
          we provide thought-provoking content to help businesses stay ahead.
        </p>
        <br />
        <p>Stay informed, stay inspired.</p>
      </section>
      <section className=" recent-posts-slide "></section>
      <section className=" popular-posts "></section>
      <section className=" main-page  ">
        <main className=" main-posts "></main>
        <aside className=" right-side-panel "></aside>
      </section>
    </div>
  );
};

export default page;
