// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Careers from './components/Careers';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Clients from './components/Clients';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-300">
        <Header />
        {/* No padding - Main component handles its own top spacing */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/school" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;