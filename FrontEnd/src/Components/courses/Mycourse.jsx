

import '../../../src/pages/Courses/course.css';
import OperatingSystemImage from '/assets/3f50f4da15b9c4beddee1f2f9a8faa93.jpg';
import ArtificialIntelligenceImage from '/assets/cd9eb7931f867ff48ac5da9082637739.jpg';
import SoftwareEngineeringImage from '/assets/cbc76a054c9599cc13d5d69910029a15.jpg';

const Mycourse = () => {
return(
<>
<div className="courseContinater mb-5 py-3 px-2">
<div className="text-center fw-medium coursename">Your Courses</div>
<div className='course-list'>
          <div className="course-card1" style={{backgroundColor:"#9ca6ba"}}>
            <img
              src={OperatingSystemImage}
              alt="Operating System"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Operating System</h3>
              <p className="course-description">
                Learn the basic operating system abstractions, mechanisms, and their implementations.
              </p>
              <p className="course-creator">Created by Mark Lee</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:'#ffbdc7'}}>
            <img
              src={ArtificialIntelligenceImage}
              alt="Artificial Intelligence"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Artificial Intelligence</h3>
              <p className="course-description">
                Intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.
              </p>
              <p className="course-creator">Created by Jung Jaehyun</p>
            </div>
          </div>
          <div className="course-card1" style={{backgroundColor:"#d27ba8"}}>
            <img
              src={SoftwareEngineeringImage}
              alt="Software Engineering"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Software Engineering</h3>
              <p className="course-description">
                Learn detailed engineering to the design, development, and maintenance of software.
              </p>
              <p className="course-creator">Created by Kim Taeyong</p>
            </div>
          </div>
          </div>
          </div>
          </>
)
}
export default Mycourse;
