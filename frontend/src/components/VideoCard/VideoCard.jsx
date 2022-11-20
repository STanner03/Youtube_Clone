import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ result, setVideoInfo, fetchRelatedVideos }) => {
  const ytImage = `https://img.youtube.com/vi/${result.id.videoId}/hqdefault.jpg`;

  let navigate = useNavigate();

  function handleSelection(event) {
    event.preventDefault();
    navigate("../video", { replace: true });
    setVideoInfo(result)
    fetchRelatedVideos()
  }

  return (
    <div className="video-card" onClick={handleSelection}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ytImage} />
        <Card.Body>
          <Card.Title>{result.snippet.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VideoCard;
