import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Card from "react-bootstrap/Card";
import "./VideoPage.css";
import axios from "axios";
import { YOUTUBE_API_KEY } from "../../utils/API_KEYS";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { useState } from "react";
import { useEffect } from "react";

const VideoPage = ({ results, setResults, setVideoInfo, videoInfo }) => {
    // const [relatedVideos, setRelatedVideos] = useState({});
  // useEffect(() => {
  //   fetchRelatedVideos();
  // }, [videoInfo]);

  console.log(videoInfo)

  async function fetchRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?path=snippet&maxResults=6&relatedToVideoId=${videoInfo.id.videoId}&type=video&key=${YOUTUBE_API_KEY}`
    );
    setResults(response.data.items);
    console.log(response.data.items);
  }

  return (
    <div>
      <div>
        <Card className="video-container">
          <VideoPlayer videoInfo={videoInfo} />
          <Card.Body className="video-info">
            <Card.Title>{videoInfo.snippet.title}</Card.Title>
            <Card.Text> {videoInfo.snippet.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div><RelatedVideos results={results} setVideoInfo={setVideoInfo} fetchRelatedVideos={fetchRelatedVideos} /></div>
    </div>
  );
};

export default VideoPage;
