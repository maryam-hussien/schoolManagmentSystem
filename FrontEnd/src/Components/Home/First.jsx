import { FaSchool, FaCertificate, FaBookOpen } from 'react-icons/fa';
import { MdStars, MdLibraryBooks } from 'react-icons/md';
import { BiMedal } from 'react-icons/bi';
import '../../pages/Home/home.css';

const First =()=>  {
  

   
    return (
    <>
     <div className='all'>
       
          <div className="features">
            <div className="feature-card"><FaSchool className="feature-icon" /><h3>Our School</h3><p>We take pride in our famous teaching traditions & achievements.</p></div>
            <div className="feature-card"><MdStars className="feature-icon" /><h3>Why Choose Us?</h3><p>Our school ranked among the top 10 best schools for children aged 13-19.</p></div>
            <div className="feature-card"><FaBookOpen className="feature-icon" /><h3>Activities</h3><p>We have arranged a wide range of activities for our students.</p></div>
            <div className="feature-card"><FaCertificate className="feature-icon" /><h3>Certifications</h3><p>We have had the honor of becoming the Best School for Science in 2017.</p></div>
            <div className="feature-card"><BiMedal className="feature-icon" /><h3>Reputation</h3><p>We have a good reputation for friendly teaching & learning environment.</p></div>
            <div className="feature-card"><MdLibraryBooks className="feature-icon" /><h3>Courses</h3><p>We have the most modern library for the referencing needs of students.</p></div>
          </div>
   </div>
    
    </>
    )
 
}
export default First