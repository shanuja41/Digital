import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <p className="tagline">CONTACT US</p>
        <h1>We're Here to Help with All Your Needs</h1>
        <p>Whether you're looking for assistance, a quote, or information, our team is ready to support you.</p>
      </div>

      <div className="contact-info">
        <div className="box"><h4>📞 Phone</h4><p>+61 234 4703 432</p></div>
        <div className="box"><h4>📧 Email</h4><p>info@adadadigital.com.au</p></div>
        <div className="box"><h4>📍 Location</h4><p>NSW, Sydney, AU</p></div>
      </div>

      <div className="contact-form-section">
        <div className="contact-left">
          <h3>Let's work together on your next project</h3>
          <p>I consistently exceed our clients’ expectations by providing high-quality digital solutions.</p>
          <img src="/woman.png" alt="Contact" />
        </div>

        <form className="contact-form">
          <h3>Get in Touch with Us</h3>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Mobile Number" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
