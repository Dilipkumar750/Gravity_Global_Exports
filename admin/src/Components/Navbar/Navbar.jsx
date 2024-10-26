import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import navlogo from '../Assets/nav-logo.png';
import navprofileIcon from '../Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm mb-1" style={{ backgroundColor: 'orange' }}>
      <div className="container d-flex justify-content-center">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img src={navlogo} className="img-fluid" style={{ width: '200px' }} alt="Logo" />
        </a>
        {/* Uncomment and use the below if you want to add the profile icon */}
        {/* 
        <img src={navprofileIcon} className="img-fluid nav-profile ms-auto" style={{ width: '75px' }} alt="Profile Icon" /> 
        */}
      </div>
    </nav>
  );
}

export default Navbar;
