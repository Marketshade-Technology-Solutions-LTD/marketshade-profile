// AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEye, FaBullseye, FaChartLine, FaRocket, FaUsers, FaBuilding, 
  FaSchool, FaGraduationCap, FaShoppingCart, FaChartBar, FaBrain,
  FaHandshake, FaGlobeAfrica, FaShieldAlt, FaGem, FaArrowRight,
  FaCheckCircle, FaCalendarAlt, FaTrophy, FaLightbulb, FaHeart,
  FaStar, FaAward, FaFlag, FaCrosshairs, FaQuoteLeft, FaQuoteRight
} from 'react-icons/fa';

// Asset imports (adjust paths as needed)
import footerLogo from "../components/static/marketshade_company_icon.png";

// Footer Component (identical to Main.jsx)
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={footerLogo} alt="MarketShade Logo" className="h-16 mb-3" />
            <p className="text-gray-400 text-sm text-center md:text-left">Empowering Kenyan businesses through smart technology solutions since 2024</p>
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

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Company values
  const values = [
    {
      icon: <FaBuilding className="text-yellow-400 text-2xl" />,
      title: "Local First",
      description: "We build for African businesses, understanding local challenges, regulations, and opportunities. No imported solutions that don't fit."
    },
    {
      icon: <FaGem className="text-yellow-400 text-2xl" />,
      title: "Modular by Design",
      description: "Start with what you need, add more as you grow. Our platform scales with your institution, not against it."
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-2xl" />,
      title: "Built to Last",
      description: "Reliable, secure, and always improving. We're in this for the long haul with our clients."
    },
    {
      icon: <FaBrain className="text-yellow-400 text-2xl" />,
      title: "Intelligence First",
      description: "Every feature is designed to give you insights, not just data. Make better decisions, faster."
    },
    {
      icon: <FaHandshake className="text-yellow-400 text-2xl" />,
      title: "Partnership Mindset",
      description: "We succeed when you succeed. Long-term relationships over short-term transactions."
    },
    {
      icon: <FaGlobeAfrica className="text-yellow-400 text-2xl" />,
      title: "Pan-African Vision",
      description: "Starting in Kenya, expanding across Africa. Building infrastructure that empowers the continent."
    }
  ];

  // Company milestones
  const milestones = [
    { year: "Sept. 2024", title: "Company Founded", description: "Marketshade Technology Solutions Ltd established in Nairobi, Kenya" },
    { year: "Apr. 2025", title: "First Product Launch", description: "Launched Dukawala marketplace and Price Watch intelligence platform" },
    { year: "July 2025", title: "Product Expansion", description: "Price Watch enters development as a client tool, focusing on solving retail business operational challenges; client abandons the solution mid journey. Marketshade turns it into a Software as a Service" },
    { year: "Jan 2026", title: "Product Expansion", description: "SchoolOS enters development, focusing on solving school operational challenges, developing e-learning marketplace inside the SchoolOS" },
    { year: "March 2026", title: "Revenue Generation", description: "Achieved KSh 30,000 monthly recurring revenue milestone from the upskilling arm" },
    { year: "May 2026", title: "First School Onboarded", description: "SchoolOS goes live with first institutional client" },
    { year: "2025", title: "Scaling Phase", description: "Expanding to 5+ schools, " }
  ];

  // Phase timeline
  const phases = [
    { phase: "Phase 1", title: "School Operations", description: "Dominate school administration with integrated academic and financial management", icon: <FaSchool />, status: "current" },
    { phase: "Phase 2", title: "Digital Learning", description: "Layer e-learning monetization with course marketplace and certification", icon: <FaGraduationCap />, status: "upcoming" },
    { phase: "Phase 3", title: "Institutional Commerce", description: "Enable procurement marketplace for uniforms, supplies, and educational materials", icon: <FaShoppingCart />, status: "upcoming" },
    { phase: "Phase 4", title: "Intelligence Infrastructure", description: "Extend price intelligence and analytics across multiple sectors", icon: <FaChartBar />, status: "planned" }
  ];

  return (
    <main className="bg-gray-900 text-gray-100 overflow-x-hidden">
      
      {/* HERO SECTION - with increased top padding to account for header */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl"></div>
          
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
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={scaleUp} className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30">
              <FaGem className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-sm font-semibold">Building Africa's Institutional Digital Infrastructure</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              We're on a mission to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                digitize Africa's institutions
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Marketshade Technology Solutions Ltd builds modular, scalable digital systems 
              that help schools and businesses work smarter, not harder. We're a Kenyan company 
              with a Pan-African vision.
            </motion.p>
            
            <motion.div variants={scaleUp} className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('mission-vision').scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Our Mission <FaArrowRight className="text-sm" />
              </button>
              <button 
                onClick={() => document.getElementById('partner').scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-lg transition-all"
              >
                Partner With Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION SECTION - Dark theme */}
      <section id="mission-vision" className="py-20 bg-gray-800/50">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all group"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition"
              >
                <FaBullseye className="text-yellow-400 text-2xl" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                To build Africa's institutional digital infrastructure by creating integrated, 
                affordable, and localized technology solutions that empower schools, businesses, 
                and institutions to operate efficiently, make data-driven decisions, and scale 
                sustainably.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-yellow-400 font-semibold">Start narrow. Build deep. Expand strategically.</p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all group"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition"
              >
                <FaEye className="text-yellow-400 text-2xl" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                To become the digital backbone for African institutions—where every school, 
                college, and organization can access world-class technology that is affordable, 
                modular, and built specifically for the African context.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-yellow-400 font-semibold">Kenya → East Africa → Africa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3">What We Believe</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Values</h3>
            <p className="text-gray-400 text-lg">The principles that guide everything we build and every decision we make.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC PHASES */}
      <section className="py-20 bg-gray-800/50">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3">Our Roadmap</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Strategic Expansion Phases</h3>
            <p className="text-gray-400 text-lg">Start narrow. Build deep. Expand strategically.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 mb-6 p-6 rounded-xl border transition-all ${
                  phase.status === 'current' 
                    ? 'bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/50 shadow-lg' 
                    : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="md:w-1/4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      phase.status === 'current' ? 'bg-yellow-500/20' : 'bg-gray-700'
                    }`}>
                      <div className={phase.status === 'current' ? 'text-yellow-400' : 'text-gray-500'}>
                        {phase.icon}
                      </div>
                    </div>
                    <div>
                      <span className={`text-sm font-bold ${phase.status === 'current' ? 'text-yellow-400' : 'text-gray-500'}`}>
                        {phase.phase}
                      </span>
                      <h4 className="text-xl font-bold text-white">{phase.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">{phase.description}</p>
                </div>
                <div className="md:w-1/6 text-right">
                  {phase.status === 'current' && (
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full animate-pulse">
                      Current Phase
                    </span>
                  )}
                  {phase.status === 'upcoming' && (
                    <span className="inline-block px-3 py-1 bg-gray-700 text-gray-400 text-xs font-bold rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / IMPACT SECTION */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {[
              { value: "1+", label: "Schools Onboarded", sub: "Growing steadily" },
              { value: "KSh 30K", label: "Monthly Recurring Revenue", sub: "From training & subscriptions" },
              { value: "5+", label: "Pipeline Schools", sub: "Next 3 months" },
              { value: "4", label: "Product Verticals", sub: "SchoolOS • Dukawala • Price Watch • Upskilling" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring" }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/90 font-semibold">{stat.label}</div>
                <div className="text-xs text-white/70">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY / MILESTONES */}
      <section className="py-20 bg-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3">Our Journey</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Marketshade Story</h3>
            <p className="text-gray-400 text-lg">From a vision to building Africa's institutional digital infrastructure</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-transparent transform -translate-x-1/2 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2">
                  <div className={`bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 shadow-lg hover:shadow-xl transition ${
                    index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                        <FaCalendarAlt className="text-yellow-400" />
                      </div>
                      <span className="text-yellow-400 font-bold">{milestone.year}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1 text-white">{milestone.title}</h4>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-5 w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT ECOSYSTEM */}
      <section className="py-20 bg-gray-800/50">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3">Our Ecosystem</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">One Platform. Multiple Solutions.</h3>
            <p className="text-gray-400 text-lg">Modular products that work together seamlessly</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "SchoolOS", description: "Complete school management system for academics, finance, and administration", icon: <FaSchool /> },
              { name: "Dukawala", description: "Education commerce marketplace connecting schools, parents, and suppliers", icon: <FaShoppingCart /> },
              { name: "Price Watch", description: "Real-time competitor price monitoring and intelligence platform", icon: <FaChartBar /> },
              { name: "Marketshade Upskilling", description: "Corporate training and e-learning marketplace with certification", icon: <FaGraduationCap /> }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleUp}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/20 transition">
                  <div className="text-yellow-400 text-3xl">{product.icon}</div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">{product.name}</h4>
                <p className="text-gray-400 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section id="partner" className="py-20 bg-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3">Why Partner With Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Invest in Africa's Digital Future</h3>
            <p className="text-gray-400 text-lg">We're seeking strategic partners to accelerate our growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <FaRocket className="text-yellow-400 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-white">Commercial Acceleration</h4>
              </div>
              <ul className="space-y-3">
                {["Product completion and enhancement", "School acquisition and market expansion", "Marketplace deployment and vendor onboarding", "Customer success infrastructure"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-400 text-sm mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <FaHandshake className="text-yellow-400 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-white">Strategic Partnership</h4>
              </div>
              <ul className="space-y-3">
                {["Commercial execution expertise", "Operational structuring support", "Strategic scale-up guidance", "Growth governance and oversight"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-400 text-sm mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Build With Us?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're a school looking for better systems, a partner wanting to invest, 
              or a business needing technology solutions—let's talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl">
                Partner With Marketshade
              </button>
              <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-lg transition-all">
                View Investor Deck
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-6">First consultation is on us — no obligation, no pressure.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;