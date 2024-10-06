
import "./DashProfile.css";
import { NavLink } from "react-router-dom";

const DashProfile = () => {
return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-card">
          <div className="profile-image">
              <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-info">
          <p><strong>Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 32</p>
            <p><strong>Contact Info:</strong> +20-01274318900 | johndoe@example.com</p>
            <p><strong>Address:</strong> 285 N Broad St, Elizabeth, NJ 07208, USA</p>
            <p><strong>Certification:</strong> Certified JavaScript Developer</p>
            <p><strong>Work Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>

            <NavLink to="edit">
              <button className="edit-btn">Edit Profile</button>
            </NavLink>
            <button className="change-password-btn">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
