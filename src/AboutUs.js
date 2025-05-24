import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-header">
        <p className="tagline">ABOUT US</p>
        <h1>Discover Our Story, Mission, and Vision for the Future</h1>
        <p className="desc">
          At Adada Digital, we are passionate about crafting innovative digital solutions.
          We specialize in delivering custom digital strategies aligned with your brand’s goals.
        </p>
      </div>

      <div className="about-images">
        <img src="/team1.jpg" alt="Team 1" />
        <img src="/team2.jpg" alt="Team 2" />
        <img src="/team3.jpg" alt="Team 3" />
      </div>

      <div className="why-work">
        <h2>Crafting Digital Excellence, Together with You</h2>
        <div className="pill-container">
          <span>Logo Design</span>
          <span>Web Design</span>
          <span>Mobile Apps</span>
          <span>Email Design</span>
          <span>Web Development</span>
          <span>Infographics</span>
          <span>Social Media Visuals</span>
        </div>
      </div>

      <div className="about-cards">
        <div className="card"><h3>Experience Team</h3><p>Delivering high-quality work consistently.</p></div>
        <div className="card"><h3>Innovative Solutions</h3><p>We stay ahead with tech and trends.</p></div>
        <div className="card"><h3>Client-Centric Approach</h3><p>We focus on your goals and satisfaction.</p></div>
        <div className="card"><h3>Competitive Pricing</h3><p>Quality services without breaking the bank.</p></div>
        <div className="card"><h3>Proven Track Record</h3><p>Trusted by many successful clients.</p></div>
        <div className="card"><h3>Dedicated Support</h3><p>We're with you beyond launch.</p></div>
      </div>

      <div className="about-values">
        <h2>Guiding Principles That Drive Our Success</h2>
        <div className="value-cards">
          <div><h4>Innovation</h4><p>We push boundaries creatively.</p></div>
          <div><h4>Integrity</h4><p>We act transparently and ethically.</p></div>
          <div><h4>Excellence</h4><p>We deliver impactful digital outcomes.</p></div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Successful Projects</p>
        </div>
        <div className="stat-card">
          <h3>30+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat-card">
          <h3>5+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
