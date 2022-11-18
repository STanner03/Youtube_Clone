import Card from 'react-bootstrap/Card';

const VideoCard = ({ result }) => {

  const ytImage = `https://img.youtube.com/vi/${result.id.videoId}/hqdefault.jpg`


  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ytImage} />
        <Card.Body>
          <Card.Title>{result.snippet.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
};

export default VideoCard;
