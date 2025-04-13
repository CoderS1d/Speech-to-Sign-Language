// Pages/Features.js
import React from 'react';
import './Features.css'; // We'll create this CSS file next

const Features = () => {
  return (
    <div className="features-container">
      <header>
        <h1>Powerful Features</h1>
        <p className="subtitle">Discover how SignSpeak is revolutionizing communication for the deaf and hard of hearing community.</p>
      </header>
      
      <div className="features-grid">
        <div className="feature-card">
          
          <h3 className="feature-title">Offline Mode</h3>
          <p className="feature-desc">Core functionalities are available offline so users can communicate even without an internet connection.</p>
        </div>
        
        <div className="feature-card">
          
          <h3 className="feature-title">Text-to-Sign Mode</h3>
          <p className="feature-desc">Easily convert typed text into sign language animations, great for quiet environments or those without a microphone.</p>
        </div>
        
        <div className="feature-card">
          
          <h3 className="feature-title">Speed Adjustment</h3>
          <p className="feature-desc">Easily control the speed of avatar animations to match user preferences or learning pace—slow it down for clarity or speed it up for fluent conversations.</p>
        </div>
        
        <div className="feature-card">
          
          <h3 className="feature-title">Voice Recognition</h3>
          <p className="feature-desc">Highly accurate speech recognition works even in noisy environments.</p>
        </div>
        
        <div className="feature-card">
          
          <h3 className="feature-title">AI-Powered</h3>
          <p className="feature-desc">Advanced machine learning algorithms ensure accurate and natural sign language expressions.</p>
        </div>
        
        <div className="feature-card">
          
          <h3 className="feature-title">Educational Tool</h3>
          <p className="feature-desc">Learn sign language through interactive lessons and practice sessions.</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Features;