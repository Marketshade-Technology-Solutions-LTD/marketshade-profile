// Careers.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Typography, Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { 
  FaBriefcase, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaArrowRight, 
  FaCheckCircle, FaBuilding, FaUsers, FaRocket, FaGem, FaGraduationCap,
  FaHandshake, FaHeart, FaStar, FaLightbulb, FaQuoteLeft, FaQuoteRight,
  FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter, FaGithub
} from "react-icons/fa";

// Footer Component (matching Main.jsx and AboutUs.jsx)
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

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [view, setView] = useState("list");
  const [error, setError] = useState(null);

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

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/careers/jobs/`);
      // Filter only active jobs that haven't expired
      const activeJobs = response.data.filter(job => job.is_active && new Date(job.expires_at) > new Date());
      setJobs(activeJobs);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setError("Unable to load job listings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJob = async (jobId) => {
    try {
      const response = await axios.get(`/api/careers/jobs/${jobId}/`);
      if (!response.data.is_active || new Date(response.data.expires_at) <= new Date()) {
        setError("This job posting is no longer active");
        toast.error("This job posting is no longer active");
        setView("list");
        return;
      }
      setSelectedJob(response.data);
      setView("job_details");
      setError(null);
    } catch (err) {
      setError("Failed to fetch job details");
      toast.error("Failed to fetch job details");
    }
  };

  const parseSections = (text) => {
    if (!text) return {};
    const sections = {};
    const lines = text.split("\n");
    let currentSection = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.endsWith(":")) {
        currentSection = trimmedLine.slice(0, -1);
        sections[currentSection] = [];
      } else if (currentSection && trimmedLine.startsWith("•")) {
        const detail = trimmedLine.replace("•", "").trim();
        sections[currentSection].push(detail);
      }
    });

    return sections;
  };

  // Company perks/benefits
  const perks = [
    { icon: <FaRocket className="text-yellow-400" />, title: "Growth Opportunities", desc: "Learn, grow, and advance your career with us" },
    { icon: <FaHandshake className="text-yellow-400" />, title: "Collaborative Culture", desc: "Work with passionate, supportive teammates" },
    { icon: <FaHeart className="text-yellow-400" />, title: "Health & Wellness", desc: "Comprehensive health benefits for you and family" },
    { icon: <FaGraduationCap className="text-yellow-400" />, title: "Learning Stipend", desc: "Annual budget for courses and conferences" },
    { icon: <FaClock className="text-yellow-400" />, title: "Flexible Hours", desc: "Work-life balance with flexible scheduling" },
    { icon: <FaBuilding className="text-yellow-400" />, title: "Modern Workspace", desc: "Comfortable, well-equipped office environment" }
  ];

  // Values that make Marketshade unique
  const values = [
    "Build Africa's digital infrastructure",
    "Solve real problems for real people",
    "Ship quality code that lasts",
    "Grow together as a team",
    "Keep learning, keep improving"
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading opportunities...</p>
        </div>
      </div>
    );
  }

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
              <FaGem className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-sm font-semibold">Join the team building Africa's digital future</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Africa's Digital Infrastructure
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're looking for passionate, talented people to help us build technology 
              that transforms how African institutions operate.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONDITIONAL CONTENT - SHOWS DIFFERENT BASED ON AVAILABLE JOBS */}
      {jobs.length > 0 ? (
        // CASE 1: THERE ARE OPEN ROLES
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
                <FaBriefcase className="text-green-400 text-sm" />
                <span className="text-green-400 text-sm font-semibold">{jobs.length} Open Position{jobs.length !== 1 ? 's' : ''}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Team</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                We're looking for exceptional talent to help us build Africa's digital future. 
                Check out our open positions below and apply today.
              </p>
            </motion.div>

            {/* Job Listings Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                        <FaBriefcase className="text-yellow-400 text-xl" />
                      </div>
                      {job.is_contractor && (
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
                          Contractor
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-yellow-400 text-xs" />
                        <span>Deadline: {new Date(job.expires_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => fetchJob(job.id)}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all"
                    >
                      View Details <FaArrowRight className="ml-2 inline text-sm" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : (
        // CASE 2: NO OPEN ROLES - DIFFERENT MESSAGE
        <section className="py-20 bg-gray-800/50">
          <div className="w-full px-4 md:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full mb-6">
                <FaBriefcase className="text-gray-400 text-sm" />
                <span className="text-gray-400 text-sm">Currently Reviewing Applications</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">No Open Positions Right Now</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
                We're not actively recruiting at the moment, but we're always interested in connecting with exceptional talent.
              </p>
              <p className="text-gray-400 mb-8">
                Send us your resume and we'll reach out when something matches your skills.
              </p>
            </motion.div>

            {/* Why Join Us Section - Same for both cases */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Why Join Marketshade?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {perks.map((perk, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4 mx-auto">
                      {perk.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">{perk.title}</h4>
                    <p className="text-gray-400 text-sm">{perk.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What We Value */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <FaLightbulb className="text-yellow-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">What We Value</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {values.map((value, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-yellow-400 text-sm" />
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connect With Us - Call to Action for Future Opportunities */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-8 rounded-2xl border border-yellow-500/30">
                <FaEnvelope className="text-yellow-400 text-3xl mb-4 mx-auto opacity-70" />
                <h3 className="text-xl font-bold mb-3 text-white">Stay Connected</h3>
                <p className="text-gray-300 mb-6">
                  Even when we're not hiring, we'd love to know you're interested. 
                  Send us your resume and we'll keep it on file for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = "mailto:careers@marketshade.co.ke?subject=Future%20Opportunity%20Inquiry"}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Your Resume <FaArrowRight className="ml-2 inline" />
                  </Button>
                  <Button 
                    onClick={() => window.open("https://www.linkedin.com/company/105130100", "_blank")}
                    className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-lg transition-all"
                  >
                    Follow on LinkedIn <FaLinkedin className="ml-2 inline" />
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  careers@marketshade.co.ke
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA SECTION - Different based on job availability */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            {jobs.length > 0 ? (
              <>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Make an Impact?</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Apply to one of our open positions and join a team that's building Africa's digital future.
                </p>
                <button 
                  onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  View Open Positions
                </button>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Be the First to Know</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Join our talent community and we'll notify you when positions matching your skills become available.
                </p>
                <button 
                  onClick={() => window.location.href = "mailto:careers@marketshade.co.ke?subject=Talent%20Community%20Interest"}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Join Talent Community
                </button>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;