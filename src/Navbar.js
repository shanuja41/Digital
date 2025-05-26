import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
         <img src={logo} alt="logo"></img>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about-us">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
      <button className="quote-btn">Get Quotes</button>
    </nav>
  );
};

export default Navbar;
