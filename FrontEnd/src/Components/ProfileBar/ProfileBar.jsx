import { NavLink } from 'react-router-dom';
import './ProfileBar.css'
const ProfileBar = () => {
  return (
    <>
      <NavLink 
        to="/schedule" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Info
      </NavLink>
      <NavLink 
        to="/attendance" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Schedule
      </NavLink>
      <NavLink 
        to="/scores" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Attendance
      </NavLink>
      <NavLink 
        to="/settings" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Scores
      </NavLink>
      <NavLink 
        to="/settings" 
        className="text-white text-decoration-none" 
        activeClassName="active"
      >
        Setting
      </NavLink>
    </>
  )
}

export default ProfileBar
