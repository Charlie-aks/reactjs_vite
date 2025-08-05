import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="text-black text-opacity-50 text-[42px] text-center w-full tracking-wide mt-14">
        Read coffee stories on our Blog
      </div>
      <p className="text-center text-gray-700 text-xl tracking-wider my-4 w-[650px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="flex items-center justify-center w-full mt-28 md:mb-28">
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
        <div className="px-4 text-gray-500 text-opacity-50 uppercase text-base font-medium text-center tracking-widest">
          Featured Posts
        </div>
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
      </div>
    </div>
  );
};

export default Blog;