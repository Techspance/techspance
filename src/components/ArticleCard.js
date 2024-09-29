import Link from "next/link";
import Image from "next/image";

import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const ArticleCard = ({ article }) => {
  const {
    id,
    title,
    image,
    daysAgoPosted,
    numberOfViews,
    numberOfComments,
    category,
    author,
  } = article;
  return (
    <Link href={`/client/blog/${id}`}>
      <div className="article-card flex flex-col md:flex-row w-[320px] md:w-[500px] h-[300px] md:h-[160px]  shadow-lg my-3 bg-white   rounded-xl  ">
        <Image
          src={image}
          alt={title}
          className="article-image w-[320px] md:w-[160px] h-[160px] object-cover rounded-xl"
        />
        <div className="article-details p-5 h-[160px] flex flex-col justify-between text-dark-blue text-sm">
          <div className=" flex justify-between ">
            <p className="text-lg">{category}</p>{" "}
            <p className="flex items-center space-x-3">
              <CiClock2 />
              {daysAgoPosted}
              days ago
            </p>
          </div>
          <h3 className="font-bold text-darker-blue text-lg h-[56px] overflow-y-hidden text-ellipsis ">
            {title}
          </h3>
          <div className="flex justify-between">
            <p className="flex items-center space-x-3">
              <CiUser />
              By {author}
            </p>
            <div className="flex space-x-5">
              <p className="flex items-center space-x-3">
                <FaRegCommentAlt />
                {numberOfComments}
              </p>
              <p className="flex items-center space-x-3">
                <FaRegEye />
                {numberOfViews}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
