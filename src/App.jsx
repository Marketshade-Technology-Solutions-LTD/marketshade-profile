// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Main from './components/Main';
import Careers from './components/Careers';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Clients from './components/Clients';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-300 text-[17px]">
        <Header />

        {/* No padding needed - Main component handles its own top padding */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;