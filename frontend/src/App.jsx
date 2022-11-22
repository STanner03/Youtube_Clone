// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import VideoPage from "./pages/VideoPage/VideoPage";
import { useState } from "react";

function App() {
  const [videoInfo, setVideoInfo] = useState({})
  const [results, setResults] = useState([]);

  return (
    <div className="main-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage results={results} setResults={setResults} setVideoInfo={setVideoInfo} />}/>
        <Route path="/video" element={<VideoPage results={results} setResults={setResults} setVideoInfo={setVideoInfo} videoInfo={videoInfo} />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
