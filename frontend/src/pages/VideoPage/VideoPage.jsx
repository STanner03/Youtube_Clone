import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Card from "react-bootstrap/Card";
import './VideoPage.css'

const VideoPage = ({ videoInfo }) => {

  return (
    <div>
        <Card className="video-container">
            <VideoPlayer videoInfo={videoInfo} />
            <Card.Body className="video-info">
                <Card.Title>{videoInfo.snippet.title}</Card.Title>
                <Card.Text> {videoInfo.snippet.description}</Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
};

export default VideoPage;
