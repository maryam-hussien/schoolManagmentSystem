
import './DashSidebar.css';
import { Boxes, PersonFill, Book, CalendarCheckFill, ClipboardData, Grid3x3GapFill, ArrowBarLeft } from 'react-bootstrap-icons';
import { NavLink ,useNavigate  } from 'react-router-dom';


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
            to="/dashboard"
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
 
          <div
            className="icon-link icon-link-hover link-opacity-50-hover fw-light mb-4"
            style={{ color: "red", cursor: "pointer" }}
            onClick={handleLogout} // Logout handler on click

          >
            <ArrowBarLeft style={{ color: "red", fontSize: "19px" }} />
            <span>Log Out</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;
