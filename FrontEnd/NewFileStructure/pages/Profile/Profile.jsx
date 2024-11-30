import "./profile.css"
import profileImg from "../../assets/Images/profile.jpg"
import ProfileBar from "../../features/profile/ProfileBar/ProfileBar";
import { Route, Routes } from "react-router-dom";
import ProfileScores from "../../features/profile/ProfileScores/ProfileScores";
import ProfileAttendence from "../../features/profile/ProfileAttendence/ProfileAttendence";
import ProfileShedule from "../../features/profile/ProfileSchedule/ProfileShedule";
import ProfileSetting from "../../features/profile/ProfileSetting/ProfileSetting";
import ProfileInfo from "../../features/profile/ProfileInfo/ProfileInfo";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer"
const Profile = () => {
  return (
    <>
    <Header/>
      <div className="profile   w-100">
        <div className="profileContinater mb-5 py-3 px-2 ">
          <div className="profileImgCont mx-auto">
            <img src={profileImg} className="profileImg m-auto"></img>
        </div>
        <p className=" p-3  mx-auto profilename">Maryam Hussien</p>
        <div className="text-white fw-medium d-flex justify-content-around m-auto bar">
        <ProfileBar/>
        </div>
            <Routes>
              <Route path="/" element={<ProfileInfo />}/>
              <Route path="info" element={<ProfileInfo />}/>
              <Route path="score" element={<ProfileScores />} />
              <Route path="attendence" element={<ProfileAttendence />} />
              <Route path="schedule" element={<ProfileShedule />} />
              <Route path="settings" element={<ProfileSetting />} />
            </Routes>
    </div>
      </div>
      <Footer/>
    </>
  )
}

export default Profile
