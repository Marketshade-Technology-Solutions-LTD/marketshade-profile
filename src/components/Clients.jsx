// Clients.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaSchool, FaBuilding, FaChartLine, FaCheckCircle, FaArrowRight, 
  FaGem, FaUsers, FaGlobeAfrica, FaHandshake, FaStar, FaQuoteLeft,
  FaQuoteRight, FaRocket, FaShieldAlt, FaClock, FaHeart, FaAward,
  FaGraduationCap, FaShoppingCart, FaChartBar, FaBrain, FaTrophy,
  FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaStore, FaLandmark
} from "react-icons/fa";

// Footer Component
import footerLogo from "../components/static/marketshade_company_icon.png";

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
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 font-semibold text-yellow-400">Get in Touch</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 text-xs">✉️</span>
                <span>infodesk@marketshade.co.ke</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 text-xs">📞</span>
                <span>+254 712 960 239</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 text-xs">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 font-semibold text-yellow-400">Follow Us</h6>
            <ul className="flex space-x-4">
              <li><a href="https://x.com/marketshade_LTD" className="hover:text-yellow-400 transition-colors text-xl">𝕏</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61567172570382" className="hover:text-yellow-400 transition-colors text-xl">📘</a></li>
              <li><a href="https://www.linkedin.com/company/105130100" className="hover:text-yellow-400 transition-colors text-xl">🔗</a></li>
              <li><a href="https://www.instagram.com/marketshade_ltd/" className="hover:text-yellow-400 transition-colors text-xl">📷</a></li>
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

const Clients = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Current clients (even if anonymous, we can describe them)
  const currentClients = [
    {
      icon: <FaSchool className="text-yellow-400 text-2xl" />,
      category: "Education",
      name: "Private School in Nairobi",
      description: "A leading private school using SchoolOS for academic administration, fee collection, and parent communication.",
      since: "2024",
      testimonial: "SchoolOS has transformed how we manage our school. From report cards to fee collection, everything is now automated and efficient.",
      solution: "SchoolOS"
    }
  ];

  // Target client segments
  const targetSegments = [
    {
      icon: <FaSchool className="text-yellow-400 text-2xl" />,
      name: "Primary & Secondary Schools",
      description: "Private and public schools looking to digitize administration, academics, and finance.",
      solutions: ["SchoolOS", "Dukawala"],
      count: "1,000+ schools in Kenya",
      opportunity: "Currently onboarding schools across Nairobi and expanding nationally"
    },
    {
      icon: <FaUniversity className="text-yellow-400 text-2xl" />,
      name: "Colleges & Universities",
      description: "Higher education institutions seeking integrated learning management and student information systems.",
      solutions: ["SchoolOS", "E-learning Marketplace"],
      count: "50+ institutions in East Africa",
      opportunity: "Expanding to tertiary institutions in 2026"
    },
    {
      icon: <FaStore className="text-yellow-400 text-2xl" />,
      name: "Educational Suppliers",
      description: "Vendors of uniforms, textbooks, stationery, furniture, and school equipment.",
      solutions: ["Dukawala Marketplace"],
      count: "200+ potential suppliers",
      opportunity: "Join our verified supplier network"
    },
    {
      icon: <FaLandmark className="text-yellow-400 text-2xl" />,
      name: "Government & NGOs",
      description: "Government agencies and NGOs working in education sector transformation.",
      solutions: ["SchoolOS", "Analytics Dashboard", "Training"],
      count: "5+ partnerships in pipeline",
      opportunity: "Partner for large-scale digital transformation"
    },
    {
      icon: <FaBuilding className="text-yellow-400 text-2xl" />,
      name: "Corporate Organizations",
      description: "Companies needing custom software, ERP systems, and business intelligence solutions.",
      solutions: ["ERP", "CRM", "BI Analytics", "Price Watch"],
      count: "Growing pipeline",
      opportunity: "Custom solutions for Kenyan enterprises"
    },
    {
      icon: <FaUserGraduate className="text-yellow-400 text-2xl" />,
      name: "Individual Learners",
      description: "Students and professionals seeking affordable, quality online courses and certifications.",
      solutions: ["E-learning Marketplace"],
      count: "1M+ potential learners",
      opportunity: "Launching subscription-based learning platform"
    }
  ];

  // Solutions offered
  const solutions = [
    {
      icon: <FaSchool className="text-yellow-400 text-xl" />,
      name: "SchoolOS",
      description: "Complete school management system",
      clients: "Schools, Colleges"
    },
    {
      icon: <FaShoppingCart className="text-yellow-400 text-xl" />,
      name: "Dukawala",
      description: "Education commerce marketplace",
      clients: "Suppliers, Schools, Parents"
    },
    {
      icon: <FaChartBar className="text-yellow-400 text-xl" />,
      name: "Price Watch",
      description: "Competitor price intelligence",
      clients: "Retailers, E-commerce"
    },
    {
      icon: <FaGraduationCap className="text-yellow-400 text-xl" />,
      name: "Upskilling",
      description: "Corporate training & e-learning",
      clients: "Individuals, Companies"
    }
  ];

  // Why clients choose Marketshade
  const reasons = [
    {
      icon: <FaHandshake className="text-yellow-400" />,
      title: "Local Expertise",
      description: "Built by Kenyans, for Africa. We understand your challenges."
    },
    {
      icon: <FaShieldAlt className="text-yellow-400" />,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with 99.5% uptime guarantee."
    },
    {
      icon: <FaClock className="text-yellow-400" />,
      title: "24/7 Support",
      description: "Our team is always here when you need us."
    },
    {
      icon: <FaRocket className="text-yellow-400" />,
      title: "Scalable Solutions",
      description: "Start small, grow big. Our systems grow with you."
    }
  ];

  return (
    <main className="bg-gray-900 text-gray-100 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500/40 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                y: [0, -100, -200],
                x: [0, (i % 2 === 0 ? 50 : -50), (i % 2 === 0 ? 100 : -100)]
              }}
              transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.3 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={scaleUp} className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30">
              <FaUsers className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-sm font-semibold">Trusted by forward-thinking organizations</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Africa's Institutions
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              From schools to businesses, organizations trust Marketshade to power their digital transformation.
              Join the growing community of African institutions building for the future.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CURRENT CLIENTS SECTION */}
      <section className="py-20 bg-gray-800/50">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6 border border-green-500/30">
              <FaAward className="text-green-400 text-sm" />
              <span className="text-green-400 text-sm font-semibold">Our Clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who Trusts Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're proud to partner with organizations that believe in the power of technology to transform education and business in Africa.
            </p>
          </motion.div>

          {/* Current Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {currentClients.map((client, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    {client.icon}
                  </div>
                  <div>
                    <p className="text-xs text-yellow-400">{client.solution}</p>
                    <p className="text-xs text-gray-500">Client since {client.since}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{client.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{client.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <FaQuoteLeft className="text-yellow-400 text-xs mb-2 opacity-50" />
                  <p className="text-gray-300 text-sm italic">"{client.testimonial}"</p>
                </div>
              </motion.div>
            ))}
            
            {/* "Be Our Next Client" Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-yellow-500/10 to-transparent p-6 rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                <FaHandshake className="text-yellow-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Your Name Here</h3>
              <p className="text-gray-300 text-sm mb-4">Join our growing family of satisfied clients</p>
              <a 
                href="#become-client"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all"
              >
                Become a Client <FaArrowRight className="text-sm" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TARGET CLIENTS / OPPORTUNITY SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 border border-blue-500/30">
              <FaGlobeAfrica className="text-blue-400 text-sm" />
              <span className="text-blue-400 text-sm font-semibold">Market Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who We're Building For</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're targeting organizations across Africa ready to embrace digital transformation.
              Here's who we're excited to work with:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetSegments.map((segment, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  {segment.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{segment.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{segment.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {segment.solutions.map((sol, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-yellow-400 text-xs rounded-full">
                      {sol}
                    </span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <p className="text-gray-500 text-xs">Opportunity:</p>
                  <p className="text-gray-300 text-sm">{segment.opportunity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS WE OFFER */}
      <section className="py-20 bg-gray-800/50">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Solutions We Provide</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tailored technology solutions for different organizational needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{solution.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{solution.description}</p>
                <p className="text-gray-500 text-xs">Ideal for: {solution.clients}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MARKETSHADE */}
      <section className="py-20 bg-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Organizations Choose Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME A CLIENT - CTA SECTION */}
      <section id="become-client" className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <FaHandshake className="text-yellow-400 text-4xl mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join Our Client Family?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're a school, business, supplier, or individual learner — 
              we have a solution designed for you. Let's start a conversation about your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Become a Client <FaArrowRight className="text-sm" />
              </a>
              <a 
                href="/solutions"
                className="px-8 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-lg transition-all"
              >
                View Solutions
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              First consultation is on us — let's explore how we can help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Clients;