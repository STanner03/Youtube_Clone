import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPage from '../VideoPage/VideoPage';
import axios from "axios";

const HomePage = () => {

  const [selectedVideo, setSelectedVideo] = useState('Learn How to code')

  return (
    <div>
      <SearchBar setSelectedVideo={setSelectedVideo}/>
      <VideoPage selectedVideo={selectedVideo}/>
    </div>
  );
};

export default HomePage;
