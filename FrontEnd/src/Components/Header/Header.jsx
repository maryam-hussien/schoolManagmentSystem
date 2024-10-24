import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../../../public/assets/730005bd39661bcd3959d4dad27f9d5b-removebg-preview.png';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { BoxArrowInRight } from 'react-bootstrap-icons'; // Importing the icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="header">
      <div className="bheader">
        <nav className="navbar navbar-expand-lg">
          <div className="container navbar-container">
            <div className="navbar-brand" to="/">
              <img src={img} alt="Brand Logo" className="logo-img" />  
              <span className='fw-semibold'>SCHOOL TEAM</span>
            </div>
            <div className='navt'>
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
                    <Link className="nav-link" to="/social" onClick={toggleMenu}>SchoolSocial</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile" onClick={toggleMenu}>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/course" onClick={toggleMenu}>Courses</Link>
                  </li>
                </ul>
              </div>
              <Link className="login-icon" to="/login">
                <BoxArrowInRight size={24} className="nohover" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
