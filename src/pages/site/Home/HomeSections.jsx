import React from "react";
import { Link } from "react-router-dom";

// Introduce Section Component
export const IntroduceSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="h-auto flex flex-col items-center justify-center py-16 md:py-36"
    >
      <div className="w-full max-w-[1000px] text-center space-y-6 px-4">
        <h2 className="font-karla text-2xl md:text-4xl text-gray-900 px-2 md:px-4">
          Even the all-powerful Pointing has no control about the blind texts.
        </h2>

        <p className="font-karla max-w-[820px] mx-auto text-gray-500 text-opacity-55 text-base md:text-xl leading-relaxed md:leading-loose px-2 md:px-4">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life. One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>

        <p className="text-[#C89F94] hover:text-coffee transition-all underline underline-offset-8 text-base md:text-xl mt-8 md:mt-10">
        <Link to="/about" className="link-hover">Read the full Story</Link>
        </p>
      </div>
    </div>
  );
};

// Get Coffee Section Component
export const GetCoffeeSection = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  return (
    <div className="w-full h-auto ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-6xl w-full mx-auto my-16 px-4 md:px-0 flex flex-col md:flex-row gap-9 items-center"
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <div className="text-gray-500 text-opacity-50 uppercase text-base tracking-wider font-medium">
            Premium Offer
          </div>
          <div className="text-gray-700 text-opacity-50 text-4xl font-medium">
            Get our Coffee Magazine
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-wider">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <button
            type="button"
            className="w-[200px] h-[50px] md:h-[60px] mt-4 bg-[#1d1f2e] text-white hover:opacity-65 transition text-sm tracking-widest font-medium"
          >
            START SHOPPING
          </button>
        </div>

        {/* Images */}
        <div className="w-full md:w-1/2 flex">
          <div className="w-2/3">
            <img
              src={images[0]}
              alt="image1"
              className="object-cover w-[350px] h-[300px] aspect-[1/1]"
            />
          </div>
          <div className="w-1/3 flex flex-col gap-3 justify-between">
            <img
              src={images[1]}
              alt="image2"
              className="object-cover w-full aspect-[4/3]"
            />
            <img
              src={images[2]}
              alt="image3"
              className="object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-3xl font-bold"
        style={{ backgroundImage: "url('/images/paralax.jpg')" }}
      >
      </div>
    </div>
  );
};

// Main HomeSections Component
const HomeSections = () => {
  return (
    <>
      <IntroduceSection />
      <GetCoffeeSection />
    </>
  );
};

export default HomeSections;
