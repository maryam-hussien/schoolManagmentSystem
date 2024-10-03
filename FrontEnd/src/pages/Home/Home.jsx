import './home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { FaSchool, FaCertificate, FaBookOpen, FaChalkboardTeacher, FaBabyCarriage, FaUserGraduate } from 'react-icons/fa';
import { MdStars, MdLibraryBooks } from 'react-icons/md';
import { BiMedal } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import img from '../../../public/assets/Remove background project (3).png';
import coreValue1 from '../../../public/assets/4488f2b7aa2c953fbadd15fc51ce62bf.jpg';
import coreValue2 from '../../../public/assets/1249636d803793f0d04ae77ab50097c7.jpg';
import coreValue3 from '../../../public/assets/ai-generated-8659303_1280.jpg';
import coreValue4 from '../../../public/assets/child-2835430_1280.jpg';
import parent1 from '../../../public/assets/4eb3c3ef5c0cd7a4b05da47602427c97.jpg';
import parent2 from '../../../public/assets/e26a33b95639e3b1621446a42f47faaa.jpg';
import animationImage from '../../../public/assets/dbe952cfcd79ece5d17cb134ba35b587.jpg';
import digitalSkillsImage from '../../../public/assets/f1c71ed1586390fe809406f5b31038d7.jpg';
import aiImage from '../../../public/assets/1c6921a6de046156b675b130f60868dd.jpg';

const courses = [
  {
    title: 'Animation',
    description: 'Learn the art of animation with our comprehensive course.',
    imageUrl: animationImage,
 
    bgColor: 'rgb(235 169 105)',
  },
  {
    title: 'Digital Skills',
  
    description: 'Master essential digital skills in this tech-driven world.',
    imageUrl: digitalSkillsImage,
 
    bgColor: '#0097E6',
  },
  {
    title: 'AI',
    
    description: ' Artificial intelligance Delve into the world of AI with cutting-edge concepts.',
    imageUrl: aiImage,
    bgColor: 'rgb(103 181 92)',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  const handleTestimonialLearnMoreClick = () => {
    navigate('/post');
  };

  return (
    <>
      <Header />
      <div className="home">
        <section className="hero-section">
          <h1 className='hero-text'>Welcome to School Team</h1>
        </section>

        <section className="info-and-features">
          <div className="info-section">
            <h2>Welcome to School Team, a prestigious school</h2>
            <p>
              We understand that each of our students is a uniquely talented individual. Within our supportive community, students are facilitated to develop positive relationships and grab the opportunity to realize their individual potential to the full.
            </p>
            <button className="learn-more-button" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>

          <div className="features">
            <div className="feature-card"><FaSchool className="feature-icon" /><h3>Our School</h3><p>We take pride in our famous teaching traditions & achievements.</p></div>
            <div className="feature-card"><MdStars className="feature-icon" /><h3>Why Choose Us?</h3><p>Our school ranked among the top 10 best schools for children aged 13-19.</p></div>
            <div className="feature-card"><FaBookOpen className="feature-icon" /><h3>Activities</h3><p>We have arranged a wide range of activities for our students.</p></div>
            <div className="feature-card"><FaCertificate className="feature-icon" /><h3>Certifications</h3><p>We have had the honor of becoming the Best School for Science in 2017.</p></div>
            <div className="feature-card"><BiMedal className="feature-icon" /><h3>Reputation</h3><p>We have a good reputation for friendly teaching & learning environment.</p></div>
            <div className="feature-card"><MdLibraryBooks className="feature-icon" /><h3>Courses</h3><p>We have the most modern library for the referencing needs of students.</p></div>
          </div>
        </section>

        <section className="smarty-programs">
          <img src={img} alt="Smarty Programs" className="logo" />
          <h2>Smarty Programs</h2>
          <div className="program-cards">
            <div className="program-card">
              <FaBabyCarriage className="program-icon" style={{color:'fd7899'}} />
              <h3>Kindergarten</h3>
              <p>Creating a safe and welcoming environment for learning.</p>
            </div>
            <div className="program-card">
              <FaChalkboardTeacher className="program-icon" style={{color:'rgb(255 209 98)'}} />
              <h3>Primary School</h3>
              <p>Encouraging exploration and curiosity through diverse activities.</p>
            </div>
            <div className="program-card">
              <FaSchool className="program-icon"style={{color:'rgb(111 228 211);'}} />
              <h3>Secondary School</h3>
              <p>Preparing students for future academic challenges and life skills.</p>
            </div>
            <div className="program-card">
              <FaUserGraduate className="program-icon" style={{color:'rgb(74 152 159)'}} />
              <h3>Preparatory School</h3>
              <p>Fostering essential skills to excel in the next academic level.</p></div>
          </div>
        </section>

        <section className="core-values-section">
  <h2>Our Core Values</h2>
  <div className="core-values-grid">
    <div className="core-value-card">
      <img src={coreValue1} alt="Learning & Fun" className="core-value-image" />
      <div className="core-value-text">
        <h3>Learning & Fun</h3>
        <p>We promote an environment where children learn through fun and engaging activities.</p>
      </div>
    </div>
    <div className="core-value-card">
      <img src={coreValue2} alt="Healthy Meals" className="core-value-image" />
      <div className="core-value-text">
        <h3>Healthy Meals</h3>
        <p>Our menu is curated to ensure children receive balanced and nutritious meals every day.</p>
      </div>
    </div>
    <div className="core-value-card">
      <img src={coreValue3} alt="Children Safety" className="core-value-image" />
      <div className="core-value-text">
        <h3>Children Safety</h3>
        <p>We maintain a safe and secure environment for all children in our school.</p>
      </div>
    </div>
    <div className="core-value-card">
      <img src={coreValue4} alt="Cute Environment" className="core-value-image" />
      <div className="core-value-text">
        <h3>Cute Environment</h3>
        <p>Our classrooms are designed to be engaging, colorful, and welcoming to every child.</p>
      </div>
    </div>
  </div>
</section>


        <section className="testimonial-section">
          <h2>What Parents Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <p>
                As a parent, I have been thoroughly impressed with the quality of education my child receives at this school. The teachers are dedicated, approachable, and genuinely care about the students’ success.
              </p>
              <div className="card-image">
                <img src={parent1} alt="Parent Testimonial" className="testimonial-image" />
                <h4>Ankeila Mokina</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                I am absolutely thrilled with the quality of education my child is receiving at this school. The teachers are not only highly qualified, but they also show a genuine passion for helping students to succeed.
              </p>
              <div className="card-image">
                <img src={parent2} alt="Parent Testimonial" className="testimonial-image" />
                <h4>Mick Maxwell</h4>
              </div>

            </div>
          </div>
          <span 
                  className="learn-more-text" 
                  onClick={handleTestimonialLearnMoreClick}
                  style={{ cursor: 'pointer', color: '#495057', textDecoration: 'none',textAlign:'center',marginTop:'15px' }}
                >
                  {' '}Learn More...
                </span>
        </section>

        <section className="course-section">
          <h2>Our Courses</h2>
          <div className="course-cards">
            {courses.map((course, index) => (
              <div className="course-card" key={index} style={{ backgroundColor: course.bgColor }}>
                <img src={course.imageUrl} alt={course.title} className="course-image" />
                <h3 className="course-title">
                  {course.title} <span className="arrow-icon">&rarr;</span>
                </h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
          <span 
                  className="learn-more-text" 
                  onClick={handleTestimonialLearnMoreClick}
                  style={{ cursor: 'pointer', color: '#495057', textDecoration: 'none',textAlign:'left' }}
                >
                  {' '}Learn More...
                </span>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
