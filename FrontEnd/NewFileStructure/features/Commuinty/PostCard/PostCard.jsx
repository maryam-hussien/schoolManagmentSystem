import { useState, useEffect } from "react";
import "./PostCard.css";
import { ChatSquareDots, HeartFill, Heart } from "react-bootstrap-icons";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  useEffect(() => {
    setLikes(post.likes);
    setComments(post.comments);
  }, [post]);

  const handleLike = () => {
    const updatedLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(updatedLikes);
    setIsLiked(!isLiked);

    updatePostInLocalStorage(post.id, { likes: updatedLikes });
  };

  const handleComment = () => {
    setAreCommentsVisible(!areCommentsVisible);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        commenter: "User",
        comment: newComment,
      };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      setNewComment("");

      updatePostInLocalStorage(post.id, { comments: updatedComments });
    }
  };

  const updatePostInLocalStorage = (id, updates) => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = storedPosts.map((p) =>
      p.id === id ? { ...p, ...updates } : p
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <li className="list-group-item PostCard">
      <div className="d-flex justify-content-between align-items-center">
        <div className="socialTopCard">
          <div>{post.author || "Anonymous"}</div>
        </div>
        <div className="text-muted text-end">({post.date})</div>
      </div>
      <hr className="socialdivider" />
      <div className="socialpostsection">
        <p>{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post" className="post-image" />
        )}
        {/* تعديل عرض الصورة */}
      </div>
      <div className="ActionNumbers">
        <span className="ms-2 socialLikes">{likes} Likes</span>
        <span className="ms-2 socialLikes">{comments.length} Comments</span>
      </div>
      <hr className="socialdivider" />
      <div className="mt-2 d-flex flex-row ms-2 Postactions">
        <div className="d-flex align-items-center">
          {isLiked ? (
            <HeartFill
              style={{ color: "red", fontSize: "18px", cursor: "pointer" }}
              onClick={handleLike}
            />
          ) : (
            <Heart
              style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
              onClick={handleLike}
            />
          )}
          <span className="ms-2 socialLikes">Likes</span>
        </div>
        <div className="d-flex align-items-center ms-4">
          <ChatSquareDots
            style={{ color: "blue", fontSize: "18px", cursor: "pointer" }}
            onClick={handleComment}
          />
          <span className="ms-2 socialLikes">Comments</span>
        </div>
      </div>
      <hr className="socialdivider" />
      {areCommentsVisible && (
        <div className="comment-section mt-3 mb-1">
          <textarea
            className="form-control w-75 me-3"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleAddComment}>
            Add Comment
          </button>
          <ul className="list-unstyled ms-4 mt-2 socialComments">
            {comments.map((comment) => (
              <li key={comment.id} className="mb-1">
                <strong>{comment.commenter}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default PostCard;
