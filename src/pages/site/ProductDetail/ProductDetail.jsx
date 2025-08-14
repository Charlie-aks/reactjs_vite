import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../data/product";
import { useCart } from "../../../context/CartContext";
import ProductCard from "../../../components/ProductCard";

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

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough products in same category, fill with other products
  if (relatedProducts.length < 4) {
    const otherProducts = products
      .filter((p) => p.id !== product.id && !relatedProducts.includes(p))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...otherProducts);
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Main Product Detail */}
      <div className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Product Image */}
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

        {/* Product Information */}
        <div className="w-full self-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-5">
            {product.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
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

          {/* Quantity */}
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

          {/* Product Details */}
          {product.detail && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
              <p className="text-gray-600 leading-relaxed">{product.detail}</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="py-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-karla">
              Related Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover more amazing products from our collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-block bg-gradient-to-r from-coffee to-light-coffee text-white px-8 py-3 rounded-lg font-semibold hover:from-coffee/90 hover:to-light-coffee/90 transition-all duration-200 transform hover:scale-105"
            >
              View All Products
            </a>
          </div>
        </div>
      )}

      {/* Product Categories Info */}
      <div className="py-16 bg-gray-50 -mx-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-coffee/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">High Quality</h3>
              <p className="text-gray-600">Products crafted from the finest materials</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-coffee/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Warranty</h3>
              <p className="text-gray-600">Quality commitment with clear warranty policy</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-coffee/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
