import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Convert from './Pages/Convert';
import SplinePage from './Pages/SplinePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Redirect root path to /sign-kit/convert */}
          <Route exact path="/sign-kit/" element={<Navigate to="/sign-kit/convert" />} />
          <Route exact path="/sign-kit/home" element={<SplinePage />} />
          <Route exact path="/sign-kit/convert" element={<Convert/>} />
          <Route exact path="*" element={<Navigate to="/sign-kit/home" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
