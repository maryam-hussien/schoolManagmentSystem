import './header.css';
import { TelephoneFill, Facebook, Twitter, Instagram, GeoAltFill, CalendarFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../../../public/assets/730005bd39661bcd3959d4dad27f9d5b.jpg';

function Header() {
  return (
    <>
      <div className="header ">
        <div className="top-navbar">
          <div className="container d-flex flex-column flex-md-row justify-content-end"> 
            <div className="sicon d-flex flex-column flex-md-row align-items-left">
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <TelephoneFill style={{ color: '#fddb88', fontSize: '20px' }} />
                <span className="ms-2">01097315496</span>
              </div>
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <GeoAltFill style={{ color: '#fddb88', fontSize: '20px' }} />
                <span className="ms-2">Suite Egypt</span>
              </div>
              <div className="d-flex align-items-center">
                <CalendarFill style={{ color: '#fddb88', fontSize: '20px' }} />
                <span className="ms-2">Mon-Sat 8am</span>
              </div>
            </div>
            <div className="social-icons d-flex align-items-center">
              <a href="#" className="text-light mx-2">
                <Facebook style={{ color: 'blue', fontSize: '20px' }} />
              </a>
              <a href="#" className="text-light mx-2">
                <Twitter style={{ color: 'black', fontSize: '20px' }} />
              </a>
              <a href="#" className="text-light mx-2">
                <Instagram style={{ color: 'pink', fontSize: '20px' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="bheader">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src={img} alt="Brand Logo" className="logo-img" /> SCHOOL TEAM
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav"> 
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Courses</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      </>
    
  );
}

export default Header;
