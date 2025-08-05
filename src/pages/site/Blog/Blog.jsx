import React from "react";
import { Link } from "react-router-dom";
import blogs, { categories, authors } from "../../../data/blogs";

const Blog = () => {
  const featuredPosts = blogs.filter(blog => blog.featured);
  const latestPosts = blogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-black text-opacity-50 text-[42px] text-center w-full tracking-wide">
          Read coffee stories on our Blog
        </div>
        <p className="text-center text-gray-700 text-xl tracking-wider my-4 max-w-[650px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      {/* Featured Posts Section */}
      <div className="container mx-auto px-4 mb-20 ">
        <div className="flex items-center justify-center w-full mb-16">
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
          <div className="px-4 text-gray-500 text-opacity-50 uppercase text-sm font-medium text-center tracking-widest">
            Featured Posts
          </div>
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="w-[90%] h-12 sm:h-14 md:h-16 absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  read the full story
                </button>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 leading-relaxed group-hover:text-coffee transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-gray-400 text-xs tracking-widest uppercase">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Posts and Sidebar */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Latest Posts - Left Side */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Latest Posts</h2>
            
            <div className="space-y-8">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="flex gap-6 group cursor-pointer block"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-[260px] h-[210px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-coffee transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="text-gray-400 text-xs tracking-widest uppercase">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-12">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">About Us</h3>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">CoffeeStyle.</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim 
                  in eros elementum tristique.
                </p>
                <a href="/about" className="text-coffee text-sm hover:underline">
                  Read the full Story
                </a>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 hover:text-coffee cursor-pointer transition-colors">
                      {category.name}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authors */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Authors</h3>
              <div className="space-y-4">
                {authors.map((author, index) => (
                  <div key={index} className="flex items-center gap-3 group cursor-pointer">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-gray-800 text-sm font-medium group-hover:text-coffee transition-colors">
                        {author.name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {author.postsCount} posts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
