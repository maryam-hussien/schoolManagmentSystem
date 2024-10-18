
import CoursesCard from "../../DashComponents/courseCard/CoursesCard";
import GradesCard from "../../DashComponents/GradesCard/GradesCard";
import AnnouncementsCard from "../../DashComponents/AnnouncementsCard/AnnouncementsCard";
import AbsentDaysCard from '../../DashComponents/AbsentDaysCard/AbsentDaysCard'
import './Students.css';

const Student = () => {
  return (
    <div className="studentdashboard-container">


        <div className="cards-container">
          <CoursesCard />
          <GradesCard />
          <AnnouncementsCard />
          <AbsentDaysCard />
        </div>
    
    </div>
  );
};

export default Student;

