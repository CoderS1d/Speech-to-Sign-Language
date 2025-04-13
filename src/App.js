import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import SplinePage from './Pages/SplinePage';
import LearnSign from './Pages/LearnSign';
import Video from './Pages/Video';
import Navbar from './Components/Navbar';
import CreateVideo from './Pages/CreateVideo';
import Footer from './Components/Footer';
import Videos from './Pages/Videos';
import Feedback from './Pages/Feedback';
import Test from './Pages/Test';
import Features from './Pages/Features'; // Add this import

function App() {
  // Add animation effect for features cards
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
          {/* Redirect root path to /sign-kit/convert */}
          <Route exact path="/sign-kit/" element={<Navigate to="/sign-kit/convert" />} />
          <Route exact path="/sign-kit/home" element={<SplinePage />} />
          <Route exact path="/sign-kit/convert" element={<Convert />} />
          <Route exact path="/sign-kit/learn-sign" element={<LearnSign />} />
          <Route exact path="/sign-kit/all-videos" element={<Videos />} />
          <Route exact path="/sign-kit/video/:videoId" element={<Video />} />
          <Route exact path="/sign-kit/create-video" element={<CreateVideo />} />
          <Route exact path="/sign-kit/test" element={<Test />} />
          <Route exact path="/sign-kit/features" element={<Features />} /> {/* Add this route */}
          <Route exact path="*" element={<Navigate to="/sign-kit/home" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;