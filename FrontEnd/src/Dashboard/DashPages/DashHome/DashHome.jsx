import { Route, Routes } from "react-router-dom";
import DashSidebar from "../../DashComponents/DashSideBar/DashSidebar";
import "./DashHome.css";
import Dashcont from "../Dashcont/Dashcont";
import DashProfile from "../DashProfile/DashProfile";
import DashCourses from "../DashCourses/DashCourses";
import DashAttendance from "../DashAttendaane/DashAttendance";
import DashGrades from "../DashGrades/DashGrades";
import DashSchedule from "../DashSchedule/DashSchedule";
import DashNav from "../../DashComponents/DashNav/DashNav";
import EditProfile from "../DashProfile/EditProfile/EditProfile";
import Students from "../DashStudents/Students";
import DashAbout from "../DashAbout/DashAbout";

const DashHome = () => {

  return (
    <>
      <DashNav/>
      <div className="d-flex dashHome">
      <DashSidebar />

      <div className="dashboard">
        <Routes>
        <Route path="dashmain" element={<Dashcont />} />
          <Route path="dashProfile" element={<DashProfile />} />
          <Route path="courses/*" element={<DashCourses />} />
            <Route path="dashAbout" element={<DashAbout />} />
          <Route path="attendance" element={<DashAttendance />} />
          <Route path="grades" element={<DashGrades />} />
          <Route path="schedule" element={<DashSchedule />} />
          <Route path="students" element={<Students/>}/>
          <Route path="/edit" element={<EditProfile/>} />





        </Routes>
      </div>
    </div>
      </>
  );
};

export default DashHome;
