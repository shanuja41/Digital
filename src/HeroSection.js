import React from 'react';
import './HeroSection.css';
import Particles from "react-tsparticles";

const HeroSection = () => {
  return (
    <div className="hero">

      <div className="hero-content">
        <p className="tagline">INNOVATIVE SOLUTIONS FOR A DIGITAL WORLD</p>
        <h1 className="headline">Transforming Ideas into <br /> Digital Reality</h1>
        <p className="subtext">
          Bringing your vision to life with innovative digital solutions, combining creativity and technology to achieve outstanding results for your business.
        </p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default HeroSection;