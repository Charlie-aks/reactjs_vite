import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Info = () => (
  <div className="space-y-6">
    {/* Contact Methods */}
    <div className="space-y-4">
      <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
        <div className="bg-coffee text-white p-3 rounded-full">
          <FaEnvelope className="text-lg" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
          <p className="text-gray-600">hello@coffeestyle.io</p>
          <p className="text-sm text-gray-500">We respond within 24 hours</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
        <div className="bg-coffee text-white p-3 rounded-full">
          <FaPhone className="text-lg" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM PST</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
        <div className="bg-coffee text-white p-3 rounded-full">
          <FaMapMarkerAlt className="text-lg" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
          <p className="text-gray-600">123 Coffee Street</p>
          <p className="text-gray-600">San Francisco, CA 94102</p>
          <p className="text-sm text-gray-500">Free parking available</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
        <div className="bg-coffee text-white p-3 rounded-full">
          <FaClock className="text-lg" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Store Hours</h4>
          <div className="text-gray-600 space-y-1">
            <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 my-6"></div>

    {/* Social Media */}
    <div>
      <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
      <div className="flex space-x-3">
        <a
          href="#"
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
          aria-label="Facebook"
        >
          <FaFacebook className="text-lg" />
        </a>
        <a
          href="#"
          className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-200"
          aria-label="Twitter"
        >
          <FaTwitter className="text-lg" />
        </a>
        <a
          href="#"
          className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors duration-200"
          aria-label="Instagram"
        >
          <FaInstagram className="text-lg" />
        </a>
        <a
          href="#"
          className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-lg" />
        </a>
      </div>
    </div>

    {/* Additional Info */}
    <div className="bg-gradient-to-r from-coffee/10 to-light-coffee/10 p-4 rounded-lg border border-coffee/20">
      <h4 className="font-semibold text-gray-800 mb-2">Need Immediate Help?</h4>
      <p className="text-sm text-gray-600 mb-3">
        For urgent inquiries, please call us directly or visit our store. Our friendly staff is always ready to assist you.
      </p>
      <div className="flex space-x-2">
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
          Fast Response
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          Expert Support
        </span>
      </div>
    </div>
  </div>
);

export default Info;
