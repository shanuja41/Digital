import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="tagline">INNOVATIVE SOLUTIONS FOR A DIGITAL WORLD</p>
        <h1 className="headline">
          Transforming <span className="highlight">Ideas</span> into <br />
          <span className="highlight">Digital Reality</span>
        </h1>
        <p className="subtext">
          Bringing your vision to life with innovative digital solutions,
          combining creativity and technology to achieve outstanding results for
          your business.
        </p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
