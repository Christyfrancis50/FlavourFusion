import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu
import Logo from "../../assets/CookingApp-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current path for active link detection

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-between items-center py-4 px-6 lg:px-16 bg-orange-100 shadow-lg relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            className="w-[36vw] md:w-[14vw]"
            src={Logo}
            alt="CookingApp Logo"
          />
        </Link>
      </div>

      {/* Nav Links and Button */}
      <div className="hidden md:flex items-center ml-auto space-x-6 lg:space-x-10">
        <ul className="flex space-x-6 lg:space-x-10 items-center tracking-wide text-gray-700">
          <li>
            <Link
              to="/"
              className={`pb-2 font-bold hover:text-green-700 transition-colors duration-300 ${
                isActive("/") ? "border-b-4 border-orange-700" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`pb-2 font-bold  hover:text-green-700 transition-colors duration-300 ${
                isActive("/about") ? "border-b-4 border-orange-700" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`pb-2 font-bold  hover:text-green-700 transition-colors duration-300 ${
                isActive("/contact") ? "border-b-4 border-orange-700" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`pb-2 font-bold  hover:text-green-700 transition-colors duration-300 ${
                isActive("/faq") ? "border-b-4 border-orange-700" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/pricingplans"
              className={`pb-2 font-bold  hover:text-green-700 transition-colors duration-300 ${
                isActive("/pricingplans") ? "border-b-4 border-orange-700" : ""
              }`}
            >
              Pricing Plans
            </Link>
          </li>
        </ul>
        {/* Updated Button with link to the About page's second section */}
        <Link to="/about#about-section-2">
          <button className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
            Know More
          </button>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center z-20">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-orange-200 flex flex-col items-start p-10 md:hidden z-10">
          <ul className="space-y-6 text-lg font-bold tracking-wide text-gray-700">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-green-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="hover:text-green-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="hover:text-green-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={toggleMenu}
                className="hover:text-green-700"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/pricingplans"
                onClick={toggleMenu}
                className="hover:text-green-700"
              >
                Pricing plans
              </Link>
            </li>
            {/* Updated Button in mobile menu */}
            <li>
              <Link to="/about#about-section-2">
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Know More
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
