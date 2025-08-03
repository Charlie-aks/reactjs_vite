import React from "react";
import ProductCard from "../../../component/ProductCard";
import products from "../../../data/product";


const MoreProduct = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto my-16 px-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mb-12 md:mb-28"
      >
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
        <div className="px-4 text-gray-500 text-opacity-50 uppercase text-base font-medium text-center tracking-widest">
          More Products
        </div>
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center py-9">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mb-12 md:mb-28 mt-10"
      >
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
        <div className=" px-4 text-gray-500 text-opacity-50 uppercase text-base font-medium text-center tracking-widest">
          Buy 2 mugs and get a coffee magazine free
        </div>
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
      </div>
    </div>
  );
};

export default MoreProduct;
