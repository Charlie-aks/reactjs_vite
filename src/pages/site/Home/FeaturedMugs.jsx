import React from "react";

const products = [
  {
    name: "Pink Premium Ceramic",
    price: "$99.00 USD",
    image: "/images/PinkPremiumCeramic.jpg",
    sale: false,
  },
  {
    name: "Golden Designers Mug",
    price: "$50.00",
    image: "/images/GoldenDesignersMug.jpg",
    sale: true,
  },
];

const FeaturedMugs = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex flex-col items-center px-4 md:px-8"
    >
      {/* Tiêu đề */}
      <div className="flex items-center justify-center w-full mb-12 md:mb-28">
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
        <div className="px-4 text-gray-500 text-opacity-50 uppercase text-base font-medium text-center tracking-widest">
          Featured Mugs
        </div>
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full max-w-[1070px] gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group w-full max-w-[550px] h-auto cursor-pointer"
          >
            <div className="relative hover:opacity-65 transition-all duration-300 ease-in-out">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[450px] md:h-[550px] object-cover"
              />

              {/* On Sale tag */}
              {product.sale && (
                <div className="w-[91px] h-[40px] absolute top-2 right-2 bg-white text-[#9e7569] text-sm font-medium flex items-center justify-center">
                  On Sale
                </div>
              )}

              {/* Explore Mug button */}
              <button className="w-[90%] max-w-[450px] h-[55px] absolute bottom-4 uppercase left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 text-sm font-medium">
                Explore Mug
              </button>
            </div>

            {/* Tên & giá */}
            <p className="mt-4 text-lg font-semibold text-center">
              {product.name}
            </p>
            <p className="text-gray-500 text-center">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMugs;
