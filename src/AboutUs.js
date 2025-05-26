import React from 'react';
import './AboutUs.css';
import team1 from './assets/team1.jpg';
import team2 from './assets/team2.jpg';
import team3 from './assets/team3.jpg';
import girl from './assets/girl.png';
import { FaUsers, FaLightbulb, FaHandshake, FaDollarSign, FaTrophy, FaHeadset, FaBalanceScale, FaMedal } from 'react-icons/fa';


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
        <img src={team1} alt="Team 1" />
        <img src={team2} alt="Team 2" />
        <img src={team3} alt="Team 3" />
      </div>

      <div className="why-work">
        <h2><span>WHY WORK WITH US </span><br></br>Crafting Digital Excellence, Together with You</h2>
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
        <div className="card">
          <FaUsers size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
          <h3>Experience Team</h3>
          <p>Delivering high-quality work consistently.</p>
        </div>

        <div className="card">
          <FaLightbulb size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
          <h3>Innovative Solutions</h3>
          <p>We stay ahead with tech and trends.</p>
        </div>

        <div className="card">
          <FaHandshake size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
          <h3>Client-Centric Approach</h3>
          <p>We focus on your goals and satisfaction.</p>
        </div>

        <div className="card">
          <FaDollarSign size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
          <h3>Competitive Pricing</h3>
          <p>Quality services without breaking the bank.</p>
        </div>

        <div className="card">
          <FaTrophy size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
          <h3>Proven Track Record</h3>
          <p>Trusted by many successful clients.</p>
        </div>

        <div className="card">
          <FaHeadset size={30} style={{ marginBottom: '10px', color: '#ff4d4d' }} />
          <h3>Dedicated Support</h3>
          <p>We're with you beyond launch.</p>
        </div>
    </div>


      <div className="about-values">
        <h2>Guiding Principles That Drive Our Success</h2>
        <div className="value-cards">
          <div className="v-card">
            <FaLightbulb size={28} style={{ marginBottom: '8px', color: '#ff4d4d' }} />
            <h4>Innovation</h4>
            <p>We push boundaries creatively.</p>
          </div>
          <div className="v-card">
            <FaBalanceScale size={28} style={{ marginBottom: '8px', color: '#ff4d4d' }} />
            <h4>Integrity</h4>
            <p>We act transparently and ethically.</p>
          </div>
          <div className="v-card">
            <FaMedal size={28} style={{ marginBottom: '8px', color: '#ff4d4d' }} />
            <h4>Excellence</h4>
            <p>We deliver impactful digital outcomes.</p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Successful Projects</p>
          <p className="p-design">We have delivered over 50 high-impact projects across various industries, consistently exceeding client expectations through innovative and customized digital solutions.</p><br></br>

          <h3>30+</h3>
          <p>Satisfied Clients</p>
          <p className="p-design"> Trusted by over 30 clients worldwide, we prioritize client satisfaction and long-term partnerships, ensuring business growth and success.</p><br></br>

          <h3>5+</h3>
          <p>Years of Experience</p>
          <p className="p-design">With 5 years of industry experience, our expert team combines creativity and technology to deliver outstanding digital outcomes.</p><br></br>

        </div>

        <div className="stat-card">
          <img src={girl} alt="girl" className="stat-girl"/>

        </div>

        <div className="stat-card">
          <h3>50+</h3>
          <p>Successful Projects</p>
          <p className="p-design">We have delivered over 50 high-impact projects across various industries, consistently exceeding client expectations through innovative and customized digital solutions.</p><br></br>

          <h3>30+</h3>
          <p>Satisfied Clients</p>
          <p className="p-design"> Trusted by over 30 clients worldwide, we prioritize client satisfaction and long-term partnerships, ensuring business growth and success.</p><br></br>

          <h3>5+</h3>
          <p>Years of Experience</p>
          <p className="p-design">With 5 years of industry experience, our expert team combines creativity and technology to deliver outstanding digital outcomes.</p><br></br>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
