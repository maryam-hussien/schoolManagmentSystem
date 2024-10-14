import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <li className="list-group-item PostCard">
      <strong>{post.author}</strong> <span className="text-muted">({post.date})</span>
      <p>{post.content}</p>
      {post.image && (
        <img src={post.image} alt="Post" style={{ maxWidth: '100%', marginTop: '10px' }} />
      )}
      <div className="mt-2">
        <strong>Likes: </strong>{post.likes}
        <span className="ms-2">
          <strong>Comments: </strong>{Array.isArray(post.comments) ? post.comments.length : 0}
        </span>
      </div>
      <ul className="list-unstyled mt-2">
        {Array.isArray(post.comments) && post.comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.commenter}:</strong> {comment.comment}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default PostCard;
