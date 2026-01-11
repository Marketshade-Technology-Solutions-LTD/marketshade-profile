// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaCode, FaSearch, FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaHeadset />,
    title: 'Data Strategy & Advisory',
    description: 'Align data initiatives with business goals.',
  },
  {
    icon: <FaCode />,
    title: 'Custom Development',
    description: 'Tailored data platforms and applications.',
  },
  {
    icon: <FaSearch />,
    title: 'Data Audit & Optimization',
    description: 'Identify inefficiencies and opportunities.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Training & Upskilling',
    description: 'MLOps, analytics, and data literacy programs.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Data Governance & Compliance',
    description: 'Ensure privacy and regulatory adherence.',
  },
];

const Services = () => {
  return (
    <div className="pt-20 py-12 bg-gray-50">
      <section className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Our Consulting Services
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Comprehensive support from strategy to implementation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="text-indigo-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;