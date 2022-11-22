import './VideoPlayer.css'

const VideoPlayer = ({ videoInfo }) => {

  return (
    <div className="video-playback">
      <iframe
        id="ytplayer"
        type="text/html"
        width="1099"
        height="570"
        src={`https://www.youtube.com/embed/${videoInfo.id.videoId}?autoplay=1`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
