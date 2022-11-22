import "./Comment.css"

const Comment = ({  comment }) => {


  return (
    <div className="comment-box-style">
      <h3 className="comment-username">{comment.user.username}</h3>
      <div className="comment-body">{comment.text}</div>
    </div>
  );
};

export default Comment;
