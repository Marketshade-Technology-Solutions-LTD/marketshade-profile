// src/components/About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const About = () => {
  const navigate = useNavigate();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-20 pb-12 bg-gray-50">
      {/* About Intro */}
      <motion.section
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Marketshade</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover the story behind Marketshade, Kenya’s leading e-commerce platform, and how we’re transforming the way buyers and sellers connect across the region.
          </p>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        className="bg-white p-8 rounded-xl shadow-md mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-4">
            Marketshade Technology Solutions Ltd. is a proudly Kenyan e-commerce platform dedicated to bridging the gap between buyers and sellers across the region. Based in Nairobi, we provide a dynamic marketplace where consumers can discover a wide range of products, from everyday essentials to unique finds, all while ensuring seamless transactions through secure payment solutions and reliable logistics support.
          </p>
          <p className="text-gray-700">
            Since our inception, we’ve been committed to empowering local businesses and enhancing the shopping experience for our customers, making Marketshade a trusted name in Kenya’s digital marketplace.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
            <p className="text-gray-700">
              To connect buyers and sellers in a transparent, secure, and efficient marketplace, fostering economic growth and opportunity across Kenya.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
            <p className="text-gray-700">
              To be the leading e-commerce platform in Africa, empowering communities through innovation, trust, and accessibility.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="bg-white p-8 rounded-xl shadow-md mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h4 className="text-2xl font-semibold mb-4">Our Core Values</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Transparency', desc: 'We believe in clear and open communication, ensuring trust in every transaction.' },
              { title: 'Customer Satisfaction', desc: 'Your experience matters—we prioritize your needs with every step.' },
              { title: 'Innovation', desc: 'We embrace technology to deliver smarter, faster, and more efficient solutions.' },
              { title: 'Integrity', desc: 'We uphold the highest ethical standards, ensuring fairness and compliance with Kenyan laws.' },
              { title: 'Community Empowerment', desc: 'We support local businesses and communities, driving economic growth across the region.' },
            ].map((value, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className="p-4 border border-gray-200 rounded-md shadow-sm">
                <h5 className="font-medium mb-2">{value.title}</h5>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Get in Touch */}
      <motion.section
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-700 mb-4">
            Have questions or want to learn more? Reach out to us—we’d love to hear from you!
          </p>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@marketshade.co.ke" className="text-yellow-600 hover:text-yellow-800">
                support@marketshade.co.ke
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+254712960239" className="text-yellow-600 hover:text-yellow-800">
                +254 712 960 239
              </a>
            </li>
            <li>
              <strong>Address:</strong> Marketshade Technology Solutions Ltd., P.O BOX 23445 - 00200, Kangundo Road, Nairobi, Kenya
            </li>
          </ul>
          <button
            onClick={() => navigate('/careers')}
            className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-yellow-400 transition-colors"
          >
            Explore Career Opportunities
          </button>
        </div>
      </motion.section>

      {/* Community & Social Links */}
      <motion.section
        className="text-center bg-gray-200 p-8 rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h4 className="text-2xl font-semibold mb-4">Join the Marketshade Community</h4>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Whether you’re a buyer, seller, or simply curious, there’s a place for you at Marketshade. Visit our website to start shopping, selling, or learning more about what we do.
          </p>
          <button
            onClick={() => window.open('https://www.marketshade.co.ke', '_blank')}
            className="mb-6 bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-yellow-400 transition-colors"
          >
            Visit www.marketshade.co.ke
          </button>
          <ul className="flex justify-center space-x-4 text-2xl">
            {[
              { icon: <FaXTwitter />, link: 'https://x.com/marketshade_LTD' },
              { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=61567172570382' },
              { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/105130100' },
              { icon: <FaTiktok />, link: 'https://www.tiktok.com/@marketshade_ltd?lang=en' },
              { icon: <FaInstagram />, link: 'https://www.instagram.com/marketshade_ltd/' },
              { icon: <FaWhatsapp />, link: 'https://business.whatsapp.com/' },
              { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UCGJX7TbNa-Xdw5t-lXUYeMg' },
            ].map((social, idx) => (
              <li key={idx}>
                <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default About;