const Comment = ({  comment }) => {


  return (
    <div>
      <div>{comment.user.username}</div>
      <div>{comment.text}</div>
    </div>
  );
};

export default Comment;
