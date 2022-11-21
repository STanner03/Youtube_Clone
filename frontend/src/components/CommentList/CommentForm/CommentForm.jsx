import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const CommentForm = ({videoInfo, token, showAllComments}) => {
    // const navigate = useNavigate()

    const [comment, setComment] = useState('')

    const handleComment = e => setComment(e.target.value)

    async function postComment() {
        const newComment = {
            video_id: videoInfo.id.videoId,
            text: comment,
        };
        try {
        let response = await axios.post("http://127.0.0.1:8000/api/comments/", newComment, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        if(response.status === 201) {
            showAllComments();
        }
        // navigate("/videopage")
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        postComment();
        setComment('')
    }






    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label> Comment: </label>
            </div>
            <div>
                <textarea placeholder="Write Comment Here..." value={comment} onChange={handleComment}/>
            </div>
            <div>
                <button type="submit"> Post Comment </button>
            </div>
        </form>
     );
}
 
export default CommentForm;