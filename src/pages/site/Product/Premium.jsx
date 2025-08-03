import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../component/ProductCard";
import products from "../../../data/product";


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
const PremiumProducts = products.filter(
  (product) => product.category === "premium"
);


const Premium = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-10 md:py-16">
      <div className="text-black text-opacity-50 text-[42px] text-center w-full tracking-wide mt-14">
        Premium
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
        {PremiumProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Premium;
