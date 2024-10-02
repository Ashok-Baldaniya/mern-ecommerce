import React from "react";
import "./Hero.css";
import logo from "../Assets/ecom-logo.png";
import arIcon from "../Assets/ecom-logo.png";
import heroImage from "../Assets/ecom-logo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={logo} alt="" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arIcon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
