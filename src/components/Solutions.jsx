// src/components/Solutions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaChartBar, FaRobot, FaSearchDollar, FaCogs } from 'react-icons/fa';

const solutions = [
  {
    icon: <FaDatabase />,
    title: 'Big Data Management',
    description: 'Scalable data lakes, ETL pipelines, and governance.',
  },
  {
    icon: <FaChartBar />,
    title: 'Business Intelligence',
    description: 'Dashboards, reporting, and real-time analytics.',
  },
  {
    icon: <FaRobot />,
    title: 'AI & Predictive Analytics',
    description: 'Machine learning models for forecasting and automation.',
  },
  {
    icon: <FaSearchDollar />,
    title: 'Data Strategy Consulting',
    description: 'Roadmaps, governance, and maturity assessments.',
  },
  {
    icon: <FaCogs />,
    title: 'MLOps & Deployment',
    description: 'End-to-end model lifecycle management.',
  },
];

const Solutions = () => {
  return (
    <div className="pt-20 py-12 bg-gray-50">
      <section className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Our Data-Centric Solutions
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Empowering Kenyan businesses with cutting-edge data solutions for informed decision-making and sustainable growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="text-indigo-600 text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;