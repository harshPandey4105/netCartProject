import React from 'react';
import './Header.css';
import logo from '../images/logo.png'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
           <img src={logo} alt="Logo-Image" />
      </div>
    </header>
  );
}

export default Header;
