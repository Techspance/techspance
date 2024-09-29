import React from "react";
import ArticleCard from "./ArticleCard";
import { blogData } from "../Databases/LocalDB"; // Importing blog data
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ArticleSection = () => {
  const featuredArticles = blogData.filter((article) => article.featured);
  return (
    <section className="article-section min-w-[320px] max-w-[500px] pb-5 ">
      <div className="flex items-center flex-col md:flex-row md:space-x-5 ">
        <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl ">
          Techspance's <span className="text-primary italic">Blogs</span>
        </h2>
        <Link
          href="./client/blog"
          className="flex items-center space-x-3 text-dark-blue hover:text-primary text-lg ml-32 md:ml-0 md:mt-1.5"
        >
          All Articles <IoIosArrowForward className="mt-1" />{" "}
        </Link>
      </div>
      <div className="flex justify-center flex-wrap">
        {featuredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
