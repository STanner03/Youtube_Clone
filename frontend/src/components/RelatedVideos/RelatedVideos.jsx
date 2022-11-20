import VideoCard from "../VideoCard/VideoCard";

const RelatedVideos = ({ results, setVideoInfo, fetchRelatedVideos }) => {
  return (
    <div>
      {results.map((result, index) => {
        return (
          <VideoCard
            result={result}
            key={index}
            setVideoInfo={setVideoInfo}
            fetchRelatedVideos={fetchRelatedVideos}
          />
        );
      })}
    </div>
  );
};

export default RelatedVideos;
