import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPage from '../VideoPage/VideoPage';
import axios from "axios";

const HomePage = () => {

  const [searchWord, setSearchWord] = useState('Learn How to code')
  const [results, setResults] = useState([])
  const apiKey = 'AIzaSyCzgbCFfUaToBLc9AWoOqLWPeMmeDy1q_0'

  useEffect (() => {
    fetchSearchResults();
  }, [searchWord]);

  async function fetchSearchResults() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchWord}&key=${apiKey}`);
    setResults(response.data.items)
    console.log(response.data.items)

  }

  // https://www.googleapis.com/youtube/v3/search?q=Java&key=AIzaSyCzgbCFfUaToBLc9AWoOqLWPeMmeDy1q_0

  return (
    <div>
      <SearchBar setSearchWord={setSearchWord}/>
      <VideoPage results={results}/>
    </div>
  );
};

export default HomePage;
