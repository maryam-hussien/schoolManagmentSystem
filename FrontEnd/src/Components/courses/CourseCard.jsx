import '../../../src/pages/Courses/course.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card1" style={{ backgroundColor: course.backgroundColor  || "#f0f0f0"  }}>
      <img src={course.image} alt={course.title} className="course-image1" />
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <p className="course-creator">Created by {course.creator}</p>
      </div>
    </div>
  );

}

export default CourseCard
