import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className={`hero-content slide-in ${visible ? "active" : ""}`}>
        <p className="tagline">INNOVATIVE SOLUTIONS FOR A DIGITAL WORLD</p>
        <h1 className="headline">
          Transforming Ideas into <br /> Digital Reality
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
