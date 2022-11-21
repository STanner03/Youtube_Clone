import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Card from "react-bootstrap/Card";
import "./VideoPage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import useAuth from "../../hooks/useAuth";
import CommentList from "../../components/CommentList/CommentList";

const VideoPage = ({ setVideoInfo, videoInfo }) => {

  const [user, token] = useAuth()

  console.log(videoInfo)

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
      <div>
        <CommentList videoInfo={videoInfo} token={token} />
      </div>
      <div><RelatedVideos setVideoInfo={setVideoInfo} videoInfo={videoInfo} /></div>
    </div>
  );
};

export default VideoPage;
