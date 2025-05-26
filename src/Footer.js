import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">

     
      <div className="newsletter">
        <h3>Subscribe <span>Our Newsletter</span></h3>
        <p>
          Subscribe to Adada Digital's newsletter for the latest updates, industry news, and exclusive offers.
          Stay informed and ahead in the digital world!
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>

      
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="logo"></img>
          <p>
            At Adada Digital, we are passionate about crafting innovative digital solutions that help businesses thrive in a rapidly evolving digital landscape.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Branding</li>
              <li>UI/UX</li>
              <li>Software Development</li>
              <li>SEO</li>
              <li>Hosting</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: info@adadadigital.com.au</li>
              <li>Phone: +61 234 4703 432</li>
              <li>Address: NSW, Sydney, AU</li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© 2024 - ADADA DIGITAL. All rights reserved</p>
        <p>Australia</p>
      </div>

    </footer>
  );
};

export default Footer;
