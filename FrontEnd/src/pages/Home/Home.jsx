import './home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Smarty from '../../Components/Home/Smarty';
import First from '../../Components/Home/First';

import Logos from '../../Components/Home/Logos';
import Test from '../../Components/Home/Test';
import Core from '../../Components/Home/Core';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate('/about');
  };

 return (
    <>
      <Header />
      <div className="home">
        <section className="hero-section">
        
          <div className="info-section">
            <h2>Welcome to School Team</h2>
            <p>
              We understand that each of our students is a uniquely talented individual students are facilitated to develop positive relationships.
            </p>
            <button className="learn-more-button" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>
        </section>
      
         <First />
         <Smarty />

         <Logos />
         <Test />
         <Core />
        </div>
      <Footer />
    </>
  );
};

export default Home;
