import StarRating from "./Star";
import imag from '../../assets/Images/ISO_C++_Logo.svg 1.png'
const CourseCard = ({ course, rating, handleStarClick }) => (
  <div className="course-card" style={{ backgroundColor: "#fff" }}>
    <div className="imagcourse">
    <img src={imag}/>
    </div>
    <h3 style={{ marginTop: "10px",fontSize:'20px'}}>{course.title}</h3>
    <StarRating
      uniqueId={`${course.level}-${course.grade}`}
      currentRating={rating}
      onStarClick={handleStarClick}
    />
  </div>
);

export default CourseCard;
