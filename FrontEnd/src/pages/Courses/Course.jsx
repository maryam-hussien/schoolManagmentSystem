import './course.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Bar from '../../Components/courses/Bar';
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
        <Bar />
        <Routes>
              <Route path='/' element={<MyCourses/>}/>
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
