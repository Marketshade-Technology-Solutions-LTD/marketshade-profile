// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-20 py-12 bg-gray-50">
      <section className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Get in touch for any inquiries or support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Details</h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="font-bold mr-2">Location:</span>
                P.O BOX 23445 - 00200, Kangundo Road, Nairobi, Kenya
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Email:</span>
                <a
                  href="mailto:support@marketshade.co.ke"
                  className="text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  support@marketshade.co.ke
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Phone:</span>
                <a
                  href="tel:+254712960239"
                  className="text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  +254 712 960 239
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Open Hours:</span>
                Monday-Friday: 8:00AM - 5:00PM
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form action="mailto:support@marketshade.co.ke" method="post" encType="text/plain">
              <div className="mb-4">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="Message"
                  placeholder="Message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;