import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Video from './Pages/Video';
import Navbar from './Components/Navbar';
import CreateVideo from './Pages/CreateVideo';
import Footer from './Components/Footer';
import Videos from './Pages/Videos';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Redirect root path to /sign-kit/convert */}
          <Route exact path="/sign-kit/" element={<Navigate to="/sign-kit/convert" />} />
          <Route exact path="/sign-kit/home" element={<Home />} />
          <Route exact path="/sign-kit/convert" element={<Convert />} />
          <Route exact path="/sign-kit/learn-sign" element={<LearnSign />} />
          <Route exact path="/sign-kit/all-videos" element={<Videos />} />
          <Route exact path="/sign-kit/video/:videoId" element={<Video />} />
          <Route exact path="/sign-kit/create-video" element={<CreateVideo />} />
          <Route exact path="/sign-kit/feedback" element={<Feedback />} />
          <Route exact path="*" element={<Navigate to="/sign-kit/convert" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
