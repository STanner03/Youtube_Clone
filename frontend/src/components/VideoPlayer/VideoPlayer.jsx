import { useState } from "react";

const VideoPlayer = ({ videoInfo }) => {

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="1100"
        height="550"
        src={`https://www.youtube.com/embed/${videoInfo.id.videoId}?autoplay=1`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
