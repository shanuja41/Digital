import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>🟧🟥🟨 Digital</h2>
          <p>We are passionate about crafting innovative digital solutions that help businesses thrive in a rapidly evolving digital landscape.</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-twitter" />
            <i className="fab fa-youtube" />
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
        <select>
          <option>Australia</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
