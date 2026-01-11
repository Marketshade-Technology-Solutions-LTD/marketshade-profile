// src/App.jsx (Updated to single scrollable page)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Main from './components/Main'; // New component for all sections in one page
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;