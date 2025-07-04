import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "All Products",
  "Coffee Mugs",
  "Orthers",
  "Premium",
  "Tea mugs",
];
const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
const images = [
  "/images/Redlovecup.jpg",
  "/images/Blackteacup.jpg",
  "/images/B&w.jpg",
  "/images/Winterstylemug.jpg",
  "/images/Ceramictea.jpg",
  "/images/Nohandlebarcup.jpg",
  "/images/Espressocup.jpg",
  "/images/GoldenDesignersMug.jpg",
  "/images/Summerdesignercup.jpg",
  "/images/PinkPremiumCeramic.jpg",
  "/images/Whitemug.jpg",
  "/images/whiteceramic.jpg",
  "/images/basicwhitemug.jpg",
  "/images/aromaartcoffeemug.jpg",
  "/images/bluepremiummug.jpg",
];

const products = [
  { name: "Black Tea Cup", price: "$15.00", image: images[1], sale: true },
  {
    name: "Ceramic Tea Mug",
    price: "$18.00 USD",
    image: images[4],
    sale: true,
  },
  {
    name: "White Ceramic",
    price: "$29.00 USD",
    image: images[11],
    sale: false,
  },
];

const TeaMug = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-10 md:py-16">
      <div className="text-black text-opacity-50 text-[42px] text-center w-full tracking-wide mt-14">
        Tea Mugs
      </div>
      <p className="text-center text-gray-700 text-xl tracking-wider my-9">
        However, back over in reality some project schedules and budgets don’t
        allow for web copy to be written before the design phase.
      </p>
      <div className="flex flex-wrap justify-center gap-4 my-16">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${toSlug(category)}`)}
            className="px-7 py-3 border border-[#a25f4b] text-[#a25f4b] text-sm font-medium hover:bg-gray-800 hover:text-white transition-all uppercase tracking-widest"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center py-9">
        {products.map((product, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="relative group w-full max-w-[360px]"
          >
            <div className="relative w-full aspect-[3/4] hover:opacity-65 transition-all duration-500 ease-in-out group-hover:opacity-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer rounded-lg"
              />
              {product.sale && (
                <div className="w-[91px] h-[40px] absolute top-2 right-2 bg-white text-[#9e7569] text-sm font-medium flex items-center justify-center shadow-md rounded">
                  On Sale
                </div>
              )}
              <button className="w-[90%] max-w-[330px] h-[50px] text-xs sm:text-sm md:text-base absolute bottom-4 uppercase left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 font-medium">
                Explore Mug
              </button>
            </div>
            <p className="mt-4 text-base sm:text-lg font-semibold text-center">
              {product.name}
            </p>
            <p className="text-sm sm:text-base text-gray-500 text-center">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaMug;
