import CommentForm from "../CommentList/CommentForm/CommentForm";

const CommentList = (videoInfo, token) => {
    return ( 
    <div>
        <CommentForm videoInfo={videoInfo} token={token} />
    </div> );
}
 
export default CommentList;