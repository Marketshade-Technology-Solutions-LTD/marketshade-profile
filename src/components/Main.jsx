// Main.jsx - Human-sounding text with substantial content
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaArrowRight, 
  FaNetworkWired, FaChartLine, FaShieldAlt, FaClock, FaUsers, FaBuilding,
  FaCheckCircle, FaChartBar, FaCogs, FaDatabase, FaMobileAlt, FaGraduationCap, FaFacebookF, FaLinkedinIn, FaTiktok, FaInstagram, FaWhatsapp, FaYoutube, FaGem, FaRocket, FaBrain
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
// Asset Imports
import landingPageImage from "../components/static/landing-page-image.png";
import gradeOneStudentsRunning from "../components/static/grade_1_running.png";
import highSchoolStudents from "../components/static/high_school_students.png";
import marketshadeDukawala from "../components/static/marketshade_dukawala.jpeg";
import biAndAnalyticsImage from "../components/static/bi-and-analytics.jpg";
import aiAndBigDataImage from "../components/static/ai-big-data.jpg";
import crmImage from "../components/static/crm.png";
import erpImage from "../components/static/erp.png";
import mobileAppImage from "../components/static/mobile-app.png";
import priceWatchLogo from "../components/static/marketshade-price-watch.png";
import priceWatchLogoOption from "../components/static/marketshade-price-watch1.png";
import marketshadeUpskillingImage from "../components/static/marketshade-upskilling.png";
import footerLogo from "../components/static/marketshade_company_icon.png";

// Service Card Component
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-yellow-200 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative h-52 rounded-lg overflow-hidden mb-4">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
          {service.icon}
        </div>
      </div>
      <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors">
        {service.title}
      </h4>
      <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {service.features.map((feature, idx) => (
          <span key={idx} className="px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full border border-yellow-100">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Alternating Solution Component
const AlternatingSolution = ({ solution, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 first:pt-0 last:pb-0 border-b border-gray-200 last:border-0"
    >
      <div className={`lg:w-1/2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <img
          src={solution.img}
          alt={solution.title}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      
      <div className={`lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 rounded-full mb-4">
            {/*<FaGem className="text-yellow-600 text-xs" />
             <span className="text-yellow-700 text-xs font-semibold">Trusted by 100+ organizations</span> */}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {solution.title}
          </h3>
          <p className="text-gray-700 text-base mb-5 leading-relaxed">
            {solution.desc}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {solution.stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500 text-sm" />
                <span className="text-sm text-gray-700">{stat}</span>
              </div>
            ))}
          </div>
          
          <a 
            href={solution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md"
          >
            {solution.buttonText} <FaArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={footerLogo} alt="MarketShade Logo" className="h-16 mb-3" />
            <p className="text-gray-400 text-sm text-center md:text-left">Empowering Kenyan businesses through smart technology solutions since 2020</p>
          </div>
          <div>
            <h6 className="mb-4 font-semibold text-yellow-400">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/careers" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="/about-us" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 font-semibold text-yellow-400">Get in Touch</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-500 text-xs" />
                <span>infodesk@marketshade.co.ke</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-500 text-xs" />
                <span>+254 712 960 239</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-500 text-xs" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 font-semibold text-yellow-400">Follow Us</h6>
            <ul className="flex space-x-4">
              <li><a href="https://x.com/marketshade_LTD" className="hover:text-yellow-400 transition-colors"><FaXTwitter className="text-xl" /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61567172570382" className="hover:text-yellow-400 transition-colors"><FaFacebookF className="text-xl" /></a></li>
              <li><a href="https://www.linkedin.com/company/105130100" className="hover:text-yellow-400 transition-colors"><FaLinkedinIn className="text-xl" /></a></li>
              <li><a href="https://www.instagram.com/marketshade_ltd/" className="hover:text-yellow-400 transition-colors"><FaInstagram className="text-xl" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2026 MarketShade. All rights reserved. Built with ❤️ in Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const Main = () => {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("");
  
  const titles = [
    "We help Kenyan businesses work smarter, not harder.",
    "Tired of paperwork? Let our School Management System handle it all.",
    "Custom software that actually works the way you work.",
    "Know what your competitors are charging. In real time.",
    "Turn your data into decisions that grow your business.",
  ];

  const servicesData = [
    { 
      img: biAndAnalyticsImage, 
      title: "Real-Time Dashboards", 
      desc: "Stop guessing. See exactly what's happening in your business right now - inventory, sales, costs, everything in one place.",
      features: ["Live Tracking", "Cost Analysis", "Performance Metrics", "Custom Reports"],
      icon: <FaChartBar className="text-yellow-600 text-lg" />
    },
    { 
      img: erpImage, 
      title: "ERP Solutions", 
      desc: "Connect your finance, HR, and inventory teams with one system that actually understands Kenyan tax laws and multi-currency needs.",
      features: ["Multi-Currency", "Tax Automation", "Local Compliance", "HR Management"],
      icon: <FaCogs className="text-yellow-600 text-lg" />
    },
    { 
      img: aiAndBigDataImage, 
      title: "AI & Big Data", 
      desc: "Predict what your customers want before they ask. Our AI helps you forecast demand and spot trends before your competitors do.",
      features: ["Demand Forecasting", "Risk Analysis", "Market Insights", "Pattern Recognition"],
      icon: <FaDatabase className="text-yellow-600 text-lg" />
    },
    { 
      img: crmImage, 
      title: "CRM Systems", 
      desc: "Stop losing customers to poor follow-ups. Track every interaction, automate follow-ups, and never miss a sale again.",
      features: ["360° Customer View", "Sales Automation", "Service Management", "Lead Tracking"],
      icon: <FaUsers className="text-yellow-600 text-lg" />
    },
    { 
      img: mobileAppImage, 
      title: "Mobile Solutions", 
      desc: "Empower your field teams with apps that work offline, track locations, and sync automatically when they're back online.",
      features: ["Offline Mode", "GPS Tracking", "Real-time Sync", "Field Reports"],
      icon: <FaMobileAlt className="text-yellow-600 text-lg" />
    },
    { 
      img: marketshadeUpskillingImage, 
      title: "Corporate Training", 
      desc: "Your team won't just get software - they'll get the training and support they need to actually use it and get results.",
      features: ["Hands-on Workshops", "Documentation", "24/7 Support", "Best Practices"],
      icon: <FaGraduationCap className="text-yellow-600 text-lg" />
    }
  ];

  const solutionsData = [
    { 
      img: gradeOneStudentsRunning, 
      title: "SchoolOS", 
      desc: "The complete school management system that Kenyan schools actually love using. Handle everything from admissions to exams to fee collection in one place. No more chasing parents for fees or staying up late to compile results - it's all automated.",
      features: ["Report Cards", "Exam Management", "Fee Tracking", "Parent Portal", "Online Learning", "Transport Management"],
      stats: ["9+ integrated modules", "Automated payment reminders", "Parent and student portals", "Access from anywhere"],
      buttonText: "See SchoolOS in action",
      url: "https://school.marketshade.co.ke"
    },
    { 
      img: marketshadeDukawala, 
      title: "Dukawala", 
      desc: "A dedicated education commerce platform connecting schools, parents, and suppliers through one seamless digital marketplace. Schools can streamline procurement, parents can conveniently purchase school essentials, and verified vendors can supply uniforms, stationery, furniture, books, and other academic utilities with secure digital payments and real-time order visibility.",
      
      features: [
        "School supplies marketplace",
        "Uniform & textbook ordering",
        "Supplier onboarding",
        "M-Pesa payments",
        "Order tracking",
        "Institutional procurement management"
      ],
      
      stats: [
        "Education-focused commerce",
        "Integrated with SchoolOS",
        "Verified supplier network",
        "Real-time procurement visibility"
      ],
      
      buttonText: "Explore EduCommerce",
      
      url: "https://shop.marketshade.co.ke"
    },
    { 
      img: priceWatchLogo, 
      title: "Price Watch", 
      desc: "Ever wondered if your prices are competitive? Price Watch scans competitor websites 24/7 and alerts you when they change their prices. You'll know instantly if you need to adjust - no more lost sales or leaving money on the table.",
      features: ["Real-time scanning", "Price history", "Competitor alerts", "Smart recommendations", "Market trends", "Auto-adjust rules"],
      stats: ["Scan thousands of products", "Get instant alerts", "Track unlimited competitors", "Historical price data"],
      buttonText: "Try Price Watch free",
      url: "https://price-watch.marketshade.co.ke"
    }
  ];

  const kenyanClients = ["Schools", "Retail Chains", "Financial Institutions", "Healthcare", "Logistics", "Agriculture"];
  
  const impactStats = [
    { value: "40%", label: "Average efficiency gain", icon: <FaChartLine className="text-yellow-600" /> },
    { value: "24/7", label: "Support when you need it", icon: <FaClock className="text-yellow-600" /> },
    { value: "KES 0", label: "First consultation on us", icon: <FaCheckCircle className="text-yellow-600" /> }
  ];

  const processSteps = [
    { step: "1", title: "We listen first", desc: "Free 30-min chat to understand what's slowing you down" },
    { step: "2", title: "We design together", desc: "Map out exactly how your solution will work" },
    { step:  "3", title: "We build carefully", desc: "No disruption to your daily operations" },
    { step: "4", title: "We train thoroughly", desc: "Your team will feel confident from day one" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-yellow-600" />, label: "Visit us", val: "Nairobi, Kenya" },
    { icon: <FaEnvelope className="text-yellow-600" />, label: "Email us", val: "infodesk@marketshade.co.ke" },
    { icon: <FaPhoneAlt className="text-yellow-600" />, label: "Call us", val: "+254 712 960 239" }
  ];

  const performanceMetrics = [
    { value: "2.5x", label: "Faster reporting", desc: "From weekly to real-time", icon: <FaClock className="text-yellow-600" /> },
    { value: "60%", label: "Less manual work", desc: "Automate the boring stuff", icon: <FaCogs className="text-yellow-600" /> },
    { value: "45%", label: "Lower costs", desc: "Stop wasting resources", icon: <FaChartLine className="text-yellow-600" /> },
    { value: "99.5%", label: "System uptime", desc: "Always available when you need it", icon: <FaShieldAlt className="text-yellow-600" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % titles.length), 5000);
    return () => clearInterval(timer);
  }, [titles.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const target = e.target;
    const formData = {
      Name: target.Name.value,
      Email: target.Email.value,
      PhoneNumber: target.PhoneNumber.value,
      Organization: target.Organization.value,
      CurrentChallenge: target.CurrentChallenge.value,
      Message: target.Message.value,
    };
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwd_C1l46dgeqB4tdQUS_njeoPal7xcU4SaI-zGcPehKM1--YMYfWeoQXHT-5QOT4mHkg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });
      setStatus("Thanks! We'll get back to you within 24 hours.");
      target.reset();
    } catch (error) {
      setStatus("Something went wrong. Mind giving us a call instead?");
    }
  };

  return (
    <main className="bg-gray-300 text-gray-900 selection:bg-yellow-500/30 overflow-x-hidden text-xl">
      
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="
          relative
          min-h-screen
          flex
          items-center
          pt-24
          lg:pt-36
          xl:pt-40
          pb-12
        "
      >
        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 pt-4 lg:pt-0">
              <div className="mb-4">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-gray-900"
                  >
                    {titles[index]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed"
              >
                We're a Kenyan tech company that builds software to help businesses like yours save time, cut costs, and grow faster. No jargon. No overpromises. Just practical solutions that work.
              </motion.p>

              <div className="flex flex-wrap gap-6 mb-8">
                {impactStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-all shadow-md flex items-center gap-2 group text-base"
              >
                Let's talk about your business <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <motion.div 
              className="lg:w-1/2 relative" 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={landingPageImage}
                alt="Operations Dashboard"
                className="relative z-10 w-full h-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-yellow-100 rounded-lg px-5 py-2 flex gap-4 shadow-md z-20">
                {kenyanClients.slice(0, 3).map((industry, i) => (
                  <span key={i} className="text-sm font-bold text-yellow-700 whitespace-nowrap">{industry}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS SECTION */}
      <section id="solutions" className="py-16 bg-white relative">
        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-yellow-600 font-bold tracking-wider uppercase text-sm mb-3">What we've built</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">Real solutions for real Kenyan problems</h3>
            <p className="text-gray-600 text-base md:text-lg">We don't just write code. We solve the headaches you deal with every day.</p>
          </div>

          <div className="flex flex-col">
            {solutionsData.map((solution, i) => (
              <AlternatingSolution key={i} solution={solution} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-16 bg-gray-100 relative">
        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-yellow-600 font-bold tracking-wider uppercase text-sm mb-3">How we help</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">Services that make a difference</h3>
            <p className="text-gray-600 text-base md:text-lg">Beyond software - we're your technology partner from start to finish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT METRICS */}
      <section className="py-16 bg-white relative">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Don't just take our word for it</h3>
            <p className="text-gray-600 text-base">Here's what happens when businesses switch to our solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {performanceMetrics.map((metric, i) => (
              <div key={i} className="text-center p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-3xl font-black text-yellow-600 mb-1">{metric.value}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-600">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-16 bg-gray-100 relative">
        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to stop struggling with inefficient systems?</h2>
            <p className="text-gray-600 text-lg">Let's chat about your business. First consultation is on us - no obligation, no pressure.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                <h4 className="text-xl font-bold mb-5 flex items-center gap-2 text-gray-900">
                  <FaClock className="text-yellow-600" /> Here's how we work
                </h4>
                <div className="space-y-4">
                  {processSteps.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center font-bold text-sm text-white flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider">{item.label}</p>
                      <p className="text-base text-gray-900 font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-5 text-gray-900">Tell us about your business</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="Name" type="text" placeholder="Your name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all" required />
                    <input name="PhoneNumber" type="text" placeholder="Phone number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all" required />
                  </div>
                  <input name="Email" type="email" placeholder="Email address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all" required />
                  <input name="Organization" type="text" placeholder="Organization name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all" required />
                  
                  <select name="CurrentChallenge" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all">
                    <option value="">What's your biggest challenge right now?</option>
                    <option value="manual-processes">Too much manual work and paperwork</option>
                    <option value="data-silos">Information scattered everywhere</option>
                    <option value="scaling-issues">Struggling to grow efficiently</option>
                    <option value="reporting-delays">Can't get reports fast enough</option>
                    <option value="system-integration">Systems don't talk to each other</option>
                  </select>
                  
                  <textarea name="Message" rows="3" placeholder="Tell us more about what you're looking for..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all resize-none" required></textarea>
                  
                  <button type="submit" className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-md">
                    Send message
                  </button>
                  {status && <p className="text-center text-yellow-600 text-sm font-medium">{status}</p>}
                  <p className="text-center text-gray-500 text-xs">We typically reply within a few hours, not days.</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Main;