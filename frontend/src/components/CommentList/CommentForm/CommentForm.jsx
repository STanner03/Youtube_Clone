import { useState } from "react";
import axios from "axios";
import './CommentForm.css'

const CommentForm = ({videoInfo, token, fetchCommentsForVideo}) => {

    const [commentBody, setCommentBody] = useState('')

    const handleComment = e => setCommentBody(e.target.value)

    async function postComment() {
        const newComment = {
            video_id: videoInfo.id.videoId,
            text: commentBody,
        };
        try {
        let response = await axios.post("http://127.0.0.1:8000/api/comments/", newComment, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        if(response.status === 201) {
            await fetchCommentsForVideo()
        }
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        postComment();
        setCommentBody('')
    }

    return ( 
        <form className="comment-protected" onSubmit={handleSubmit}>
            <div>
                <label className="comment-label"> Comment: </label>
            </div>
            <div>
                <textarea className="comment-text" placeholder="Write Comment Here..." value={commentBody} onChange={handleComment}/>
            </div>
            <div>
                <button className="post-button" type="submit"> Post Comment </button>
            </div>
        </form>
     );
}
 
export default CommentForm;