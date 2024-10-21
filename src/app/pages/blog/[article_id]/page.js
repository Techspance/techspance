"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
import { FaRegEye } from "react-icons/fa6";

import { data } from "../../../../Databases/blogs"; // Importing blog data

const Page = ({ params }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState([]);

  const article_id = params.article_id;
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
    return <div className="pt-32">Loading...</div>;
  }

  if (!article || !article._id) {
    return <div className="pt-32">Article not found</div>;
  }

  return (
    <section className=" p-5 md:px-[140px] md:py-10 bg-white ">
      <div className=" article-hero-section mt-28 w-full mx-auto  ">
        <h1 className=" font-roboto font-bold text-3xl text-darker-blue text-center ">
          {article.title}
        </h1>
        <p className=" flex items-center text-primary text-xl my-5 w-fit mx-auto  ">
          NEWS <span className=" mx-3 text-silver ">|</span>
          <span className=" flex items-center space-x-2 text-base text-dark-blue h-fit my-auto ">
            <FaRegClock className="mr-2" />
            Posted {4} days ago
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
          <div className=" flex text-dark-blue text-lg items-center  ">
            <p className=" flex items-center mr-5 ">
              <FaRegUser /> By {article.author}
            </p>
            <p className=" flex items-center mr-5 ">
              <FaRegCommentAlt /> {article.comments.length} Comments
            </p>
            <p className=" flex items-center mr-5 ">
              <FaRegEye /> {120} Views
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap ">
        <article className=" article max-w-[800px] ">
          <p className="description text-dark-blue text-xl my-4 ">
            {article.description}
          </p>
          <div className="  ">{article.content}</div>
          <div>
            <div>{"tags"}</div>
            <div>SHARE ON </div>
          </div>
        </article>
        <aside className=" side-bar w-[320px] "></aside>
      </div>
      <div className=" related-articles "></div>

      {/* <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-600">
        <FaRegClock /> {new Date(article.publishedAt).toLocaleDateString()}{" "}
        &nbsp;
        <FaRegUser /> {article.author}
      </div>
      <div className="mt-6">{article.content}</div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Related Articles</h2>
        <ul className="mt-4">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((relatedArticle) => (
              <li key={relatedArticle._id} className="mb-2">
                <a
                  href={`/blog/${relatedArticle._id}`}
                  className="text-blue-500"
                >
                  {relatedArticle.title}
                </a>
              </li>
            ))
          ) : (
            <li>No related articles found.</li>
          )}
        </ul>
      </div> */}
    </section>
  );
};

export default Page;
