import './course.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import FilterButton from '../../Components/Filter/Filter';
//import Mycourse from '../../Components/courses/Mycourse';
//import KinderGarten from '../../Components/courses/KinderGarten';
//import Primary from '../../Components/courses/Primary';
import PreparatorySchoolCourses from '../../Components/courses/Preparatory';
//import Secondary from '../../Components/courses/Secondary';
const Course = () => {
  return (
    <>
      <Header />
      <div className="courses">
        <h2>Courses</h2>
        <section className='first'>
          <button>Kindergarten</button>
          <button>Primary</button>
          <button>Preparatory</button>
          <button>Secondary</button>
          <FilterButton />
        </section>
       
        <PreparatorySchoolCourses />
      </div>
      <Footer />
    </>
  );
}

export default Course;
