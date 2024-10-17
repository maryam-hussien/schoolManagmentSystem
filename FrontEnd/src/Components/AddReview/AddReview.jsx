import { useState } from 'react';
import reviews from '../../../public/data/reviewsapi'; // Assuming this is the file where reviews array is stored
import './AddReview.css';
import { StarFill, Star } from 'react-bootstrap-icons'; // Assuming you're using Bootstrap icons

const AddReview = () => {
  // State for the new review content
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0); // State to track star rating
  const [reviewList, setReviewList] = useState(reviews); // Set initial state with existing reviews

  // Handle the form submission to add a new review
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    if (newReview.trim() !== "" && rating > 0) {
      const newReviewObj = {
        profileName: "Anonymous User", // Assuming you can replace this with actual user's name
        profileImage: "https://via.placeholder.com/40", // Placeholder for user profile image
        review: newReview, // The new review from the textarea
        rating, // Add the rating to the review object
      };

      // Update the review list
      setReviewList([...reviewList, newReviewObj]);

      // Clear the textarea and reset rating after submission
      setNewReview("");
      setRating(0);
    }
  };

  // Function to handle star click
  const handleStarClick = (index) => {
    setRating(index + 1); // Set rating from 1 to 5 based on clicked star
  };

  return (
    <>
      <div className="card mb-4 AddPost w-100">
        <div className="card-body">
          <h5 className="card-title mb-4">Add Review</h5>

          <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-start mb-3 flex-wrap mt-1 w-75">
              <img
                src="https://via.placeholder.com/40"
                alt="none"
                className="rounded-circle me-3"
              />
              <div className="flex-grow-1 ">
                <textarea
                  className="form-control border-0 "
                  id="content"
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  rows="3"
                  placeholder="What's on your mind?"
                  required
                ></textarea>
              </div>
            </div>

            {/* Star rating */}
            <div className="mb-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleStarClick(index)}
                  style={{ cursor: 'pointer' , marginRight:'0.25rem'}}
                >
                  {index < rating ? (
                    <StarFill color="gold" />
                  ) : (
                    <Star color="gray" />
                  )}
                </span>
              ))}
            </div>

            {/* Divider */}
            <hr className="border border-secondary w-100" />

            <div className="addpostLastSec">
              <div>
                <button type="submit" className="btn btn-primary">
                  Add Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
{/*
      <ul className="list-group">
        {reviewList.map((review, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-start">
              <img
                src={review.profileImage}
                alt={review.profileName}
                className="rounded-circle me-3"
                width="40"
                height="40"
              />
              <div>
                <strong>{review.profileName}</strong>
                <p>{review.review}</p>
                <div>
                //starrs
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>
                      {starIndex < review.rating ? (
                        <StarFill color="gold" />
                      ) : (
                        <Star color="gray" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>*/}
    </>
  );
};

export default AddReview;
