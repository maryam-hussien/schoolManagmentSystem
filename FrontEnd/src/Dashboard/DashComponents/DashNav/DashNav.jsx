import "./Dashnav.css"
import img from '../../../../public/assets/730005bd39661bcd3959d4dad27f9d5b.jpg';


const DashNav = () => {
  return (
    <>
        <div className='d-flex topSideBar'>
          <img src={img} alt="Brand Logo" className="logo-img" />
          <span className='fw-semibold'>SCHOOL TEAM</span>
      </div>
    </>
  )
}

export default DashNav