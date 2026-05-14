// Blogs.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaNewspaper, FaRss, FaBell, FaEnvelope, FaTwitter, FaLinkedin, 
  FaArrowRight, FaGem, FaClock, FaUserTie, FaLightbulb, FaChartLine,
  FaSchool, FaShoppingCart, FaChartBar, FaGraduationCap, FaQuoteLeft,
  FaQuoteRight, FaCheckCircle, FaCalendarAlt, FaSearch, FaTag
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

const Blogs = () => {
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

  // Topics we'll write about (coming soon)
  const upcomingTopics = [
    { 
      icon: <FaSchool className="text-yellow-400 text-xl" />,
      title: "School Management Best Practices",
      description: "Tips and strategies for efficient school administration in Kenya",
      category: "EdTech"
    },
    { 
      icon: <FaChartLine className="text-yellow-400 text-xl" />,
      title: "Digital Transformation in Education",
      description: "How technology is reshaping learning institutions across Africa",
      category: "Industry Trends"
    },
    { 
      icon: <FaShoppingCart className="text-yellow-400 text-xl" />,
      title: "E-commerce for Educational Supplies",
      description: "Streamlining procurement for schools and parents",
      category: "Commerce"
    },
    { 
      icon: <FaGraduationCap className="text-yellow-400 text-xl" />,
      title: "Upskilling for the Digital Economy",
      description: "Preparing African talent for tech careers",
      category: "Career Development"
    },
    { 
      icon: <FaChartBar className="text-yellow-400 text-xl" />,
      title: "Data-Driven Decision Making",
      description: "Using analytics to improve institutional outcomes",
      category: "Analytics"
    },
    { 
      icon: <FaLightbulb className="text-yellow-400 text-xl" />,
      title: "AI in African Education",
      description: "Exploring artificial intelligence applications for learning",
      category: "Future Tech"
    }
  ];

  // Featured categories
  const categories = [
    "EdTech Insights",
    "School Management",
    "Digital Learning",
    "FinTech for Schools",
    "Industry News",
    "Success Stories"
  ];

  // Newsletter signup state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }
    
    setSubscribing(true);
    // Simulate API call - replace with actual endpoint
    setTimeout(() => {
      setSubscribed(true);
      setSubscribing(false);
      setEmail("");
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }, 1000);
  };

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
              <FaNewspaper className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-sm font-semibold">Insights from the Marketshade Team</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stories & Insights from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Africa's Tech Journey
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thought leadership, product updates, and stories about how technology is transforming 
              education and business across the continent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COMING SOON SECTION - Main content */}
      <section className="py-20 bg-gray-800/50">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full mb-6 border border-yellow-500/30">
              <FaRss className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-sm font-semibold">Launching Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Blog Is Coming</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
              We're working on insightful articles, case studies, and industry analysis. 
              Here's a sneak peek at what we'll be covering:
            </p>
          </motion.div>

          {/* Upcoming Topics Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          >
            {upcomingTopics.map((topic, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                      {topic.icon}
                    </div>
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs font-medium rounded-full">
                      {topic.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {topic.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories Preview */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-center text-white">Topics We'll Explore</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category, idx) => (
                  <motion.span
                    key={idx}
                    variants={scaleUp}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-yellow-500/20 hover:text-yellow-400 transition-all cursor-default"
                  >
                    <FaTag className="inline mr-2 text-yellow-400 text-xs" />
                    {category}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup - Build anticipation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-8 rounded-2xl border border-yellow-500/30 text-center">
              <FaBell className="text-yellow-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3 text-white">Be the First to Know</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to get notified when we publish our first articles. 
                No spam, just valuable insights delivered to your inbox.
              </p>
              
              {subscribed ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-lg p-4"
                >
                  <FaCheckCircle className="text-green-400 text-2xl mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">Thanks for subscribing!</p>
                  <p className="text-gray-400 text-sm mt-1">We'll notify you when we launch.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all text-gray-100 placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {subscribing ? "Subscribing..." : "Notify Me"}
                  </button>
                </form>
              )}
              <p className="text-gray-500 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY FOLLOW OUR BLOG SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Follow Our Blog?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FaUserTie className="text-yellow-400 text-2xl" />,
                title: "Expert Insights",
                description: "Learn from industry experts with years of experience in African tech and education."
              },
              {
                icon: <FaLightbulb className="text-yellow-400 text-2xl" />,
                title: "Practical Advice",
                description: "Actionable tips you can implement immediately in your school or business."
              },
              {
                icon: <FaChartLine className="text-yellow-400 text-2xl" />,
                title: "Industry Trends",
                description: "Stay ahead of the curve with emerging technologies and market insights."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / TESTIMONIAL PLACEHOLDER */}
      <section className="py-16 bg-gray-800/30">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <FaQuoteLeft className="text-yellow-400 text-3xl mb-4 mx-auto opacity-50" />
            <p className="text-gray-300 text-lg italic mb-6">
              "The best way to predict the future is to create it. Through our blog, we're sharing 
              the lessons we learn while building Africa's digital infrastructure."
            </p>
            <FaQuoteRight className="text-yellow-400 text-3xl mx-auto opacity-50" />
            <div className="mt-6">
              <p className="text-yellow-400 font-semibold">— Joseph Ouma</p>
              <p className="text-gray-500 text-sm">Founder & CEO, Marketshade</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Something Great Is Coming</h2>
            <p className="text-gray-300 text-lg mb-8">
              We're putting together content that will help you navigate the digital transformation 
              in education and business. Stay tuned!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => window.open("https://x.com/marketshade_LTD", "_blank")}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-700 flex items-center gap-2"
              >
                <FaTwitter /> Follow on X
              </button>
              <button 
                onClick={() => window.open("https://www.linkedin.com/company/105130100", "_blank")}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-700 flex items-center gap-2"
              >
                <FaLinkedin /> Follow on LinkedIn
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;