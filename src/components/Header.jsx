// src/components/Header.jsx (Updated with scroll links)
import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import logo from "../components/static/marketshade.jpeg"
const Header = () => {
    const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" onClick={() => scrollToSection('home')} className="flex items-center cursor-pointer">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto transition-transform hover:scale-105 md:h-12"
            />
          </button>
        </a>
        <div className="flex flex-col justify-center p-2 rounded-lg">
            <p className="text-sm text-gray-600 italic">Coming soon: E-commerce platform at:</p>
            <a href="https://shop.marketshade.co.ke" className="text-yellow-600 font-bold" target="_blank" rel="noopener noreferrer">
                shop.marketshade.co.ke
            </a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a onClick={() => scrollToSection('home')} className="hover:text-yellow-600 transition-colors cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('solutions')} className="hover:text-yellow-600 transition-colors cursor-pointer">Solutions</a>
          <a onClick={() => scrollToSection('services')} className="hover:text-yellow-600 transition-colors cursor-pointer">Services</a>
          <a onClick={() => scrollToSection('about')} className="hover:text-yellow-600 transition-colors cursor-pointer">About Us</a>
          <a onClick={() => scrollToSection('contact')} className="hover:text-yellow-600 transition-colors cursor-pointer">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;