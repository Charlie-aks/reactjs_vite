import React from "react";

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
];

const products = [
  {
    name: "Red Love Cup",
    price: "$25.00 USD",
    image: images[0],
    sale: true,
  },
  {
    name: "Black Tea Cup",
    price: "$15.00",
    image: images[1],
    sale: true,
  },
  {
    name: "B&W Essentials Mug",
    price: "$19.00 USD",
    image: images[2],
    sale: false,
  },
  {
    name: "Winter Style Mug",
    price: "$22.00",
    image: images[3],
    sale: false,
  },
  {
    name: "Ceramic Tea Mug",
    price: "$18.00 USD",
    image: images[4],
    sale: true,
  },
  {
    name: "No Handle Bar Cup",
    price: "$20.00",
    image: images[5],
    sale: false,
  },
  {
    name: "Expresso Cup",
    price: "$30.00 USD",
    image: images[6],
    sale: true,
  },
  {
    name: "Golden Designer's Mug",
    price: "$50.00",
    image: images[7],
    sale: true,
  },
  {
    name: "Summer Designer Cup",
    price: "$45.00 USD",
    image: images[8],
    sale: false,
  },
];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center py-9">
        {products.map((product, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="relative group w-full max-w-[360px] h-[520px]"
          >
            <div className="relative w-full h-[400px] hover:opacity-65 transition-all duration-500 ease-in-out group-hover:opacity-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
              />
              {product.sale && (
                <div className="w-[91px] h-[40px] absolute top-2 right-2 bg-white text-[#9e7569] text-sm font-medium flex items-center justify-center">
                  On Sale
                </div>
              )}
              <button className="w-[90%] max-w-[330px] h-[55px] absolute bottom-4 uppercase left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 px-4 py-2 text-sm font-medium">
                Explore Mug
              </button>
            </div>
            <p className="mt-4 text-lg font-semibold">{product.name}</p>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mb-12 md:mb-28"
      >
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
        <div className="px-4 text-gray-500 text-opacity-50 uppercase text-base font-medium text-center tracking-widest">
          Buy 2 mugs and get a coffee magazine free
        </div>
        <div className="border-t border-gray-400 w-6 md:w-8"></div>
      </div>
    </div>
  );
};

export default MoreProduct;
