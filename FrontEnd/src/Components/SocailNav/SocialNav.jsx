import Back from "../../Dashboard/DashComponents/BackButton/Back";
import { ArrowLeftCircle} from 'react-bootstrap-icons';


import "./SocailNav.css"
const SocialNav = () => {
  return (
    <>  
    <div className="SocialNav">
      <Back link='/' color='black' font='28px' Icon={ArrowLeftCircle} label='Back To Home' labelColor='black' labelFontWeight='500'/>
      <button className="btn btn-primary SocialNavbtn ">Add New Post</button>
      </div>  
  </>
  )
}

export default SocialNav