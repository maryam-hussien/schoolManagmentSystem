import "./PostReview.css";

const PostCard = ({ post }) => {
  return (
    <li className="list-group-item PostCard">
      <div className="d-flex justify-content-between align-items-center">
        <div className="socialTopCard">
          <div>{post.author}</div>
        </div>
        <div className="text-muted text-end">({post.date})</div>
      </div>
      <hr className="socialdivider" />

      <div className="socialpostsection">
        <p>{post.content}</p>
      </div>
    </li>
  );
};

export default PostCard;
