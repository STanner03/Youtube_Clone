import React, { useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = ({ results }) => {
  return (
    <div>
      <VideoCard results={results} />
      <VideoPlayer />
    </div>
  );
};

export default VideoPage;
