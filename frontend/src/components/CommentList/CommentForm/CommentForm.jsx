import { useState } from "react";
import axios from "axios";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label> Comment: </label>
            </div>
            <div>
                <textarea placeholder="Write Comment Here..." value={commentBody} onChange={handleComment}/>
            </div>
            <div>
                <button type="submit"> Post Comment </button>
            </div>
        </form>
     );
}
 
export default CommentForm;