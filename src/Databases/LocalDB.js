import article1 from '../assets/images/home/article1.svg'
import article2 from '../assets/images/home/article2.svg'
import article3 from '../assets/images/home/article3.svg'

export const blogData = [
  {
    id: 1, // Add unique ID to each article
    title: "The Future of Web Development",
    author: "John Doe",
    content:
      "Web development is rapidly evolving with the introduction of new frameworks and tools...",
    image: article1,
    link: "/blog/the-future-of-web-development",
    daysAgoPosted: 5,
    numberOfComments: 12,
    numberOfViews: 350,
    category: "Web Development",
    featured: true,
    comments: [
      { id: 1, text: "Great article!", author: "Reader1" },
      { id: 2, text: "Very insightful.", author: "Reader2" },
    ],
  },
  {
    id: 2, // Add unique ID to each article
    title: "The Future of Web Development",
    author: "John Doe",
    content:
      "Web development is rapidly evolving with the introduction of new frameworks and tools...",
    image: article2,
    link: "/blog/the-future-of-web-development",
    daysAgoPosted: 5,
    numberOfComments: 12,
    numberOfViews: 350,
    category: "Web Development",
    featured: true,
    comments: [
      { id: 1, text: "Great article!", author: "Reader1" },
      { id: 2, text: "Very insightful.", author: "Reader2" },
    ],
  },
  {
    id: 3,
    title: "Understanding AI & Machine Learning",
    author: "Jane Smith",
    content:
      "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries...",
    image: article3,
    link: "/blog/understanding-ai-machine-learning",
    daysAgoPosted: 3,
    numberOfComments: 25,
    numberOfViews: 590,
    category: "Artificial Intelligence",
    featured: false,
    comments: [{ id: 1, text: "Interesting read!", author: "Reader3" }],
  },
  {
    id: 4,
    title: "Understanding AI & Machine Learning",
    author: "Jane Smith",
    content:
      "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries...",
    image: article1,
    link: "/blog/understanding-ai-machine-learning",
    daysAgoPosted: 3,
    numberOfComments: 25,
    numberOfViews: 590,
    category: "Artificial Intelligence",
    featured: true,
    comments: [{ id: 1, text: "Interesting read!", author: "Reader3" }],
  },
  // Add more blog articles here...
];
