// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaUsers, FaLock } from 'react-icons/fa';

const features = [
  {
    icon: <FaShoppingBag />,
    title: 'Wide Product Range',
    description: 'Discover everyday essentials to unique finds from local sellers.',
  },
  {
    icon: <FaUsers />,
    title: 'Community Empowerment',
    description: 'Empowering local businesses and enhancing shopping experiences.',
  },
  {
    icon: <FaLock />,
    title: 'Secure Transactions',
    description: 'Seamless payments and reliable logistics for peace of mind.',
  },
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '5K+', label: 'Products Listed' },
  { value: '1M+', label: 'Transactions' },
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Intro/Welcome Section */}
      <section className="bg-yellow-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to Marketshade
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-700">
              Kenya's leading tech solutions provider empowering businesses with innovative, secure, and efficient solutions.
            </p>
            <button
              onClick={() => window.open('https://www.marketshade.co.ke', '_blank')}
              className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-yellow-400 transition-colors"
            >
              Browse for Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <div className="text-yellow-600 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-200 py-16 text-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-600">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/assets/gallery1.jpg" alt="Gallery 1" className="rounded-lg shadow-md" />
            <img src="/assets/gallery2.jpg" alt="Gallery 2" className="rounded-lg shadow-md" />
            <img src="/assets/gallery3.jpg" alt="Gallery 3" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;