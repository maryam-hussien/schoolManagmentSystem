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
import Students from "../DashStudents/Students";


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
          <Route path="students" element={<Students/>}/>
          <Route path="/edit" element={<EditProfile/>} />





        </Routes>
      </div>
    </div>
      </>
  );
};

export default DashHome;
