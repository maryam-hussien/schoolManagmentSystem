import './DashSidebar.css'
import { Boxes , PersonFill ,Book ,CalendarCheckFill ,ClipboardData , Grid3x3GapFill ,ArrowBarLeft} from 'react-bootstrap-icons';
import img from '../../../../public/assets/730005bd39661bcd3959d4dad27f9d5b.jpg'

const DashSidebar = () => {
  return (
    <div className="dashSidebar ">
      <div className='d-flex topSideBar'>
      <img src={img} alt="Brand Logo" className="logo-img" />
            <span className='fw-semibold '>SCHOOL TEAM</span>
      </div>
      <div className='px-4 py-3'>
        <ul className="nav flex-column m-auto">
          <a className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4" href="#">
            <Boxes style={{ color: 'white', fontSize: '19px' }} />
            Dashboard
          </a>
          <a className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4" href="#">
            <PersonFill style={{ color: 'white', fontSize: '19px' }} />
            Profile
          </a>
          <a className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4" href="#">
            <Book style={{ color: 'white', fontSize: '19px' }} />
            Courses
          </a>
          <a className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4" href="#">
            <CalendarCheckFill style={{ color: 'white', fontSize: '19px' }} />
            Attendence
          </a>
          <a className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4" href="#">
            <ClipboardData style={{ color: 'white', fontSize: '19px' }} />
            Grades
          </a>
          <a className="icon-link icon-link-hover link-opacity-50-hover link-light fw-light mb-4" href="#">
            <Grid3x3GapFill style={{ color: 'white', fontSize: '19px' }} />
            Schedule
          </a>
          <a className="icon-link icon-link-hover link-opacity-50-hover  fw-light mb-4 opacity-100" href="#" style={{color:'red'}}>
            <ArrowBarLeft style={{ color: 'red', fontSize: '19px' }} />
            Log Out
          </a>


      </ul>
      </div>
    </div>
  )
}

export default DashSidebar