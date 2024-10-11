import { Route, Routes } from "react-router-dom";
import DashSidebar from "../../DashComponents/DashSideBar/DashSidebar";
import "./DashHome.css";
import DashProfile from "../DashProfile/DashProfile";
import DashCourses from "../DashCourses/DashCourses";
import DashAttendance from "../DashAttendaane/DashAttendance";
import DashGrades from "../DashGrades/DashGrades";
import DashSchedule from "../DashSchedule/DashSchedule";
import DashNav from "../../DashComponents/DashNav/DashNav";
import EditProfile from "../DashProfile/EditProfile/EditProfile";
import PrimaryCourses from "../../../Components/courses/Primary"
import KinderCourses from "../../../Components/courses/KinderGarten"
import PreparatoryCourses from "../../../Components/courses/Preparatory"
import SecondaryCourses from "../../../Components/courses/Secondary"



const DashHome = () => {

  return (
    <>
      <DashNav/>
      <div className="d-flex dashHome">
      <DashSidebar />

      <div className="dashboard">
        <Routes>
          <Route path="dashProfile" element={<DashProfile />} />
          <Route path="courses" element={<DashCourses />} />
          <Route path="attendance" element={<DashAttendance />} />
          <Route path="grades" element={<DashGrades />} />
          <Route path="schedule" element={<DashSchedule />} />
          <Route path="/edit" element={<EditProfile/>} />
          <Route path="courses/PrimaryCourses" element={<PrimaryCourses/>} />
          <Route path="courses/KinderCourses" element={<KinderCourses/>} />
          <Route path="courses/PreparatoryCourses" element={<PreparatoryCourses/>} />
          <Route path="courses/SecondaryCourses" element={<SecondaryCourses/>} />




        </Routes>
      </div>
    </div>
      </>
  );
};

export default DashHome;
