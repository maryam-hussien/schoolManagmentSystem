
import './DashSidebar.css';
import { Boxes, PersonFill, Book,InfoCircle, CalendarCheckFill, ClipboardData, Grid3x3GapFill,ArrowBarLeft ,PeopleFill} from 'react-bootstrap-icons';
import { NavLink ,useNavigate  } from 'react-router-dom';
import Back from '../BackButton/Back';


const DashSidebar = () => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    // Clear any authentication data (e.g., localStorage, session storage, cookies)
    localStorage.removeItem('authToken'); // Example: removing token from localStorage

    // Redirect to login page
    navigate('/login'); // Change '/login' to your login route
  };
  return (

    <div className="dashSidebar">
      <div className="px-4 py-3">
        <ul className="nav flex-column m-auto">
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="dashmain"
          >
            <Boxes style={{ color: "white", fontSize: "19px" }} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="dashProfile"
          >
            <PersonFill style={{ color: "white", fontSize: "19px" }} />
            <span>Profile</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="courses"
          >
            <Book style={{ color: "white", fontSize: "19px" }} />
            <span>Courses</span>
          </NavLink>
       
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="Students"
          >
            <PeopleFill style={{ color: "white", fontSize: "19px" }} />
            <span>Students</span>
          </NavLink>          
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="Attendance"
          >
            <CalendarCheckFill style={{ color: "white", fontSize: "19px" }} />
            <span>Attendance</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="Grades"
          >
            <ClipboardData style={{ color: "white", fontSize: "19px" }} />
            <span>Grades</span>
          </NavLink>
          <NavLink
            className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
            to="Schedule"
          >
            <Grid3x3GapFill style={{ color: "white", fontSize: "19px" }} />
            <span>Schedule</span>
          </NavLink>
          <NavLink
          className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4"
          to="dashAbout"
          >
          <InfoCircle style={{ color: "white", fontSize: "19px" }} />
          <span>About</span>
         </NavLink>
         <Back link='/login'
               onClickAction={handleLogout}
               Icon={ArrowBarLeft}
               label='Log Out'
         />
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;
