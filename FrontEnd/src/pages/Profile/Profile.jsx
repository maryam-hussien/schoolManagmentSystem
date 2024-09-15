import "./profile.css"
import profileImg from "../../../public/assets/profile.jpg"
import ProfileBar from "../../Components/ProfileBar/ProfileBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileScores from "../../Components/ProfileScores/ProfileScores";
import ProfileAttendence from "../../Components/ProfileAttendence/ProfileAttendence";
import ProfileShedule from "../../Components/ProfileSchedule/ProfileShedule";
import ProfileSetting from "../../Components/ProfileSetting/ProfileSetting";


const Profile = () => {
  return (
    <>
      <div className="profile  mb-5">
        <div className="profileContinater mb-5 p-5">
          <div className="profileImgCont">
            <img src={profileImg} className="profileImg m-auto"></img>
        </div>
        <div className=" fs-4 text-center fw-medium m-auto ">UserName : Maryam Hussien</div>
        <div className="bar w-75 m-auto text-white fs-5 texr fw-medium d-flex justify-content-around p-3">
        <ProfileBar/>
        </div>
        <div className="content-section mt-4 text-black"> {/* This div wraps the dynamic content */}
            <Routes>

              <Route path="score" element={<ProfileScores />} />
              <Route path="attendence" element={<ProfileAttendence />} />
              <Route path="schedule" element={<ProfileShedule />} />
              <Route path="settings" element={<ProfileSetting />} />
            </Routes>
          </div>
    </div>
      </div>
    </>
  )
}

export default Profile
