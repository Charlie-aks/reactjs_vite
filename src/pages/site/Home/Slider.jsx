import React, { useState } from "react";

const images = ["/images/slider1.jpg"];

const Slider = () => {
  const [currentIndex] = useState(0);
  return (
    <div
      className="w-full max-w-[1800px] min-h-[400px] md:h-[700px] bg-cover bg-bottom bg-no-repeat mx-auto"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Overlay nội dung */}
      <div className="h-full w-full flex flex-col items-center justify-center text-white text-center px-4 md:px-6 bg-[#1d1f2e]/40 gap-4 md:gap-6">
        <div className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wide">
          Best place to buy design
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest">
          Coffee Mugs
        </div>
        <p className="text-sm sm:text-base md:text-xl tracking-wide max-w-[700px]">
          The most versatile furniture system ever created. Designed to fit your
          life, made to move and grow.
        </p>
        <button
          type="button"
          className="w-[280px] sm:w-[300px] h-[50px] sm:h-[60px] mt-4 sm:mt-6 bg-white text-black px-5 py-2 hover:bg-gray-200 transition text-sm tracking-widest font-medium"
        >
          EXPLORE OUR PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default Slider;
