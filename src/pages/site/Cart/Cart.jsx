// Cart.jsx
import React from "react";
import { useCart } from "../../../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();

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
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h2 className="text-xl font-semibold text-white">Your Cart ({getTotalItems()})</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-center mt-8">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-700 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-300 text-sm">{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-400 hover:text-white p-1"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="text-white text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-white p-1"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-600 p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Total: ${getTotalPrice().toFixed(2)}</span>
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Clear Cart
                </button>
              </div>
              <button className="w-full bg-light-coffee hover:bg-coffee text-white py-3 rounded-lg font-medium transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
