import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import VideoCard from "../../components/VideoCard/VideoCard";
import { YOUTUBE_API_KEY } from "../../utils/API_KEYS";
import { useParams, useNavigate } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {

  const [searchWord, setSearchWord] = useState('Learn How to code')
  const [results, setResults] = useState([])


  useEffect (() => {
    fetchSearchResults();
  }, [searchWord]);

  async function fetchSearchResults() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=6&q=${searchWord}&key=${YOUTUBE_API_KEY}`);
    setResults(response.data.items)
    console.log(response.data.items)

  }

  // https://www.googleapis.com/youtube/v3/search?q=Java&key=AIzaSyCzgbCFfUaToBLc9AWoOqLWPeMmeDy1q_0

  return (
    <div>
      <SearchBar setSearchWord={setSearchWord}/>
      <div className="card-spacing">
        {results.map((result, index) => {
          return (<VideoCard result={result} key={index}/>);
        })}
      </div>
    </div>
  );
};

export default HomePage;
