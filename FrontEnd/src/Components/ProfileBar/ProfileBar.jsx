import { NavLink } from 'react-router-dom';
import './ProfileBar.css'
const ProfileBar = () => {
  return (
    <>
      <NavLink 
        to="/profile" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Info
      </NavLink>
      <NavLink 
        to="schedule" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Schedule
      </NavLink>
      <NavLink 
        to="attendence" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Attendance
      </NavLink>
      <NavLink 
        to="score" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Scores
      </NavLink>
      <NavLink 
        to="settings" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Settings
      </NavLink>
    </>
  )
}

export default ProfileBar
