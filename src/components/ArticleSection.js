import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { blogData } from "../Databases/LocalDB"; // Importing blog data
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import { data } from "../Databases/blogs";

const getRandomData = (data, number) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
};

const localArticles = getRandomData(data.data, 3);

const ArticleSection = () => {
 const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchArticles = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://www.techspance.com/api/blogs");
      const data = await response.json();

      if (data.success) {
        const articles = data.data;
        setFeaturedArticles(getRandomData(articles, 3));
      } else {
        console.error("Failed to fetch projects:", data.message);
        setFeaturedArticles(localArticles); // Fallback to local data
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setFeaturedArticles(localArticles); // Fallback to local data on error
    } finally {
      setLoading(false); // Loading finished
    }
  };

  // Fetch featuredProjects on component mount
  useEffect(() => {
    fetchArticles();
  }, []);

 
  return (
    <section className="article-section min-w-[320px] max-w-[500px] pb-5 ">
      <div className="flex items-center flex-col md:flex-row md:space-x-5 ">
        <h2 className="font-roboto font-bold text-darker-blue text-2xl md:text-3xl ">
          Techspance's <span className="text-primary italic">Blogs</span>
        </h2>
        <Link
          href="./pages/blog"
          className="flex items-center space-x-3 text-dark-blue hover:text-primary text-lg ml-32 md:ml-0 md:mt-1.5"
        >
          All Articles <IoIosArrowForward className="mt-1" />{" "}
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center flex-wrap">
          <div className="article-card flex flex-col md:flex-row w-[320px] md:w-[500px] h-[300px] md:h-[160px]  shadow-2xl my-3 bg-silver animate-pulse   rounded-2xl  "></div>
          <div className="article-card flex flex-col md:flex-row w-[320px] md:w-[500px] h-[300px] md:h-[160px]  shadow-2xl my-3 bg-silver animate-pulse   rounded-2xl  "></div>
          <div className="article-card flex flex-col md:flex-row w-[320px] md:w-[500px] h-[300px] md:h-[160px]  shadow-2xl my-3 bg-silver animate-pulse   rounded-2xl  "></div>
        </div>
      ) : (
        <div className="flex justify-center flex-wrap">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleSection;
