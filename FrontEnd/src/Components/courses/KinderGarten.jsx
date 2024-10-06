import '../../../src/pages/Courses/course.css';
import ArtImage from '/assets/7e3a971e4e5426ffaf62de652bf925f4.jpg';
import MathImage from '/assets/ed84eb682ca9331fe40025d83dda3ab4.jpg'; 
import MusicImage from '/assets/0daad3630b85891d51f05fc25aba5985.jpg'; 

const KinderGarten = () => {
  return (
    <>
      <div className="courseContinater mb-5 py-3 px-2">
        <div className="text-center fw-medium coursename"> Kindergarten Courses</div>
        <div className='course-list'>
          <div className="course-card1" style={{backgroundColor:"#f3f6f4"}}>
            <img
              src={ArtImage}
              alt="Art & Crafts"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Art & Crafts</h3>
              <p className="course-description">
                Engage in creative activities to express imagination and develop fine motor skills.
              </p>
              <p className="course-creator">Created by Ms. Sarah</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:"#f0d084"}}>
            <img
              src={MathImage}
              alt="Basic Math"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Basic Math</h3>
              <p className="course-description">
                Learn numbers, shapes, and simple addition and subtraction through fun games.
              </p>
              <p className="course-creator">Created by Mr. John</p>
            </div>
          </div>

          <div className="course-card1" style={{backgroundColor:"rgb(229 49 110)"}}>
            <img
              src={MusicImage}
              alt="Music & Movement"
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">Music & Movement</h3>
              <p className="course-description"style={{color:"rgb(231 219 219)"}}>
                Explore music and rhythm through singing, dancing, and playing instruments.
              </p>
              <p className="course-creator">Created by Ms. Emily</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KinderGarten;
