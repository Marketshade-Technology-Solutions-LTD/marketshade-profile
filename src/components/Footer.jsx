// src/components/Footer.jsx (Unchanged)
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-md py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-base">
          E-commerce platform:{' '}
          <a
            href="https://shop.marketshade.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-yellow-600 transition-colors"
          >
            Coming Soon!: shop.marketshade.co.ke
          </a>
        </p>

        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
          <Link to="/" className="hover:text-yellow-600 transition-colors">
            About Us
          </Link>
          <Link to="/" className="hover:text-yellow-600 transition-colors">
            Contact
          </Link>
          <Link to="/" className="hover:text-yellow-600 transition-colors">
            Privacy Policy
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-gray-300">
          &copy; {new Date().getFullYear()} Marketshade Technology Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;