import "./profile.css"
import profileImg from "../../../public/assets/profile.jpg"
import ProfileBar from "../../Components/ProfileBar/ProfileBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileScores from "../../Components/ProfileScores/ProfileScores";
import ProfileAttendence from "../../Components/ProfileAttendence/ProfileAttendence";
import ProfileShedule from "../../Components/ProfileSchedule/ProfileShedule";
import ProfileSetting from "../../Components/ProfileSetting/ProfileSetting";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <>
      <div className="profile  mb-5 w-100">
        <div className="profileContinater mb-5 p-5 ">
          <div className="profileImgCont">
            <img src={profileImg} className="profileImg m-auto"></img>
        </div>
        <div className="  text-center fw-medium p-3 profilename ">UserName : Maryam Hussien</div>
        <div className="bar text-white fw-medium d-flex justify-content-around">
        <ProfileBar/>
        </div>
            <Routes>
              <Route path="/" element={<ProfileInfo />}/>
              <Route path="score" element={<ProfileScores />} />
              <Route path="attendence" element={<ProfileAttendence />} />
              <Route path="schedule" element={<ProfileShedule />} />
              <Route path="settings" element={<ProfileSetting />} />
            </Routes>
    </div>
      </div>
    </>
  )
}

export default Profile
