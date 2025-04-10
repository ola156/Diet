import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure Better Education For Better World</h1>
        <p>
          Our Cutting-edge curriculum is designed to empower students with the
          knowledge,skills,and experiences needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">
          Explore More{" "}
          <img src={dark_arrow} alt="dark_arrow" className="dark_arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
