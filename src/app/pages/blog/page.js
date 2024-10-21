'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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

import BlogPaginate from './blogPaginate';

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
  const [blogsData, setBlogsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const url = 'http://localhost:3000/api/blogs'; // Ensure this URL is correct

  const fetchBlogs = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.success) {
        setBlogsData(data.data); // Set the blogs data
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError(error.message); // Set error message
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const popularPosts = [...blogsData]
    .sort((a, b) => b.number_of_view - a.number_of_view)
    .slice(0, 3);

  const DaysPassed = (pastDateString) => {
    const pastDate = new Date(pastDateString);

    const currentDate = new Date();

    const timeDifference = currentDate - pastDate;

    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysPassed;
  };

  const filteredPosts = blogsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="blog-page p-5 md:px-[140px] md:py-10 text-[#0e2f56] bg-background">
      <section className="header-section text-center mt-24 mx-auto w-[650px]">
        <h2 class="font-bold text-2xl my-1">
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

      <section className="recent-posts-slide w-11/12 mx-auto mt-8">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {blogsData.map((blog) => (
            <SwiperSlide
              key={blog._id}
              scrollbar={{ draggable: true }}
              style={{ height: '550px' }}
            >
              <div className="relative h-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-20 left-10 right-10 p-4 bg-[#0000003c] text-white rounded-md">
                  <div className="flex flex-row gap-2 mb-2 text-sm">
                    <h6>{blog.category}</h6>
                    <div className="flex flex-row gap-1">
                      <FaRegClock className="my-auto" /> Posted {DaysPassed(blog.time)} days ago
                    </div>
                  </div>
                  <h3 className="font-bold text-xl">{blog.title}</h3>
                  <p className="text-lg">{blog.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="popular-posts mt-8">
        <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white pb-4 rounded-lg shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded"
              />
              <div className="flex flex-col justify-between p-3 text-sm min-h-[120px]">
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex flex-row justify-between">
                    <div>{post.category}</div>
                    <div className="flex flex-row gap-1">
                      <FaRegClock className="my-auto" />
                      {DaysPassed(post.time)} days ago
                    </div>
                  </div>
                  <h4 className="font-bold">{post.title}</h4>
                </div>
                <div className="flex flex-row justify-between items-center mt-2">
                  <div className="flex flex-row gap-1 my-auto">
                    <FaRegUser /> By {post.author}
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="flex flex-row gap-1 my-auto">
                      <FaRegCommentAlt /> {post.comments.length}
                    </span>
                    <span className="flex flex-row gap-1 my-auto">
                      <FaRegEye /> {post.number_of_view}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="main-page flex flex-col md:flex-row mt-8">
        <main className="main-posts flex-1 md:mr-4">
          <BlogPaginate blogPosts={filteredPosts} />
        </main>

        <aside className="right-side-panel w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <h4 className="font-bold">SEARCH</h4>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <h2 class="font-bold text-xl my-1">
              RECENT
              <span className="text-primary"> POSTS</span>
            </h2>
            <ul>
              {blogsData
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
                .slice(0, 4) // Get the first 4 recent posts
                .map((post, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex flex-row items-center">
                      <img
                        src={post.image} // Use post image or a default image
                        alt={post.title}
                        className="w-14 h-14 object-cover rounded"
                      />
                      <div className="ml-2">
                        <h4 className="text-sm font-bold">{post.title}</h4>
                        <p className="text-xs">{post.category}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Categories</h4>
            <ul>
              {[...new Set(blogsData.map((post) => post.category))].map((category, index) => (
                <li
                  key={index}
                  className="py-2"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Newsletter</h4>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default page;
