import React from "react";
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const GetourCoffee = () => {
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

export default GetourCoffee;
