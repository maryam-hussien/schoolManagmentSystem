import '../../pages/Home/home.css';
import { useNavigate } from 'react-router-dom';
import animationImage from '../../../public/assets/dbe952cfcd79ece5d17cb134ba35b587.jpg';
import digitalSkillsImage from '../../../public/assets/f1c71ed1586390fe809406f5b31038d7.jpg';
import aiImage from '../../../public/assets/1c6921a6de046156b675b130f60868dd.jpg';
const Course=()=>  {
    const navigate = useNavigate();
    const handlecourseLearnMoreClick = () => {
        navigate('/courses');
      };
    return (
     <>
       <section className="course-section">
  <h2>Our Courses</h2>
  <div className="course-cards">
    <div className="course-card" style={{ backgroundColor: 'rgb(235 169 105)' }}>
      <img src={animationImage} alt="Animation" className="course-image" />
      <h3 className="course-title">
        Animation <span className="arrow-icon" style={{ color: 'rgb(235, 169, 105)' }}>&rarr;</span>
      </h3>
      <p>Learn the art of animation with our comprehensive course.</p>
    </div>

    <div className="course-card" style={{ backgroundColor: '#0097E6' }}>
      <img src={digitalSkillsImage} alt="Digital Skills" className="course-image" />
      <h3 className="course-title">
        Digital Skills <span className="arrow-icon" style={{ color: '#0097E6' }}>&rarr;</span>
      </h3>
      <p>Master essential digital skills in this tech-driven world.</p>
    </div>

    <div className="course-card" style={{ backgroundColor: 'rgb(103 181 92)' }}>
      <img src={aiImage} alt="AI" className="course-image" />
      <h3 className="course-title">
        AI <span className="arrow-icon" style={{ color: 'rgb(103 181 92)' }}>&rarr;</span>
      </h3>
      <p>Delve into the world of AI with cutting-edge concepts.</p>
    </div>
  </div>
  <span 
    className="learn-more-text" 
    onClick={handlecourseLearnMoreClick}
    style={{ cursor: 'pointer', color: '#495057', textDecoration: 'none', textAlign: 'left' }}
  >
    {' '}Learn More...
  </span>
</section>
     </>
    )
  
}
export default Course