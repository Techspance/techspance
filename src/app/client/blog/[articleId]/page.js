"use client"

import { useRouter } from "next/router";
import { blogData } from "../../../../Databases/LocalDB"; // Importing blog data

const page = ({params}) => {
  // const router = useRouter();
  const id  = params.articleId;

  const article = blogData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div className="pt-32" >Article not found</div>;
  }

  return (
    <div className=" pt-32">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
      <p className="text-gray-600 mt-2">By {article.author}</p>
      <p className="text-sm text-gray-500 mt-1">
        {article.daysAgoPosted} days ago
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {article.numberOfViews} views
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {article.numberOfComments} comments
      </p>

      <div className="content mt-4">
        <p>{article.content}</p>
      </div>

      <div className="comments-section mt-6">
        <h3 className="text-xl font-bold">Comments</h3>
        <ul className="mt-2">
          {article.comments.map((comment) => (
            <li key={comment.id} className="border-b py-2">
              <p className="text-sm">
                <strong>{comment.author}:</strong> {comment.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
