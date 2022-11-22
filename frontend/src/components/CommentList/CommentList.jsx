import CommentForm from "../CommentList/CommentForm/CommentForm";
import Comment from "./Comment/Comment";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CommentList = ({ videoInfo, token, user }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsForVideo();
  }, [videoInfo.id.videoId]);

  async function fetchCommentsForVideo() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${videoInfo.id.videoId}/`
    );
    setComments(response.data);
  }
  console.log(videoInfo.id.videoId);
  console.log(comments);
  return (
    <div>
      <div>
        {user ? (
          <CommentForm
            videoInfo={videoInfo}
            token={token}
            fetchCommentsForVideo={fetchCommentsForVideo}
          />
        ) : (
          <div>
            <Link to="/login">Login to post comments...</Link>
          </div>
        )}
      </div>
      <div>
        {comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
