import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import artificial from "../../assets/Images/artificial.jpg";
import cyber from "../../assets/Images/cyber.jpg";
import cloud from "../../assets/Images/cloud.jpg";
import software from "../../assets/Images/software.jpg";
import devops from "../../assets/Images/devops.jpg";
import iot from "../../assets/Images/iot.jpg";
import author from "../../assets/Images/author.jpg";
import { FaArrowLeft, FaArrowRight, FaCloud, FaLock, FaCode, FaMobileAlt } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';

const blogPosts = [
  {
    title: "Understanding the Future of Artificial Intelligence",
    excerpt: "Artificial Intelligence is transforming various industries by enabling smarter decision-making and automation. This blog explores the future of AI and its potential impacts on different sectors.",
    date: "August 1, 2024",
    link: "/blog/ai-future",
    image: artificial,
    tags: ["AI", "Technology", "Future"],
    readTime: "8 min read",
  },
  {
    title: "The Importance of Cybersecurity in the Modern Era",
    excerpt: "With increasing digital threats, cybersecurity has become crucial for protecting sensitive information. Learn about the latest trends and best practices to safeguard your digital assets.",
    date: "July 20, 2024",
    link: "/blog/cybersecurity",
    image: cyber,
    tags: ["Cybersecurity", "IT", "Safety"],
    readTime: "6 min read",
  },
  {
    title: "How Cloud Computing is Revolutionizing IT Infrastructure",
    excerpt: "Cloud computing offers flexibility and scalability that traditional IT infrastructure cannot match. Discover how cloud solutions are changing the way businesses manage their resources.",
    date: "July 10, 2024",
    link: "/blog/cloud-computing",
    image: cloud,
    tags: ["Cloud", "IT", "Infrastructure"],
    readTime: "7 min read",
  },
  {
    title: "The Role of Software Development in Digital Transformation",
    excerpt: "Software development is at the heart of digital transformation, driving innovation and efficiency. Explore how custom software solutions can support your business goals and streamline operations.",
    date: "June 30, 2024",
    link: "/blog/software-development",
    image: software,
    tags: ["Software", "Development", "Digital"],
    readTime: "5 min read",
  },
  {
    title: "DevOps: Bridging the Gap Between Development and Operations",
    excerpt: "DevOps practices enhance collaboration between development and operations teams, leading to faster and more reliable software delivery.",
    date: "June 20, 2024",
    link: "/blog/devops",
    image: devops,
    tags: ["DevOps", "Collaboration", "IT"],
    readTime: "6 min read",
  },
  {
    title: "The Rise of the Internet of Things (IoT)",
    excerpt: "IoT is connecting devices and transforming industries. Learn about the impact of IoT on our daily lives and the future of connected technology.",
    date: "June 10, 2024",
    link: "/blog/iot",
    image: iot,
    tags: ["IoT", "Technology", "Future"],
    readTime: "8 min read",
  },
];

const featuredPost = {
  title: "Featured Post Title",
  excerpt: "This is a featured post that deserves special attention.",
  image: cloud,
  link: "/blog/featured-post",
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedPosts = blogPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-gray-50">
        <div className="relative w-full h-96">
          <img
            src={cloud}
            alt="Blog Background"
            className="object-cover w-full h-full absolute inset-0 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Blog</h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-white">
              Stay updated with the latest insights and trends in technology. Read our blog to learn about emerging technologies, best practices, and more.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-64 bg-gray-100 p-6 lg:sticky lg:top-24">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul>
              <li className="flex items-center mb-3">
                <FaCloud className="mr-2 text-indigo-600" />
                <a href="/category/cloud-computing" className="text-gray-700 hover:text-indigo-600">Cloud Computing</a>
              </li>
              <li className="flex items-center mb-3">
                <FaLock className="mr-2 text-indigo-600" />
                <a href="/category/cybersecurity" className="text-gray-700 hover:text-indigo-600">Cybersecurity</a>
              </li>
              <li className="flex items-center mb-3">
                <FaCode className="mr-2 text-indigo-600" />
                <a href="/category/software-development" className="text-gray-700 hover:text-indigo-600">Software Development</a>
              </li>
              <li className="flex items-center mb-3">
                <AiOutlineCloudServer className="mr-2 text-indigo-600" />
                <a href="/category/devops" className="text-gray-700 hover:text-indigo-600">DevOps</a>
              </li>
              <li className="flex items-center mb-3">
                <FaMobileAlt className="mr-2 text-indigo-600" />
                <a href="/category/iot" className="text-gray-700 hover:text-indigo-600">IoT</a>
              </li>
            </ul>
          </aside>

          <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:ml-8">
            {/* Featured Post Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Post</h2>
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <a
                    href={featuredPost.link}
                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 relative z-10 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-2 py-1 rounded border border-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center mb-4">
                      <img src={author} alt="Author" className="w-10 h-10 rounded-full mr-3" />
                      <span className="text-gray-700">by Author Name</span>
                    </div>
                    <a
                      href={post.link}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
              >
                <FaArrowLeft className="mr-2" />
                Previous
              </button>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
              >
                Next
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </main>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-indigo-600 text-white py-12 mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-4">Want to Learn More?</h3>
          <p className="text-lg mb-6">
            Dive deeper into the world of technology and stay ahead of the curve. Explore our latest posts and gain valuable insights.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-br from-white to-gray-200 text-indigo-600 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
