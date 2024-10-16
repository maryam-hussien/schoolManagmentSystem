import '../../../src/pages/Courses/course.css';
import courses from  '../../../public/data/coursresapi';"../../../public/data/coursresapi"
import Card from "./CourseCard"

const Secondary = () => {
  const filteredCourses = courses.filter(course => course.level === "Secondary");

  return (
    <>
      <div className="courseContinater mb-5 py-3 px-2">
        <div className="text-center fw-medium coursename"> Secondary Courses</div>
        <div className='course-list'>
        {filteredCourses.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Secondary;
