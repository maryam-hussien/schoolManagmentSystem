import '../../../src/pages/Courses/course.css';
import ChemistryImage from '../../../public/assets/97794587417cda795392baa9207e2fc1.jpg'; 
import PhysicsImage from '../../../public/assets/87ed7c3c49148e82b4b0370c68522fa4.jpg';
import GeologyImage from '../../../public/assets/abe1d5fd8f5d887ae6f2d21123d2d6ab.jpg'; 

const Secondary = () => {
  return (
    <>
      <div className="courseContinater mb-5 py-3 px-2">
        <div className="text-center fw-medium coursename">Your Secondary School Courses</div>
        <div className='course-list'>
          <div className="course-card1">
            <img
              src={ChemistryImage}
              alt="Chemistry"
              className="course-image"
            />
            <div className="course-info">
              <h3 className="course-title">Chemistry</h3>
              <p className="course-description">
                Explore the composition, properties, and reactions of matter in this engaging chemistry course.
              </p>
              <p className="course-creator">Created by Mr. Thompson</p>
            </div>
          </div>

          <div className="course-card1">
            <img
              src={PhysicsImage}
              alt="Physics"
              className="course-image"
            />
            <div className="course-info">
              <h3 className="course-title">Physics</h3>
              <p className="course-description">
                Understand the laws of nature and the fundamental principles governing the physical universe.
              </p>
              <p className="course-creator">Created by Ms. Smith</p>
            </div>
          </div>

          <div className="course-card1">
            <img
              src={GeologyImage}
              alt="Geology"
              className="course-image"
            />
            <div className="course-info">
              <h3 className="course-title">Geology</h3>
              <p className="course-description">
                Discover the Earth structure, materials, and the processes that shape our planet over time.
              </p>
              <p className="course-creator">Created by Dr. Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondary;
