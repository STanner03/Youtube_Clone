import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Card from "react-bootstrap/Card";
import "./VideoPage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import useAuth from "../../hooks/useAuth";
import CommentList from "../../components/CommentList/CommentList";

const VideoPage = ({ setVideoInfo, videoInfo }) => {
  const [user, token] = useAuth();

  return (
    <div className="video-page">
      <div className="video-content">
        <Card className="video-container">
          <VideoPlayer videoInfo={videoInfo} />
          <Card.Body className="video-info">
            <Card.Title>{videoInfo.snippet.title}</Card.Title>
            <Card.Text> {videoInfo.snippet.description}</Card.Text>
          </Card.Body>
        </Card>
        <CommentList videoInfo={videoInfo} token={token} user={user} />
      </div>
      <div className="related-videos">
        <RelatedVideos setVideoInfo={setVideoInfo} videoInfo={videoInfo} />
      </div>
    </div>
  );
};

export default VideoPage;
