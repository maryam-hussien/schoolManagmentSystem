import "./profile.css"
import profileImg from "../../../public/assets/profile.jpg"
import ProfileBar from "../../Components/ProfileBar/ProfileBar";

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
    </div>
      </div>
    </>
  )
}

export default Profile
