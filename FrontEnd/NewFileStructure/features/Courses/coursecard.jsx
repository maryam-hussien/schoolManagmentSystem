import StarRating from "./Star";

const CourseCard = ({ course, rating, handleStarClick }) => (
  <div className="course-card" style={{ backgroundColor: "#fff" }}>
    <img src={course.image} alt={course.title} />
    <h3 style={{ marginTop: "10px",fontSize:'20px'}}>{course.title}</h3>
    <StarRating
      uniqueId={`${course.level}-${course.grade}`}
      currentRating={rating}
      onStarClick={handleStarClick}
    />
  </div>
);

export default CourseCard;
