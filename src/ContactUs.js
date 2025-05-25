import React, { useState } from 'react';
import './ContactUs.css';
import Footer from './Footer';
import girl from './assets/girl.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const ContactUs = () => {

    const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
        firstName: form.firstname.value.trim(),
        lastName: form.lastname.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        company: form.company.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim(),
    };

    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }

   
    setSubmitted(true);
    form.reset();
    alert('✅ Your message has been sent successfully!');

    };

    const [submitted, setSubmitted] = useState(false);


  return (
    <div className="contact-page">
      <div className="contact-header">
        <p className="tagline">CONTACT US</p>
        <h1>We're Here to Help with All Your Needs</h1>
        <p>Whether you're looking for assistance, a quote, or information, our team is ready to support you.</p>
      </div>

     <div className="contact-info">
      <div className="box">
        <FaPhoneAlt size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
        <h4>Phone</h4>
        <p>+61 234 4703 432</p>
      </div>
      <div className="box">
        <FaEnvelope size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
        <h4>Email</h4>
        <p>info@adadadigital.com.au</p>
      </div>
      <div className="box">
        <FaMapMarkerAlt size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
        <h4>Location</h4>
        <p>NSW, Sydney, AU</p>
      </div>
  </div>


      <div className="contact-form-section">
        <div className="contact-left">
          <h3>Let's work together on your next project</h3>
          <p>I consistently exceed our clients’ expectations by providing high-quality digital solutions.</p>
          <img src={girl} alt="contact"></img>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Get in Touch with Us</h3>

          <div className="form-row">
            <input type="text" placeholder="First Name" name="firstname" required />
            <input type="text" placeholder="Last Name" name="lastname" required  />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" name="email" required />
            <input type="text" placeholder="Mobile Number" name="phone"  />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" name="company" />
            <input type="text" placeholder="Subject" name="subject" required  />
          </div>
          <textarea placeholder="Message" name="message" required ></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </div>
      <Footer /> 
    </div>
    
    
  );

  
};

export default ContactUs;
