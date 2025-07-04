import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl h-[90px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">
          <Link to="/" className="">
            CoffeeStyle.
          </Link>
        </div>
        {/* Nav desktop */}
        <nav className="hidden md:flex gap-16 text-gray-600 text-xl font-medium">
          <Link to="/" className="link-hover">
            Home
          </Link>
          <Link to="/product" className="link-hover">
            Products
          </Link>
          <Link to="/blog" className="link-hover">
            Blog
          </Link>
          <a href="#" className="link-hover">
            About
          </a>
          <a href="#" className="link-hover">
            Contact
          </a>
        </nav>

        {/* Cart */}
        <div className="flex gap-2 link-hover font-medium items-center cursor-pointer">
          <LuShoppingCart />
          <p className="hidden sm:block">CART</p>
        </div>

        {/* Menu icon on mobile */}
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
          <a href="#" className="hover:text-[#C89F94]">
            Home
          </a>
          <a href="#" className="hover:text-[#C89F94]">
            Products
          </a>
          <a href="#" className="hover:text-[#C89F94]">
            Blog
          </a>
          <a href="#" className="hover:text-[#C89F94]">
            About
          </a>
          <a href="#" className="hover:text-[#C89F94]">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
