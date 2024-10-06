import '../../../src/pages/Courses/course.css';
import ScienceImage from '/assets/a1327d0d7ff475a3f8a58d4660ee27bb.jpg'; 
import HistoryImage from '/assets/2021f398be5e10ac967420161f0f8120.jpg'; 
import GeographyImage from '/assets/7998cd7054b50afd5741a5c1bba0d7e4.jpg'; 

const Primary = () => {
  return (
    <>
      <div className="courseContinater mb-5 py-3 px-2">
        <div className="text-center fw-medium coursename"> Primary School Courses</div>
        <div className='course-list'>
          <div className="course-card1" style={{backgroundColor:"#7ea1a5"}}>
            <img
              src={ScienceImage}
              alt="Science"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Science Exploration</h3>
              <p className="course-description">
                Discover the wonders of science through experiments and hands-on activities.
              </p>
              <p className="course-creator">Created by Ms. Jessica</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:"#d7a96f"}}>
            <img
              src={HistoryImage}
              alt="History"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">World History</h3>
              <p className="course-description">
                Learn about important historical events and figures that shaped our world.
              </p>
              <p className="course-creator">Created by Mr. Alex</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:"#9dd6d6"}}>
            <img
              src={GeographyImage}
              alt="Geography"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Geography Adventures</h3>
              <p className="course-description">
                Explore the world’s continents, countries, and cultures through maps and activities.
              </p>
              <p className="course-creator">Created by Ms. Rachel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Primary;
