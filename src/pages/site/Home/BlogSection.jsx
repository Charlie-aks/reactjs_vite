import React from "react";

const blogs = [
  {
    title:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    image: "/images/blog1.jpg",
    date: "October 9, 2018",
  },
  {
    title: "How long does a cup of coffee keep you awake?",
    description:
      "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
    image: "/images/blog2.jpg",
    date: "October 9, 2018",
  },
  {
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    image: "/images/blog3.jpg",
    date: "October 11, 2018",
  },
];

const BlogSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] w-full mx-auto my-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mb-10 md:mb-20"
        >
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
          <div className="px-4 text-gray-500 text-opacity-50 uppercase text-sm sm:text-base font-medium text-center tracking-widest">
            Behind the mugs, lifestyle stories
          </div>
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {blogs.map((blog, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="w-full"
            >
              {/* Image with overlay button */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] group overflow-hidden rounded">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:opacity-75"
                />
                <button className="w-[90%] h-12 sm:h-14 md:h-16 absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  read the full story
                </button>
              </div>
              {/* Text content */}
              <div className="mt-4 space-y-2">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 tracking-wide leading-relaxed">
                  {blog.title}
                </p>
                <p className="text-sm sm:text-base text-gray-500 tracking-wide leading-relaxed">
                  {blog.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase mt-2 leading-relaxed">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
