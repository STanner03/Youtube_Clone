import CommentForm from "../CommentList/CommentForm/CommentForm";
import Comment from "./Comment/Comment";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({videoInfo, token, user}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsForVideo();
    },[comments])


    async function fetchCommentsForVideo() {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoInfo.id.videoId}`);
        setComments(response.data)
    }


    return ( 
    <div>
        <CommentForm videoInfo={videoInfo} token={token} />
        <div>
          {comments.map((comment, i) => {
            return (
                <Comment key={i} user={user} comment={comment}/>
            );
          })}
        </div>
    </div> );
}
 
export default CommentList;