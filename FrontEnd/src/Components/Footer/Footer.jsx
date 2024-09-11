import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./footer.css"
import footerImg from "../../../public/assets/Cityscapes - Town.png"
import { CalendarFill , TelephoneFill } from 'react-bootstrap-icons';



const footer = () => {
  return (
    <div className="position-static bottom-0 w-100  footerColor pt-2  d-flex flex-column">
      <div className='d-flex flex-row justify-content-evenly align-items-center footerFont'>
        <div className='d-flex flex-column m-auto'>
          <div className='fs-5 fw-medium mb-1'>Contact Details : </div>
          <div className='d-flex flex-column '>
          <div className='text-center  footerText opacity-75 mb-1'> if you have any questions or need help feel free to contact our team</div>
          <div className="d-flex align-items-center ">
                <CalendarFill style={{ color: '#fddb88', fontSize: '18px' }} />
                <span className="ms-2">school@gamil.com</span>
              </div>
              <div className="d-flex align-items-center pt-1">
                <TelephoneFill style={{ color: '#fddb88', fontSize: '20px' }} />
                <span className="ms-2">01097315496</span>
              </div>

          </div>
        </div>
        <div  className='d-flex flex-column m-auto '>
        <div className='fs-5 fw-medium mb-1'>Pages</div>
          <div className='fs-6 opacity-75'>teachers</div>
          <div className='fs-6 opacity-75'>Courses</div>
          <div className='fs-6 opacity-75'>AboutUs</div>
          <div className='fs-6 opacity-75'>Menu</div>
        </div>
        <div>
          <img src={footerImg} className='opacity-75 position-static img-fluid m-auto'/>
        </div>
      </div>
      <div className='d-flex flex-row footerSecColor p-1 justify-content-evenly footerFont'>
      <div className='text-start  footerText opacity-75 mt-2 '>
          CopyRight 2024 <span className='yellow'>@</span> All Rights Reserved
      </div>
      <div className='text-center opacity-75'>made with love</div>       
      </div>
      </div>
  )
}

export default footer