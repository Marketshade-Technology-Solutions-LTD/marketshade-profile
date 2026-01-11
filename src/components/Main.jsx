import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaArrowRight, 
  FaNetworkWired, FaChartLine, FaShieldAlt, FaClock, FaUsers, FaBuilding,
  FaCheckCircle, FaChartBar, FaCogs, FaDatabase, FaMobileAlt, FaGraduationCap
} from 'react-icons/fa';

// Asset Imports
import landingPageImage from "../components/static/landing-page-image.png";
import analyticsDashboardImage from "../components/static/analytics-dashboard.jpg";
import customizedSoftwareImage from "../components/static/customized-software.jpg";
import misImage from "../components/static/mis.png";
import biAndAnalyticsImage from "../components/static/bi-and-analytics.jpg";
import aiAndBigDataImage from "../components/static/ai-big-data.jpg";
import crmImage from "../components/static/crm.png";
import erpImage from "../components/static/erp.png";
import mobileAppImage from "../components/static/mobile-app.png";
import coreBankingSolutionsImage from "../components/static/core-banking-solutions.png";
import marketshadeUpskillingImage from "../components/static/marketshade-upskilling.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Main = () => {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("");
  
  // Updated titles focusing on operational value
  const titles = [
    "Streamline Operations with Intelligent Technology.",
    "Boost Productivity with Custom Business Solutions.",
    "Transform Data into Strategic Decisions for Growth.",
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % titles.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");
  
    // Use FormData to extract values easily
    const target = e.target;
    const formData = {
      Name: target.Name.value,
      Email: target.Email.value,
      PhoneNumber: target.PhoneNumber.value,
      Organization: target.Organization.value,
      CurrentChallenge: target.CurrentChallenge.value, // This must match the 'name' attribute
      Message: target.Message.value,
    };
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwd_C1l46dgeqB4tdQUS_njeoPal7xcU4SaI-zGcPehKM1--YMYfWeoQXHT-5QOT4mHkg/exec', {
        method: 'POST',
        mode: 'no-cors', // Keep no-cors for Google Apps Script
        body: JSON.stringify(formData),
      });
      setStatus("Thank you! We'll contact you within 24 hours.");
      target.reset();
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("Submission error. Please try again or call +254 712 960 239");
    }
  };

  // Kenyan companies we serve (for credibility)
  const kenyanClients = [
    "Financial Institutions", "Manufacturing", "Retail Chains", "Healthcare", "Logistics", "Agriculture"
  ];

  return (
    <main className="bg-white text-gray-900 selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* SUBTLE BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 to-transparent"></div>
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(234, 179, 8, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 1. HERO SECTION - Clean & Professional */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 z-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 text-xs font-bold uppercase tracking-widest mb-8"
              >
              </motion.div>
              
              <div className="min-h-[220px] sm:min-h-[160px] md:min-h-[240px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-gray-900"
                  >
                    {titles[index].split(" ").map((word, i) => (
                      <span key={i} className={word.toLowerCase().includes("operations") || word.toLowerCase().includes("productivity") ? "text-yellow-600" : "text-gray-900"}>
                        {word}{" "}
                      </span>
                    ))}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="text-gray-600 text-lg md:text-xl max-w-2xl mt-8 mb-10 leading-relaxed"
              >
                <span className="text-gray-900 font-bold">Marketshade</span> builds technology solutions that <span className="text-yellow-600 font-semibold">reduce costs, increase efficiency, and drive growth</span> for Kenyan businesses. Proven results in manufacturing, finance, retail, and logistics.
              </motion.p>

              {/* Business Impact Stats */}
              <div className="flex flex-wrap gap-8 mb-12">
                {[
                  { value: "40%", label: "Avg. Efficiency Gain", icon: <FaChartLine className="text-yellow-600" /> },
                  { value: "24/7", label: "Support Available", icon: <FaClock className="text-yellow-600" /> },
                  { value: "KES 0", label: "Upfront Consultation", icon: <FaCheckCircle className="text-yellow-600" /> }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-all shadow-[0_10px_30px_rgba(234,179,8,0.3)] flex items-center gap-3 group">
                Schedule Free Consultation <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <motion.div 
                className="lg:w-1/2 relative flex justify-center items-start lg:-mt-20" 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
              {/* Glow effect - made larger to match bigger image */}
              <div className="absolute inset-0 bg-yellow-100/40 blur-[120px] rounded-full scale-150"></div>
              
              <img
                src={landingPageImage}
                alt="Operations Dashboard"
                className="relative z-10 w-full h-auto lg:scale-110 xl:scale-125 object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              />
              
              {/* Industry Badges - Adjusted position for larger image */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-yellow-100 rounded-2xl px-6 py-3 flex gap-4 shadow-lg z-20">
                {kenyanClients.slice(0, 3).map((industry, i) => (
                  <span key={i} className="text-xs font-bold text-yellow-700 whitespace-nowrap">{industry}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS FOR OPERATIONS HEADS - Clean White Cards */}
      <section id="solutions" className="py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-yellow-600 font-bold tracking-[0.4em] uppercase text-sm mb-4">Solutions That Drive Results</h2>
            <h3 className="text-5xl font-bold leading-tight mb-6 text-gray-900">Built for <span className="text-gray-600">Kenyan Business Challenges</span></h3>
            <p className="text-gray-600 text-lg">We solve real operational problems faced by Kenyan enterprises: manual processes, data silos, and scalability limitations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: biAndAnalyticsImage, 
                title: "Real-Time Operations Dashboards", 
                desc: "Monitor KPIs, track performance, and make data-driven decisions instantly.",
                features: ["Live Inventory Tracking", "Cost Analysis", "Performance Metrics"],
                icon: <FaChartBar className="text-yellow-600" />
              },
              { 
                img: erpImage, 
                title: "ERPs for Streamlined Business Processes", 
                desc: "Automate HR, finance, and inventory with Kenya-compliant systems.",
                features: ["Multi-Currency Support", "Tax Automation", "Local Compliance"],
                icon: <FaCogs className="text-yellow-600" />
              },
              { 
                img: aiAndBigDataImage, 
                title: "AI & Big Data for Predictive Analytics", 
                desc: "Forecast demand, optimize supply chain, and reduce operational risks.",
                features: ["Demand Forecasting", "Risk Analysis", "Market Insights"],
                icon: <FaDatabase className="text-yellow-600" />
              },
              { 
                img: crmImage, 
                title: "CRMs for Customer-centric Operations", 
                desc: "Unify customer data and automate sales processes across channels.",
                features: ["360° Customer View", "Sales Automation", "Service Management"],
                icon: <FaUsers className="text-yellow-600" />
              },
              { 
                img: mobileAppImage, 
                title: "Field Operations Mobile Apps", 
                desc: "Mobile solutions for sales teams, field agents, and remote monitoring.",
                features: ["Offline Capability", "GPS Tracking", "Real-time Sync"],
                icon: <FaMobileAlt className="text-yellow-600" />
              },
              { 
                img: marketshadeUpskillingImage, 
                title: "Upskilling & Corporate Training", 
                desc: "Train your team on systems we implement for maximum ROI.",
                features: ["Hands-on Training", "Support Documentation", "Best Practices"],
                icon: <FaGraduationCap className="text-yellow-600" />
              }
            ].map((sol, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-yellow-200 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    {sol.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors">{sol.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{sol.desc}</p>
                
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sol.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full border border-yellow-100">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT METRICS - Clean Design */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">Proven Impact for Kenyan Businesses</h3>
            <p className="text-gray-600">Measurable results delivered to operations teams across Kenya</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2.5x", label: "Faster Reporting", desc: "From weekly to real-time", icon: <FaClock className="text-yellow-600" /> },
              { value: "60%", label: "Process Automation", desc: "Reduced manual work", icon: <FaCogs className="text-yellow-600" /> },
              { value: "45%", label: "Cost Reduction", desc: "Operational efficiency", icon: <FaChartLine className="text-yellow-600" /> },
              { value: "99.5%", label: "System Uptime", desc: "Reliable operations", icon: <FaShieldAlt className="text-yellow-600" /> }
            ].map((metric, i) => (
              <div key={i} className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-yellow-200 transition-all">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl font-black text-yellow-600 mb-2">{metric.value}</div>
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT - Clean Professional Form */}
      <section id="contact" className="py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Ready to Optimize Your Operations?</h2>
            <p className="text-gray-600 text-xl">Book a free 30-minute consultation with our operations specialists</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <FaClock className="text-yellow-600" /> Fast Implementation Process
                </h4>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Needs Assessment", desc: "Free 30-min consultation" },
                    { step: "2", title: "Solution Design", desc: "Tailored to your operations" },
                    { step: "3", title: "Phased Rollout", desc: "Minimal business disruption" },
                    { step: "4", title: "Training & Support", desc: "Your team empowered" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center font-bold text-sm text-white">
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

              <div className="space-y-6">
                {[
                  { icon: <FaMapMarkerAlt className="text-yellow-600" />, label: "Office Address", val: "P.O BOX 23445 - 00200, Nairobi - Kenya" },
                  { icon: <FaEnvelope className="text-yellow-600" />, label: "Email", val: "infodesk@marketshade.co.ke" },
                  { icon: <FaPhoneAlt className="text-yellow-600" />, label: "Direct Operations Line", val: "+254 712 960 239" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl text-gray-900 font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Schedule Your Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input name="Name" type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-gray-500" required />
                    </div>
                    <div>
                      <input name="PhoneNumber" type="text" placeholder="Direct Phone" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-gray-500" required />
                    </div>
                  </div>
                  <input name="Email" type="email" placeholder="Business Email" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-gray-500" required />
                  <input name="Organization" type="text" placeholder="Organization Name" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-gray-500" required />
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Current Challenge</label>
                    <select name="CurrentChallenge" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all text-gray-900">
                      <option value="">Select primary challenge</option>
                      <option value="manual-processes">Manual Processes</option>
                      <option value="data-silos">Data Silos</option>
                      <option value="scaling-issues">Scaling Issues</option>
                      <option value="reporting-delays">Delayed Reporting</option>
                      <option value="system-integration">System Integration</option>
                    </select>
                  </div>
                  
                  <textarea name="Message" rows="3" placeholder="Briefly describe your operational needs..." className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-gray-500 resize-none" required></textarea>
                  
                  <button type="submit" className="ml-auto block w-1/2 py-3 bg-yellow-600 text-white font-black rounded-xl hover:bg-yellow-500 transition-all shadow-lg active:scale-[0.98] text-sm">
                    Schedule Free Consultation
                  </button>
                  {status && <p className="text-center text-yellow-600 text-sm font-bold tracking-tight">{status}</p>}
                  <p className="text-center text-gray-500 text-xs mt-4">We'll contact you within 24 hours to schedule</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-white text-center relative z-10 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-left">
              <h2 className="text-2xl font-black mb-2 tracking-widest text-gray-900 uppercase">Marketshade</h2>
              <p className="text-gray-600 text-sm">Technology Solutions for Kenyan Operations</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {kenyanClients.map((industry, i) => (
                <span key={i} className="text-sm text-gray-600 px-4 py-2 bg-gray-100 rounded-full">
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-xs tracking-widest uppercase">© 2026 Marketshade Technology Solutions Ltd • Nairobi, Kenya</p>
        </div>
      </footer>
    </main>
  );
};

export default Main;