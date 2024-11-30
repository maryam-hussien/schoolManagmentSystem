import {ImageFill ,ArrowRight ,KeyFill} from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const ProfileSetting = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (

    <div className="ProfileScheduleSection m-auto mt-3 px-4 py-3  fs-6">
        <div className="d-flex align-items-center justify-content-between mb-2 ">
          <div>
                <ImageFill style={{ color: 'rgb(10 5 7)', fontSize: '20px' }} />
                <span className="ms-2 text-black-50 fw-semibold">Change ProfileImage</span>
          </div>
          <div>
                <ArrowRight style={{ color: 'rgb(10 5 7)', fontSize: '20px' , cursor: 'pointer'}}
                            onClick={() => navigate('/profile')} // Navigate on click
                            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
                <KeyFill style={{ color: 'rgb(10 5 7)', fontSize: '20px' }} />
                <span className="ms-2 text-black-50 fw-semibold">Change Password</span>
          </div>
          <div>
                <ArrowRight style={{ color: 'rgb(10 5 7)', fontSize: '20px', cursor: 'pointer' }} 
                            onClick={() => navigate('/profile')} // Navigate on click
/>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-danger" type="button">Log Out</button>
</div>
    </div>
  )
}

export default ProfileSetting