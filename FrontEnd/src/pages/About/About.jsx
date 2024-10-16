import './about.css'
import Schoolabout from '../../Components/About/Schoolabout'
import Schoolhist from '../../Components/About/Schoolhist'
import Schoolloc from '../../Components/About/Schoolloc'
import Slide from '../../Components/Slider/Slide'
import Header from '../../Components/Header/Header'
import Footer  from '../../Components/Footer/Footer'
import Image from '../../Components/About/Image'
const About = () => {
  return (
    <>
     <Header />
           <div className='about'>
            <Image />
    <h1 className='center'>ABOUT SCHOOL</h1>
    <Schoolabout />
    <h1 className='center'>HISTORY OF SCHOOL</h1>
   <Schoolhist />
    <h1 className='center'>SCHOOL LOCATION</h1>
    <Schoolloc />
    <h1 className='center'>OUR TEACHERS</h1>
    <div className='slider'>
    <Slide />
    </div>

    </div>
   <Footer/>
    </>
  )
}
export default About
