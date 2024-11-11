"use client";
import React, { useState, useEffect, use } from "react";
import "./styles.css"
import Image from "next/image";
import DOMPurify from "dompurify";
import Link from "next/link";
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
import { FaRegEye, FaXTwitter } from "react-icons/fa6";

import { data } from "../../../../Databases/blogs"; // Importing blog data

//import {sideBar} from "../page"

const DaysPassed = (pastDateString) => {
  const pastDate = new Date(pastDateString);

  const currentDate = new Date();

  const timeDifference = currentDate - pastDate;

  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysPassed;
};

const Page = ({ params }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedArticleIndex, setRelatedArticleIndex] = useState(0);
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    console.log("Comment:", formData.comment);
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);

    // Optionally reset the form
    setFormData({
      comment: "",
      name: "",
      email: "",
    });
  };

  const id  = use(params);
  const article_id = id.article_id;

  const blogs = data.data;

  useEffect(() => {
    // Find the specific article by id
    const articleIndex = blogs.findIndex(
      (article) => article._id === article_id
    );
    const foundArticle = blogs[articleIndex];

    if (foundArticle) {
      setArticle(foundArticle);
      setIsLoading(false);

      // Find related articles
      const related = blogs
        .filter((blog) => blog.category === foundArticle.category) // Filter by category
        .filter((blog) => blog._id !== foundArticle._id); // Exclude the current article
      setRelatedArticles(related);
    }
  }, [article_id, blogs]);

  if (isLoading) {
    return (
      <div className="pt-32 flex justify-center items-center ">
        <p className=" h-10 text-2xl text-darker-blue  animate-pulse ">
          Loading...
        </p>
      </div>
    );
  }

  if (!article || !article._id) {
    return <div className="pt-32">Article not found</div>;
  }

  return (
    <section className=" p-5 md:px-[100px] md:py-10 bg-white ">
      <div className=" article-hero-section mt-28 w-full mx-auto  ">
        <h1 className=" font-roboto font-bold text-3xl text-darker-blue text-center ">
          {article.title}
        </h1>
        <p className=" flex items-center text-primary text-xl my-5 w-fit mx-auto  ">
          {article.category} <span className=" mx-3 text-silver ">|</span>
          <span className=" flex items-center space-x-2 text-base text-dark-blue h-fit my-auto ">
            <FaRegClock className="mr-2" />
            Posted {DaysPassed(article.time)} days ago
          </span>
        </p>
        <div className="w-fit mx-auto  ">
          <Image
            src={article.image}
            alt="article image"
            width={800}
            height={500}
            className=" w-auto h-auto rounded-2xl mx-auto my-3  "
          />
          <div className=" flex text-dark-blue text-sm items-center  ">
            <p className=" flex items-center mr-5 ">
              <FaRegUser className="mr-1" /> By {article.author}
            </p>
            <p className=" flex items-center mr-5 ">
              <FaRegCommentAlt className="mr-1" />{" "}
              {article.comments.length > 0 ? article.comments.length : 0}{" "}
              Comments
            </p>
            <p className=" flex items-center mr-5 ">
              <FaRegEye className="mr-1" />{" "}
              {article.number_of_view < 1000
                ? article.number_of_view
                : `${Math.floor(article.number_of_view / 1000)} K`}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-between ">
        <article className=" article  max-w-[800px]">
          <p className="description text-dark-blue text-xl my-4 ">
            {article.description}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.content),
            }}
            className=" article-content flex flex-col space-y-2 -mb-0  "
          ></div>
          <div className="">
            <div className=" flex flex-wrap  justify-between items-center   ">
              <ul className=" flex flex-wrap   ">
                {article.tags &&
                  article.tags.map((tag, index) => (
                    <li
                      key={index}
                      className=" bg-background text-lighter-blue py-1 px-2 m-1 rounded-lg shadow-lg "
                    >
                      {tag}
                    </li>
                  ))}
              </ul>

              <div className=" flex items-center text-dark-blue ml-3 ">
                SHARE ON{" "}
                <span className=" flex ">
                  <Link
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 "
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    target="_blank" 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 "
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link target="_blank" 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    className=" bg-background my-2 mx-1 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 "
                  >
                    <FaXTwitter />
                  </Link>
                </span>{" "}
              </div>
            </div>
          </div>

          {article.comments.length >= 1 ? (
            <section className=" comments mt-5 ">
              <h2 className=" font-roboto font-bold text-2xl mt-3 mb-2 text-darker-blue ">
                Comments
              </h2>
              <div className=" max-h-[800px] overflow-auto scrollbar-hide ">
                {article.comments.map((comDetail, index) => {
                  const { author, comment, date } = comDetail;

                  return (
                    <div
                      key={index}
                      className=" min-w-[320px] max-w-[600px] p-5 first:bg-background rounded-xl shadow-xl mb-5   "
                    >
                      <div className=" bg-primary text-xl size-[40px] flex justify-center items-center text-white font-bold rounded-full mb-2  ">
                        {index + 1}
                      </div>
                      <h3 className=" font-roboto text-darker-blue text-xl font-bold mb-2 ">
                        {author || `Anonymous`}
                      </h3>
                      <p className=" text-lg text-dark-blue mb-3 ">{date}</p>
                      <p className=" h-[150px] overflow-auto scrollbar-hide ">
                        {comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}
          <section className="leave a comment max-w-[600px] ">
            <h2 className=" font-bold font-roboto text-2xl text-darker-blue pt-5 my-2  ">
              Leave A Comment
            </h2>
            <form
              onSubmit={handleSubmit}
              className=" my-5 w-full flex flex-col  "
            >
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Write your comment..."
                required
                className=" w-full p-2  outline-none border-2 border-silver hover:border-darker-blue focus:border-primary rounded-xl h-[150px]  mb-2  "
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name (optional)"
                className="w-full p-2  outline-none border-2 border-silver hover:border-darker-blue focus:border-primary rounded-xl h-[40px] mb-2   "
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (optional)"
                className=" w-full p-2  outline-none border-2 border-silver hover:border-darker-blue focus:border-primary rounded-xl h-[40px]  mb-2 "
              />
              <button
                type="submit"
                className=" text-dark-blue border-2 border-dark-blue rounded-full w-[300px] py-1 mx-auto hover:bg-primary hover:text-white transition-all duration-300 hover:border-primary mt-3 "
              >
                Submit Comment
              </button>
            </form>
          </section>
        </article>
        {/* <sideBar /> */}
        {/* <aside className=" side-bar w-[320px] self-center   bg-primary h-[600px] "></aside> */}
      </div>
      {relatedArticles.length >= 1 ? (
        <div className=" related-articles bg-background -mx-5 md:-mx-[100px]  p-5 md:px-[100px]  flex-1  justify-center -mb-5 md:-mb-10 ">
          <div className="  flex justify-center items-center w-full mx-auto space-x-10 my-5   ">
            <button
              onClick={() => {
                setRelatedArticleIndex(
                  (prev) =>
                    (prev - 1 + relatedArticles.length) % relatedArticles.length
                );
              }}
              className=" flex justify-center items-center bg-white text-primary hover:bg-primary hover:text-white rounded-full p-2 text-2xl transition-all duration-300  "
            >
              <IoIosArrowBack />
            </button>
            <h2 className=" font-roboto font-bold text-3xl text-darker-blue ">
              Related <span className="text-primary">Posts</span>
            </h2>
            <button
              onClick={() => {
                setRelatedArticleIndex(
                  (prev) => (prev + 1) % relatedArticles.length
                );
              }}
              className=" flex justify-center items-center bg-white text-primary hover:bg-primary hover:text-white rounded-full p-2 text-2xl transition-all duration-300 "
            >
              <IoIosArrowForward />
            </button>
          </div>
          <section className=" article-cards flex justify-center min-w-[320px]   h-[430px] overflow-y-hidden overflow-x-auto snap-x snap-mandatory transition-all duration-1000 scrollbar-hide ">
            {relatedArticles
              .slice(relatedArticleIndex, relatedArticleIndex + 3)
              .map((relatedArticle, index) => (
                <ArticleCard article={relatedArticle} key={index} />
              ))}
          </section>
        </div>
      ) : null}
    </section>
  );
};

const ArticleCard = ({ article }) => {
  const {
    _id,
    image,
    category,
    time,
    title,
    description,
    author,
    number_of_view,
    comments,
  } = article;

  return (
    <article className=" min-w-[320px] w-[320px] h-[400px]  bg-white rounded-2xl shadow-2xl mb-5 mr-5 snap-center ">
      <Image
        src={image}
        width={320}
        height={200}
        alt={`image of the ${title}`}
        className=" w-full h-[200px] rounded-2xl "
      />
      <div className="px-5 pt-2 text-dark-blue ">
        <div className=" flex justify-between items-center  ">
          <p className=" text-lg -mt-2 ">{category}</p>
          <span className=" flex items-center space-x-1 ">
            {" "}
            <FaRegClock className="mr-1" /> {DaysPassed(time)} days ago
          </span>
        </div>
        <h3 className=" font-roboto font-bold text-xl text-darker-blue line-clamp-2 mb-1 hover:text-primary ">
          <Link href={`/pages/blog/${_id}`}>{title}</Link>
        </h3>
        <p className=" line-clamp-3 mb-1">{description}</p>
        <div className=" flex justify-between items-center text-sm ">
          <div className=" flex items-center  w-2/3 space-x-1  ">
            <FaRegClock className="mr-1" /> By{" "}
            <p className="truncate overflow-ellipsis whitespace-nowrap ">
              {author}
            </p>
          </div>
          <div className=" flex justify-between items-center -ml-2  ">
            <div className="flex items-center  ">
              <FaRegCommentAlt className="mr-1" />{" "}
              {comments.length > 0 ? comments.length : 0}
            </div>
          </div>
          <div className=" flex items-center  ">
            <FaRegEye className="mr-1" />{" "}
            {number_of_view < 1000
              ? number_of_view
              : `${Math.floor(number_of_view / 1000)} K`}
          </div>
        </div>
      </div>
    </article>
  );
};
export default Page;
