import './home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { FaSchool, FaCertificate, FaBookOpen, FaChalkboardTeacher, FaBabyCarriage, FaUserGraduate } from 'react-icons/fa';
import { MdStars, MdLibraryBooks } from 'react-icons/md';
import { BiMedal } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import img from '../../../public/assets/Remove background project (3).png';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  return (
    <>
      <Header />
      <div className="home">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Welcome to School Team</h1>
          </div>
        </div>

        <div className="info-section">
          <h2>Welcome to School Team, a prestigious school</h2>
          <p>
            We understand that each of our students is a uniquely talented individual. Within our supportive community, students are facilitated to develop positive relationships and grab the opportunity to realize their individual potential to the full.
          </p>
          <button className="learn-more-button" onClick={handleLearnMoreClick}>
            Learn More
          </button>

          <div className="features">
            <div className="feature-card">
              <FaSchool className="feature-icon" />
              <h3>Our School</h3>
              <p>We take pride in our famous teaching traditions & achievements.</p>
            </div>
            <div className="feature-card">
              <MdStars className="feature-icon" />
              <h3>Why Choose Us?</h3>
              <p>Our school ranked among the top 10 best schools for children aged 13-19.</p>
            </div>
            <div className="feature-card">
              <FaBookOpen className="feature-icon" />
              <h3>Activities</h3>
              <p>We have arranged a wide range of activities for our students.</p>
            </div>
            <div className="feature-card">
              <FaCertificate className="feature-icon" />
              <h3>Certifications</h3>
              <p>We have had the honor of becoming the Best School for Science in 2017.</p>
            </div>
            <div className="feature-card">
              <BiMedal className="feature-icon" />
              <h3>Reputation</h3>
              <p>We have a good reputation for friendly teaching & learning environment.</p>
            </div>
            <div className="feature-card">
              <MdLibraryBooks className="feature-icon" />
              <h3>Courses</h3>
              <p>We have the most modern library for the referencing needs of students.</p>
            </div>
          </div>
        </div>

        <div className="smarty-programs">
          <img src={img} alt="Smarty Programs" className="logo" />
          <h2>Smarty Programs</h2>
          <div className="program-cards">
            <div className="program-card">
              <FaBabyCarriage className="program-icon" />
              <h3>Kindergarten</h3>
              <p>Creating a safe and welcoming environment for learning.</p>
            </div>
            <div className="program-card">
              <FaChalkboardTeacher className="program-icon" />
              <h3>Primary School</h3>
              <p>Encouraging exploration and curiosity through diverse activities.</p>
            </div>
            <div className="program-card">
              <FaSchool className="program-icon" />
              <h3>Secondary School</h3>
              <p>Preparing students for future academic challenges and life skills.</p>
            </div>
            <div className="program-card">
              <FaUserGraduate className="program-icon" />
              <h3>Preparatory School</h3>
              <p>Fostering essential skills to excel in the next academic level.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
