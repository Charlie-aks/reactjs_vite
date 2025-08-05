import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400">
      {/* Đăng ký nhận email */}
      <div className="max-w-8xl mx-12 px-4 py-20 text-center flex flex-col items-center space-y-6 bg-[#1d1f2e] h-[400px]">
        <div className="text-gray-400 text-opacity-50 uppercase text-sm sm:text-base font-medium tracking-widest">
          Sign up and get free coffee bags
        </div>

        <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-white">
          Coffee Updates
        </div>

        <form className="w-full max-w-xl flex flex-col sm:flex-row gap-4 mt-4 items-center justify-center">
          <input
            type="email"
            placeholder="CUSTOMER@COFFEESTYLE"
            className="flex-1 px-5 py-4 sm:py-5 text-white focus:outline-none border border-gray-500 bg-transparent tracking-widest placeholder:text-gray-400 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="cursor-pointer bg-white hover:bg-gray-300 text-[#1d1f2e] px-6 py-4 font-semibold uppercase text-sm sm:text-base transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Thông tin & Liên kết */}
      <div className="bg-white text-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Intro */}
          <div>
            <h2 className="text-gray-800 text-xl font-bold mb-4">
              CoffeeStyle
            </h2>
            <p className="text-sm leading-relaxed">
              Delivering the best coffee life since 1996. From coffee geeks to
              the real ones.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C89F94]">
                  Zalo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
          © 2025 MyShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;