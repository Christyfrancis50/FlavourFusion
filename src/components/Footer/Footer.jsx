import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/CookingApp-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-orange-100 px-4 sm:px-8 md:px-14 pt-10 pb-6">
      <div className="container mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
        {/* Logo and Description */}
        <div className="md:w-1/3 text-center">
          <img
            src={Logo}
            alt="CookingApp Logo"
            className="w-[60%] sm:w-[40%] md:w-[12vw] mb-4 mx-auto"
          />
          <p className="max-w-xs mx-auto leading-relaxed text-sm">
            Your go-to platform for delicious recipes, cooking tips, and
            culinary inspiration. Follow us on social media for the latest
            updates!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-2 font-bold text-sm md:text-base text-center">
          <Link to="/" className="hover:text-green-800">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-800">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-800">
            Contact
          </Link>
          <Link to="/faq" className="hover:text-green-800">
            FAQ
          </Link>
          <Link to="/pricingplans" className="hover:text-green-800">
            Pricing Plans
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-col space-y-1 space-x-3 items-center justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 rounded-full p-2 ms-2 hover:bg-gray-300 transition-colors"
          >
            <FaFacebookF size={20} className="text-gray-700" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
          >
            <FaTwitter size={20} className="text-gray-700" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
          >
            <FaInstagram size={20} className="text-gray-700" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
          >
            <FaYoutube size={20} className="text-gray-700" />
          </a>
        </div>

        {/* Subscribe Section */}
        <div className="md:w-1/3 text-center flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest recipes and tips!
          </p>
          <form className="flex flex-col space-y-4 items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full max-w-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700"
            />
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 w-full max-w-xs">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-300 pt-4 text-sm">
        <p>&copy; 2024 FlavourFusion. All rights reserved.</p>
      </div>
    </footer>
  );
};
