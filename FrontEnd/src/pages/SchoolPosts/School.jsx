import { useState } from "react";
import { FaThumbsUp, FaReply, FaTrash } from "react-icons/fa";
import './school.css'; 
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

function School() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, { text: comment, likes:0 }]);
      setComment("");
    }
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const handleLike = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDelete = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const handleReply = (index) => {
    console.log(`Reply to comment at index ${index}`);
  };

  return (
    <>
    <Header/>
    <div className="main-container">
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-wrapper">
            <div className="comment-container">
              <p className="comment-text2">{comment.text}</p>
            </div>
            <div className="comment-actions">
              <button className="comment-action-button" onClick={() => handleLike(index)}>
                <FaThumbsUp /> {comment.likes}
              </button>
              <button className="comment-action-button" onClick={() => handleReply(index)}>
                <FaReply />
              </button>
              <button className="comment-action-button" onClick={() => handleDelete(index)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-flexbox">
        <h3 className="comment-text">Feel free to ask 💖💖</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Post
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default School;
