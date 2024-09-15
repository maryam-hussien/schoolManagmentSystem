import './about.css'
import img from '../../../public/assets/photo_2024-09-12_23-29-54.jpg'
import image from '../../../public/assets/8cf95c4384883dd4dc407fbb0e82a49c.jpg'
import imag from '../../../public/assets/175cb3ce86a19e7044c5ce612bef589d.jpg'
import Slider from '../../Components/Slider/Slider'
const About = () => {
  return (
    <>
     
           <div className='about'>
    <div className="image-container">
    <div className='pp'>
  <p style={{ color: "#148B9c" }}>A</p>
  <p>B</p>
  <p style={{ color: "#FF7F50" }}>O</p>
  <p>U</p>
  <p style={{ color: "#FFA500" }}>T</p>
  <div className="space-before-us">
    <p>U</p>
    <p style={{ color: "#148B9c" }}>S</p>
  </div>
</div>
    <img src={img} alt="Brand Logo" className="logo1" />
    </div>
    <h1 className='center'>ABOUT SCHOOL</h1>
    <div className='school'>
  <p className='aboutsc'>School is a place where students go to learn and develop a variety of skills and knowledge.
It typically includes a range of subjects such as math, science, literature, and social studies.
Students are often divided into grades or year levels based on their age and academic progress.
Teachers play a crucial role in guiding and inspiring students.</p>
<img src={image} alt="Brand Logo" className="logo" />
    </div>
    <h1 className='center'>HISTORY OF SCHOOL</h1>
    <div className='history'>
    <img src={imag} alt="Brand Logo" className="logo2" />
   <p>The history of school is a fascinating journey through different cultures and eras. Here’s a brief overview:
Ancient Civilizations: The concept of formal education dates back to ancient civilizations like Egypt, Greece, and China. In Egypt.</p>
    </div>
    <h1 className='center'>OUR TEACHERS</h1>

    </div>
  
    </>
  )
}

export default About
