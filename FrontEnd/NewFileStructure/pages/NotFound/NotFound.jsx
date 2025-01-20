import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notFoundImage from "../../assets/Images/notfound.jpg"; // أضف صورة 404 (يمكنك تغييرها)

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <img src={notFoundImage} alt="404 Not Found" className="not-found-image" />
        <h1>Page Not Found</h1>
        <p>
          We're sorry, but the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/home" className="back-home-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
