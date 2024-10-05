import { Route, Routes } from "react-router-dom";
import DashSidebar from "../../DashComponents/DashSideBar/DashSidebar";
import "./DashHome.css";
import DashProfile from "../DashProfile/DashProfile";
import DashCourses from "../DashCourses/DashCourses";
import DashAttendance from "../DashAttendaane/DashAttendance";
import DashGrades from "../DashGrades/DashGrades";
import DashSchedule from "../DashSchedule/DashSchedule";

const DashHome = () => {
  return (
    <div className="dashHome d-flex">
      <DashSidebar />

      <div className="dashboard p-3 m-auto">
        <Routes>
          <Route path="dashProfile" element={<DashProfile />} />
          <Route path="courses" element={<DashCourses />} />
          <Route path="attendance" element={<DashAttendance />} />
          <Route path="grades" element={<DashGrades />} />
          <Route path="schedule" element={<DashSchedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashHome;
