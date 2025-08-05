import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../data/product";
import { useCart } from "../../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">
        Không tìm thấy sản phẩm.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
      {/* Ảnh sản phẩm */}
      <div className="w-full">
        <div className="relative w-full aspect-square overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.sale && (
            <div className="absolute top-3 right-3 bg-white px-3 py-1 text-[#a25f4b] font-semibold text-sm shadow ">
              On Sale.
            </div>
          )}
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-full self-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-5">
          {product.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
        {product.description}
        </p>

        {/* Giá */}
        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <p className="text-xl sm:text-2xl font-semibold text-[#a25f4b]">
            {product.price}
          </p>
          {product.sale && (
            <p className="text-base text-gray-400 line-through">
              $60.00 USD
            </p>
          )}
        </div>

        {/* Số lượng */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-500 mb-2 uppercase">
            Quantity
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full sm:w-[120px] h-[50px] sm:h-[60px]"
            />
            <button
              className="bg-gray-900 text-white px-6 py-3 text-sm font-semibold uppercase hover:bg-gray-800 transition rounded w-full sm:w-auto"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
