import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Cart from "../../pages/site/Cart/Cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // menu mobile
  const [isCartOpen, setIsCartOpen] = useState(false); // panel cart

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl h-[90px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">CoffeeStyle.</Link>
        </div>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-16 text-gray-600 text-xl font-medium">
          <Link to="/" className="link-hover">Home</Link>
          <Link to="/product" className="link-hover">Products</Link>
          <Link to="/blog" className="link-hover">Blog</Link>
          <Link to="/about" className="link-hover">About</Link>
          <Link to="/contact" className="link-hover">Contact</Link>
        </nav>

        {/* Cart */}
        <div
          onClick={() => setIsCartOpen(true)}
          className="flex gap-2 font-medium items-center cursor-pointer "
        >
          <LuShoppingCart className="text-xl" />
          <p className="hidden sm:block link-hover">CART</p>
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Nav mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-600 text-lg font-medium bg-white shadow">
          <Link to="/" className="link-hover">Home</Link>
          <Link to="/product" className="link-hover">Products</Link>
          <Link to="/blog" className="link-hover">Blog</Link>
          <Link to="/about" className="link-hover">About</Link>
          <Link to="/contact" className="link-hover">Contact</Link>
        </div>
      )}

      {/* Cart Panel */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
