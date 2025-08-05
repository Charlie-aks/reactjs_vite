import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={handleNavigate} // Cả card có thể nhấn
      data-aos="fade-up"
      data-aos-duration="1000"
      className="relative group w-full max-w-[360px] h-auto cursor-pointer"
    >
      <div className="relative w-full aspect-[4/5] hover:opacity-65 transition-all duration-500 ease-in-out group-hover:opacity-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.sale && (
          <div className="w-[91px] h-[40px] absolute top-2 right-2 bg-white text-[#9e7569] text-sm font-medium flex items-center justify-center shadow-md">
            On Sale
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="w-[90%] max-w-[330px] h-[50px] text-xs sm:text-sm md:text-base absolute bottom-4 uppercase left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 font-medium hover:bg-light-coffee hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      </div>
      <p className="mt-4 text-base sm:text-lg font-semibold text-center">
        {product.name}
      </p>
      <p className="text-sm sm:text-base text-gray-500 text-center">
        {product.price}
      </p>
    </div>
  );
};

export default ProductCard;
