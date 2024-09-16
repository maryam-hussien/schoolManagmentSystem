import './about.css'
import img from '../../../public/assets/photo_2024-09-12_23-29-54.jpg'
import image from '../../../public/assets/8cf95c4384883dd4dc407fbb0e82a49c.jpg'
import imag from '../../../public/assets/175cb3ce86a19e7044c5ce612bef589d.jpg'
import Slide from '../../Components/Slider/Slide'


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
    <h1 className='center'>SCHOOL LOCATION</h1>
      <div className="contaier">
        <p>Abou Al Hool Al Seiahi, Nazlet El-Semman, Al Haram, Giza Governorate 12557</p>
      <iframe
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.149864519135!2d31.138869715067827!3d29.9751227819076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584506784efed1%3A0x961ab3bea72d0739!2segypt%20pyramids%20inn!5e0!3m2!1sen!2seg!4v1657462371337!5m2!1sen!2seg"
  width="600"
  height="450"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
  
    <h1 className='center'>OUR TEACHERS</h1>
    <div className='slider'>
  <Slide />
    </div>

    </div>
  
    </>
  )
}

export default About
