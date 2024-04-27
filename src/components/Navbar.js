import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button';
import './Navbar.css';
import logo from "../images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, [])

  // window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar-container">
        <div className="logo">
        <Link to="/" className="navbar-logo">
          <img src={logo} class="logo-img" alt="Logo"></img> <h2>EdTract</h2>
        </Link>
        </div>
        <div className="nav-icons">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Events Calender
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            
          </ul>
        </div>
        <Link to="/sign-up  " className="nav-links-mobile" onClick={closeMobileMenu}>
          Sign Up
        </Link>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        
      </div>
    </>
  )
}

export default Navbar
