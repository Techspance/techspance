import Link from "next/link";
import Image from "next/image";

import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const DaysPassed = (pastDateString) => {
  const pastDate = new Date(pastDateString);

  const currentDate = new Date();

  const timeDifference = currentDate - pastDate;

  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysPassed;
};

const ArticleCard = ({ article }) => {
  const {
    _id,
    title,
    image,
    time,
    description,
    content,
    number_of_view,
    comments,
    category,
    author,
  } = article;
  return (
    <Link href={`/pages/blog/${_id}`}>
      <div className="article-card flex flex-col md:flex-row w-[320px] md:w-[500px] h-[300px] md:h-[160px]  shadow-2xl my-3 bg-white   rounded-2xl  ">
        <Image
          src={image}
          alt={title}
          width={320}
          height={160}
          className="article-image w-[320px] md:w-[160px] h-[160px] object-cover rounded-t-2xl md:rounded-l-2xl "
        />
        <div className="article-details p-5  flex flex-col justify-between text-dark-blue text-sm">
          <div className=" flex justify-between -mt-3 ">
            <p className="text-lg w-1/2 truncate overflow-ellipsis whitespace-nowrap ">
              {category}
            </p>{" "}
            <p className="flex items-center space-x-3">
              <CiClock2 className="mr-1" />
              {DaysPassed(time)} days ago
            </p>
          </div>
          <h3 className="font-bold text-darker-blue text-lg line-clamp-2 ">
            {title}
          </h3>
          <div className="flex justify-between">
            <p className="flex items-center space-x-3">
              <CiUser />
              By {author}
            </p>
            <div className="flex space-x-5">
              <p className="flex items-center space-x-3">
                <FaRegCommentAlt className="mr-1" />
                {comments.length > 0 ? comments.length : 0}
              </p>
              <p className="flex items-center space-x-3">
                <FaRegEye className="mr-1" />
                {number_of_view < 1000
                  ? number_of_view
                  : `${Math.floor(number_of_view / 1000)} K`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
