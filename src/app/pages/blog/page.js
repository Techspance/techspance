import React from 'react';
import { blogData } from '../../../Databases/LocalDB';
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

      <section className="recent-posts-slide mt-8">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {blogData?.map((blog) => (
              <div
                key={blog.id}
                className="swiper-slide"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-lg"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{blog.title}</h3>
                  <p className="text-sm">{blog.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      <section className="popular-posts mt-8">
        <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="popular1.jpg"
              alt="Popular Post"
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="font-bold mt-2">Popular Post Title</h4>
            <p className="text-sm">Category: Design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="popular1.jpg"
              alt="Popular Post"
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="font-bold mt-2">Popular Post Title</h4>
            <p className="text-sm">Category: Design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="popular1.jpg"
              alt="Popular Post"
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="font-bold mt-2">Popular Post Title</h4>
            <p className="text-sm">Category: Design</p>
          </div>
        </div>
      </section>

      <section className="main-page flex flex-col md:flex-row mt-8">
        <main className="main-posts flex-1 md:mr-4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <img
              src="main1.jpg"
              alt="Main Post"
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="font-bold mt-2">Main Post Title</h4>
            <p className="text-sm">Category: Technology</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <img
              src="main1.jpg"
              alt="Main Post"
              className="w-full h-48 object-cover rounded"
            />
            <h4 className="font-bold mt-2">Main Post Title</h4>
            <p className="text-sm">Category: Technology</p>
          </div>
        </main>

        <aside className="right-side-panel w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <h4 className="font-bold">Recent Posts</h4>
            <ul>
              <li className="flex items-center justify-between py-2">
                <div className="flex items">
                  <img
                    src="recent1.jpg"
                    alt="Recent Post"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-2">
                    <h4 className="font-bold">How to become a Python developer expert</h4>
                    <p className="text-sm">Category: Development</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items">
                  <img
                    src="recent1.jpg"
                    alt="Recent Post"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-2">
                    <h4 className="font-bold">How to become a Python developer expert</h4>
                    <p className="text-sm">Category: Development</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items">
                  <img
                    src="recent1.jpg"
                    alt="Recent Post"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-2">
                    <h4 className="font-bold">How to become a Python developer expert</h4>
                    <p className="text-sm">Category: Development</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items">
                  <img
                    src="recent1.jpg"
                    alt="Recent Post"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-2">
                    <h4 className="font-bold">How to become a Python developer expert</h4>
                    <p className="text-sm">Category: Development</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Categories</h4>
            <ul>
              <li className="py-2">Design</li>
              <li className="py-2">Development</li>
              <li className="py-2">Technology</li>
              <li className="py-2">Marketing</li>
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
