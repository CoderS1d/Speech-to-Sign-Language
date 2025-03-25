import './App.css'
import React from "react";
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
import LoadAvatar  from './Pages/test';
import Con  from './Pages/Convert_fbx';
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
          <Route exact path="/sign-kit/learn-sign" element={<LearnSign />} />
          <Route exact path="/sign-kit/all-videos" element={<Videos />} />
          <Route exact path="/sign-kit/video/:videoId" element={<Video />} />
          <Route exact path="/sign-kit/create-video" element={<CreateVideo />} />
          <Route exact path="/sign-kit/feedback" element={<Feedback />} />
          <Route exact path="/sign-kit/test" element={<LoadAvatar />} />
          <Route exact path="*" element={<Navigate to="/sign-kit/home" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
