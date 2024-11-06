import React, { useState } from 'react';
import { FaRegClock, FaRegCommentAlt, FaRegUser } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';

const BlogPaginate = ({ blogPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const DaysPassed = (pastDateString) => {
    const pastDate = new Date(pastDateString);
    const currentDate = new Date();
    const timeDifference = currentDate - pastDate;
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysPassed;
  };

  return (
    <div className="main-posts flex-1 md:mr-4">
      {currentPosts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-md mb-4"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full md:w-2/5 h-52 object-cover rounded-t md:rounded-none md:rounded-l"
          />
          <div className="flex flex-col justify-between p-4 md:w-3/5">
            <div className="flex flex-row justify-between">
              <div>{post.category}</div>
              <div className="flex flex-row gap-1">
                <FaRegClock className="my-auto" />
                {DaysPassed(post.time)} days ago
              </div>
            </div>
            <div>
              <h4 className="font-bold mt-2">{post.title}</h4>
              <p className="text-sm">
                {post.content.length > 90 ? `${post.content.substring(0, 90)}...` : post.content}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center align-middle mt-2">
              <div className="flex flex-row gap-1">
                <FaRegUser className="my-auto" /> By {post.author}
              </div>
              <div className="flex flex-row gap-2">
                <span className="flex flex-row gap-1">
                  <FaRegCommentAlt className="my-auto" /> {post.comments.length}
                </span>
                <span className="flex flex-row gap-1">
                  <FaRegEye className="my-auto" /> {post.number_of_view}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            onClick={handlePrevious}
            className="px-4 py-2 rounded bg-white text-primary"
          >
            Prev
          </button>
        )}

        <div className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentPage < totalPages && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-white text-primary"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogPaginate;
