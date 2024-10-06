import '../../../src/pages/Courses/course.css';
import LanguageImage from '/assets/d05d3ef901464b34429d0b5e62068cbb.jpg'; 
import MathImage from '/assets/646140828c3bc3cb9eb3e41729e9ef67.jpg'; 
import ScienceImage from '/assets/3e1ddf696fab2b11c9e12d63351f4aa6.jpg'; 

const PreparatorySchoolCourses = () => {
  return (
    <>
      <div className="courseContinater mb-5 py-3 px-2">
        <div className="text-center fw-medium coursename">Your Preparatory School Courses</div>
        <div className='course-list'>
          <div className="course-card1" style={{backgroundColor:"#dd9b9b"}}>
            <img
              src={LanguageImage}
              alt="Language Arts"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Language Arts</h3>
              <p className="course-description" style={{color:"rgb(231 219 219)"}}>
                Enhance reading, writing, and comprehension skills through engaging literature.
              </p>
              <p className="course-creator">Created by Ms. Angela</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:"#666666"}}>
            <img
              src={MathImage}
              alt="Advanced Mathematics"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title" style={{color:"#fff"}}>Advanced Mathematics</h3>
              <p className="course-description" style={{color:"rgb(231 219 219)"}}>
                Prepare for higher-level math with problem-solving and critical thinking exercises.
              </p>
              <p className="course-creator">Created by Mr. David</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:"#5a9f7f"}}>
            <img
              src={ScienceImage}
              alt="Physical Science"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Physical Science</h3>
              <p className="course-description" style={{color:"rgb(231 219 219)"}}>
                Explore the fundamentals of physics and chemistry through experiments and projects.
              </p>
              <p className="course-creator">Created by Ms. Kelly</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreparatorySchoolCourses;
