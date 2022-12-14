import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import VideoCard from "../../components/VideoCard/VideoCard";
import { YOUTUBE_API_KEY } from "../../utils/API_KEYS";
import "./HomePage.css";

const HomePage = ({ results, setResults, setVideoInfo }) => {
  const [searchWord, setSearchWord] = useState("learn to code");

  useEffect(() => {
    fetchSearchResults();
  }, [searchWord]);

  async function fetchSearchResults() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchWord}&key=${YOUTUBE_API_KEY}`
    );
    setResults(response.data.items);
  }

  return (
    <div>
      <SearchBar setSearchWord={setSearchWord} />
      <div className="card-spacing">
        {results.map((result, index) => {
          return (
            <VideoCard
              result={result}
              key={index}
              setVideoInfo={setVideoInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
