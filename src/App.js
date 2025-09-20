import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Convert from './Pages/Convert';
import SplinePage from './Pages/SplinePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Features from './Pages/Features'; // 

function App() {
  useEffect(() => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    featureCards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
      observer.observe(card);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<SplinePage />} />
          <Route exact path="/home" element={<SplinePage />} />
          <Route exact path="/sign-kit/home" element={<Navigate to="/home" />} />
          <Route exact path="/convert" element={<Convert />} />
          <Route exact path="/sign-kit/convert" element={<Navigate to="/convert" />} />
          <Route exact path="/features" element={<Features />} /> 
          <Route exact path="/sign-kit/features" element={<Navigate to="/features" />} />
          <Route exact path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;