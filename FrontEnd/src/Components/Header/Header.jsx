import './header.css';
import { TelephoneFill, Facebook, Twitter, Instagram, GeoAltFill, CalendarFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../../../public/assets/730005bd39661bcd3959d4dad27f9d5b.jpg';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLogin = () => {
    navigate('/login'); 
  };

  return (
    <>
      <div className="header">
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
                <Twitter style={{ color: 'blue', fontSize: '20px' }} />
              </a>
              <a href="#" className="text-light mx-2">
                <Instagram style={{ color: 'pink', fontSize: '20px' }} />
              </a>
            </div>
            <button type="button" onClick={handleLogin} className='butt'>Log in</button> 
          </div>
        </div>
        <div className="bheader">
          <nav className="navbar navbar-expand-lg">
            <div className="container navbar-container">
              <div className="navbar-brand" to="/">
                <img src={img} alt="Brand Logo" className="logo-img" />  <span className='fw-semibold '>SCHOOL TEAM</span>
              </div>
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <div className="navyy">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about" onClick={toggleMenu}>About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/post" onClick={toggleMenu}>Timeline</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile" onClick={toggleMenu}>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/course" onClick={toggleMenu}>Courses</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;