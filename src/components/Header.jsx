// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import logo from "../components/static/marketshade_company_logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 200;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className="text-white shadow-xl fixed top-0 left-0 w-full z-50 h-48"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
        borderBottom: '1px solid rgba(234,179,8,0.2)',
      }}
    >
      {/* Subtle techy grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234,179,8,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,179,8,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full h-full flex justify-between items-center px-4 md:px-8">
        
        {/* LOGO: flush to left edge, fills full header height */}
        <div className="h-full flex-shrink-0">
          <a href="/" onClick={handleLogoClick} className="h-full flex items-center">
            <img
              src={logo}
              alt="Marketshade Logo"
              className="h-full object-fill hover:opacity-90 transition-opacity"
              style={{
                height: '100%',
                width: '336px',
              }}
            />
          </a>
        </div>

        {/* DESKTOP NAVIGATION - Immediately after logo, no space */}
        <div className="hidden lg:flex items-center h-full">
          
          {/* Dropdown: Our Products - comes immediately after logo */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center hover:text-yellow-400 font-semibold tracking-wide transition-colors px-4 h-full focus:outline-none">
              Our Products <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-0 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
              <div className="py-2">
                <a 
                  href="https://school.marketshade.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-6 py-3 hover:bg-gray-800 transition-colors group/item"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">EdTech</p>
                  <p className="text-sm font-bold text-white group-hover/item:text-yellow-400">SchoolOS</p>
                </a>
                <a 
                  href="https://shop.marketshade.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-6 py-3 hover:bg-gray-800 transition-colors group/item"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">EduCommerce</p>
                  <p className="text-sm font-bold text-white group-hover/item:text-yellow-400">Dukawala</p>
                </a>
                <a 
                  href="https://price-watch.marketshade.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-6 py-3 hover:bg-gray-800 transition-colors group/item"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Sales Tech</p>
                  <p className="text-sm font-bold text-white group-hover/item:text-yellow-400">Price Watch</p>
                </a>
              </div>
            </div>
          </div>

          {/* OUR SERVICES Link - scrolls to services section */}
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-yellow-400 font-semibold tracking-wide transition-colors px-4 h-full flex items-center focus:outline-none"
          >
            Our Services
          </button>

          {/* Dropdown: The Company */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center hover:text-yellow-400 font-semibold tracking-wide transition-colors px-4 h-full focus:outline-none">
              The Company <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-0 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
              <div className="py-2">
                <Link 
                  to="/about" 
                  className="block px-6 py-3 text-sm hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/team" 
                  className="block px-6 py-3 text-sm hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  The Team
                </Link>
                <Link 
                  to="/clients" 
                  className="block px-6 py-3 text-sm hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Clients
                </Link>
              </div>
            </div>
          </div>

          {/* CAREERS Link */}
          <Link 
            to="/careers" 
            className="hover:text-yellow-400 font-semibold tracking-wide transition-colors px-4 h-full flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
          {/* BLOGS Link */}
          <Link 
            to="/blogs" 
            className="hover:text-yellow-400 font-semibold tracking-wide transition-colors px-4 h-full flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          
          {/* CONTACT US Button */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 mx-4"
          >
            Contact Us
          </button>

          {/* Phone and Email - at the far right end */}
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
            <a href="tel:+254712960239" className="flex items-center hover:text-yellow-400 transition-colors text-sm">
              <Phone size={16} className="mr-2 text-yellow-500" /> +254 712 960 239
            </a>
            <a href="mailto:infodesk@marketshade.co.ke" className="flex items-center hover:text-yellow-400 transition-colors text-sm">
              <Mail size={16} className="mr-2 text-yellow-500" /> infodesk@marketshade.co.ke
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 shadow-xl z-50">
          <div className="flex flex-col py-4">
            
            {/* Mobile: Our Products */}
            <div className="px-6 py-3 border-b border-gray-800">
              <p className="text-yellow-400 font-bold mb-2">OUR PRODUCTS</p>
              <div className="space-y-2 pl-4">
                <a 
                  href="https://school.marketshade.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xs text-gray-400">EdTech:</span> SchoolOS
                </a>
                <a 
                  href="https://shop.marketshade.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xs text-gray-400">EduCommerce:</span> Dukawala
                </a>
                <a 
                  href="https://price-watch.marketshade.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xs text-gray-400">Sales Tech:</span> Price Watch
                </a>
              </div>
            </div>

            {/* Mobile: Our Services */}
            <button
              onClick={() => scrollToSection('services')}
              className="px-6 py-3 text-left hover:bg-gray-800 hover:text-yellow-400 transition-colors font-semibold border-b border-gray-800"
            >
              OUR SERVICES
            </button>

            {/* Mobile: The Company */}
            <div className="px-6 py-3 border-b border-gray-800">
              <p className="text-yellow-400 font-bold mb-2">THE COMPANY</p>
              <div className="space-y-2 pl-4">
                <Link to="/about" className="block hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/team" className="block hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>The Team</Link>
                <Link to="/clients" className="block hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Clients</Link>
              </div>
            </div>

            {/* Mobile: Other Links */}
            <Link to="/careers" className="px-6 py-3 hover:bg-gray-800 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link to="/blogs" className="px-6 py-3 hover:bg-gray-800 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>BLOGS</Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="mx-6 my-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-full font-bold transition-all"
            >
              CONTACT US
            </button>

            {/* Mobile: Phone and Email */}
            <div className="px-6 py-3 border-t border-gray-800 mt-2 space-y-3">
              <a href="tel:+254712960239" className="flex items-center hover:text-yellow-400 transition-colors text-sm">
                <Phone size={16} className="mr-2 text-yellow-500" /> +254 712 960 239
              </a>
              <a href="mailto:infodesk@marketshade.co.ke" className="flex items-center hover:text-yellow-400 transition-colors text-sm">
                <Mail size={16} className="mr-2 text-yellow-500" /> infodesk@marketshade.co.ke
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;