import React from "react";
import "./SplinePage.css"; // CSS styles remain mostly the same
import { Link } from 'react-router-dom';

const SplinePage = () => {
  return (
    <div className="spline-wrapper">
      {/* Background and iframe */}
      <div className="spline-container">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-Qj76BeB9ZRLSbtw3FxBjKWvd/"
          allowFullScreen
          className="spline-iframe"
        ></iframe>
      </div>

      {/* Foreground content */}
      <div className="spline-content">
        <h1 className="headline">
          Breaking <span className="gradient-text">Communication</span> Barriers
        </h1>
        <p className="description">
          SignSpeak transforms spoken words into sign language in real-time, creating a bridge
          between verbal and visual communication for the deaf and hard of hearing community.
        </p>
        <div className="button-group">
        <Link to="/sign-kit/convert" className="cta-button primary">
        Try SignSpeak Now
      </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SplinePage;
