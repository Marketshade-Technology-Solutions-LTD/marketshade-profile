// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import logo from "../components/static/marketshade_company_logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-2xl' : 'bg-gray-900/95 backdrop-blur-sm'
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
          : 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
        borderBottom: '1px solid rgba(234,179,8,0.2)',
      }}
    >
      {/* Subtle techy grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234,179,8,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,179,8,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full px-4 sm:px-6 md:px-10 py-2 md:py-3">
        <div className="flex items-center">
          
          {/* LOGO - Much larger */}
          <div className="flex-shrink-0">
            <a href="/" onClick={handleLogoClick} className="flex items-center">
              <img
                src={logo}
                alt="Marketshade Logo"
                className="
                  h-16
                  sm:h-20
                  md:h-24
                  lg:h-28
                  w-auto
                  max-w-[190px]
                  sm:max-w-[240px]
                  md:max-w-[290px]
                  lg:max-w-[340px]
                  hover:opacity-90
                  transition-opacity
                  object-contain
                "
              />
            </a>
          </div>

          {/* DESKTOP NAVIGATION - Minimal spacing, pushed left toward logo */}
          <div className="hidden xl:flex items-center ml-8 2xl:ml-12">
            
            {/* Dropdown: Our Products - Directly next to logo */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-2 text-sm font-semibold tracking-wide text-gray-200 hover:text-yellow-400 transition-colors">
                Our Products <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a 
                    href="https://school.marketshade.co.ke" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2.5 hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">EdTech</p>
                    <p className="text-sm font-semibold text-white">SchoolOS</p>
                  </a>
                  <a 
                    href="https://shop.marketshade.co.ke" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2.5 hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">EduCommerce</p>
                    <p className="text-sm font-semibold text-white">Dukawala</p>
                  </a>
                  <a 
                    href="https://price-watch.marketshade.co.ke" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2.5 hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Sales Tech</p>
                    <p className="text-sm font-semibold text-white">Price Watch</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <button
              onClick={() => scrollToSection('services')}
              className="px-2 py-2 text-sm font-semibold tracking-wide text-gray-200 hover:text-yellow-400 transition-colors"
            >
              Our Services
            </button>

            {/* Dropdown: The Company */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-2 text-sm font-semibold tracking-wide text-gray-200 hover:text-yellow-400 transition-colors">
                The Company <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2.5 text-sm hover:bg-gray-700 hover:text-yellow-400 transition-colors">About Us</Link>
                  <Link to="/team" className="block px-4 py-2.5 text-sm hover:bg-gray-700 hover:text-yellow-400 transition-colors">The Team</Link>
                  <Link to="/clients" className="block px-4 py-2.5 text-sm hover:bg-gray-700 hover:text-yellow-400 transition-colors">Clients</Link>
                </div>
              </div>
            </div>

            {/* Careers */}
            <Link to="/careers" className="px-2 py-2 text-sm font-semibold tracking-wide text-gray-200 hover:text-yellow-400 transition-colors">
              Careers
            </Link>

            {/* Blogs */}
            <Link to="/blogs" className="px-2 py-2 text-sm font-semibold tracking-wide text-gray-200 hover:text-yellow-400 transition-colors">
              Blogs
            </Link>

            {/* Contact Us Button */}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="
                ml-4
                px-5
                py-2
                bg-yellow-500
                hover:bg-yellow-600
                text-gray-900
                font-bold
                rounded-full
                transition-all
                transform
                hover:scale-105
                text-sm
                xl:text-base
                shadow-lg
              "
            >
              Contact Us
            </button>

            {/* Phone and Email */}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-600">
              <a href="tel:+254712960239" className="flex items-center gap-1 text-sm text-gray-300 hover:text-yellow-400 transition-colors whitespace-nowrap">
                <Phone size={13} className="text-yellow-500" /> +254 712 960 239
              </a>
              <a href="mailto:infodesk@marketshade.co.ke" className="flex items-center gap-1 text-sm text-gray-300 hover:text-yellow-400 transition-colors whitespace-nowrap">
                <Mail size={13} className="text-yellow-500" /> infodesk@marketshade.co.ke
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Push to right */}
          <div className="flex-1 min-w-0"></div>
          <button 
            className="xl:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`xl:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 shadow-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col py-4 max-h-[80vh] overflow-y-auto">
          
          {/* Our Products */}
          <div className="px-5 py-3 border-b border-gray-800">
            <p className="text-yellow-400 font-bold text-sm mb-2">Our Products</p>
            <div className="space-y-2 pl-3">
              <a href="https://school.marketshade.co.ke" target="_blank" rel="noopener noreferrer" className="block py-1.5 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                <span className="text-gray-500 text-xs">EdTech:</span> SchoolOS
              </a>
              <a href="https://shop.marketshade.co.ke" target="_blank" rel="noopener noreferrer" className="block py-1.5 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                <span className="text-gray-500 text-xs">EduCommerce:</span> Dukawala
              </a>
              <a href="https://price-watch.marketshade.co.ke" target="_blank" rel="noopener noreferrer" className="block py-1.5 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                <span className="text-gray-500 text-xs">Sales Tech:</span> Price Watch
              </a>
            </div>
          </div>

          {/* Our Services */}
          <button
            onClick={() => scrollToSection('services')}
            className="px-5 py-3 text-left text-gray-200 hover:bg-gray-800 hover:text-yellow-400 transition-colors font-semibold border-b border-gray-800 text-sm"
          >
            Our Services
          </button>

          {/* The Company */}
          <div className="px-5 py-3 border-b border-gray-800">
            <p className="text-yellow-400 font-bold text-sm mb-2">The Company</p>
            <div className="space-y-2 pl-3">
              <Link to="/about" className="block py-1.5 text-gray-300 hover:text-yellow-400 transition-colors text-sm">About Us</Link>
              <Link to="/team" className="block py-1.5 text-gray-300 hover:text-yellow-400 transition-colors text-sm">The Team</Link>
              <Link to="/clients" className="block py-1.5 text-gray-300 hover:text-yellow-400 transition-colors text-sm">Clients</Link>
            </div>
          </div>

          {/* Careers */}
          <Link to="/careers" className="px-5 py-3 text-gray-200 hover:bg-gray-800 hover:text-yellow-400 transition-colors font-semibold border-b border-gray-800 text-sm">
            Careers
          </Link>

          {/* Blogs */}
          <Link to="/blogs" className="px-5 py-3 text-gray-200 hover:bg-gray-800 hover:text-yellow-400 transition-colors font-semibold border-b border-gray-800 text-sm">
            Blogs
          </Link>

          {/* Contact Button */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="mx-5 my-4 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-full transition-all text-sm"
          >
            Contact Us
          </button>

          {/* Phone and Email */}
          <div className="px-5 py-3 border-t border-gray-800 mt-2 space-y-3">
            <a href="tel:+254712960239" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
              <Phone size={16} className="text-yellow-500" /> +254 712 960 239
            </a>
            <a href="mailto:infodesk@marketshade.co.ke" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
              <Mail size={16} className="text-yellow-500" /> infodesk@marketshade.co.ke
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;