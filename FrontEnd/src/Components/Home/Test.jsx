import '../../pages/Home/home.css';
import parent1 from '../../../public/assets/4eb3c3ef5c0cd7a4b05da47602427c97.jpg';
import parent2 from '../../../public/assets/e26a33b95639e3b1621446a42f47faaa.jpg';
import { useNavigate } from 'react-router-dom';
const Test=()=> {
    const navigate = useNavigate();
    const handleTestimonialLearnMoreClick = () => {
        navigate('/post');
      };
    return (
     <>
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
     </>
    )
  
}
export default Test