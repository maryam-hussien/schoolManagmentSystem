import './course.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import FilterButton from '../../Components/Filter/Filter';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import PrimaryCourses from "../../Components/courses/Primary"
import KinderCourses from "../../Components/courses/KinderGarten"
import PreparatoryCourses from "../../Components/courses/Preparatory"
import SecondaryCourses from "../../Components/courses/Secondary"
import MyCourses from '../../Components/courses/Mycourse'



const Course = () => {
  return (
    <>
      <Header />
      <div className="courses">
        <h2>Courses</h2>
        <section className='first'>  
        <NavLink to='course' >       
            <button>My course</button>
          </NavLink>                
          <NavLink to='kindergaten' >       
            <button>Kindergarten</button>
          </NavLink>
          <NavLink to='primary' >       
            <button>Primary</button>
          </NavLink>
          <NavLink to='preparatory' >       
            <button>Preparatory</button>
          </NavLink>
          <NavLink to='secondary' >       
            <button>Secondary</button>
          </NavLink>

          <FilterButton />
        </section>
       
        <Routes>
              <Route path='course' element={<MyCourses/>}/>
              <Route path="kindergaten" element={<KinderCourses />} />
              <Route path="primary" element={<PrimaryCourses />} />
              <Route path="preparatory" element={<PreparatoryCourses />} />
              <Route path="secondary" element={<SecondaryCourses />} />
            </Routes>      </div>
      <Footer />
    </>
  );
}

export default Course;
