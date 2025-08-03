// Cart.jsx
import React from "react";

const Cart = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay mờ nền */}
      <div
        className={`fixed inset-0 bg-opacity-30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#1d1f2e] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-white">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          {/* Nội dung cart ở đây */}
          <p className="text-gray-700">Cart is empty.</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
