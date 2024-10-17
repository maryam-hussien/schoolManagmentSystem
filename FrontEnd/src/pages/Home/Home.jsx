import './home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Smarty from '../../Components/Home/Smarty';
import First from '../../Components/Home/First';
import Core from '../../Components/Home/Core';
import Logos from '../../Components/Home/Logos';
import Test from '../../Components/Home/Test';
import Course from '../../Components/Home/Course';
const Home = () => {
 return (
    <>
      <Header />
      <div className="home">
        <section className="hero-section">
          <h1 className='hero-text'>Welcome to School Team</h1>
        </section>
         <First />
         <Smarty />
         <Core />
         <Logos />
         <Test />
         <Course />
        </div>
      <Footer />
    </>
  );
};

export default Home;
