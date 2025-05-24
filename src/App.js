import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUs />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
