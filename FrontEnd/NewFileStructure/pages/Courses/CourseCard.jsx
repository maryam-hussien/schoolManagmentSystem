const CourseCard = ({ course }) => {
    return (
      <div className="course-card">
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="course-details">
          <h3 className="course-title">{course.title}</h3>
          <p className="course-teacher">Teacher: {course.teacher}</p>
          <p className="course-rating">Rating: {course.rating} / 5</p>
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  