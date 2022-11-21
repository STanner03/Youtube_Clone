import VideoCard from "../VideoCard/VideoCard";
import { useState, useEffect } from "react";
import { YOUTUBE_API_KEY } from "../../utils/API_KEYS";
import axios from "axios";



const RelatedVideos = ({ setVideoInfo, videoInfo }) => {

  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect (() => {
    fetchRelatedVideos();
  }, [videoInfo]);

  async function fetchRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&relatedToVideoId=${videoInfo.id.videoId}&type=video&key=${YOUTUBE_API_KEY}`
    );
    setRelatedVideos(response.data.items);
    console.log(response.data.items);
  }



  return (
    <div>
      {relatedVideos.map((result, index) => {
        return (
          <VideoCard
            result={result}
            key={index}
            setVideoInfo={setVideoInfo}
          />
        );
      })}
    </div>
  );
};

export default RelatedVideos;
