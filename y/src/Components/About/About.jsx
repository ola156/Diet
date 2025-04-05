import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="about_img" className="about_img" />
        <img src={play_icon} alt="play_icon" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UVIVERSITY</h3>
        <h2>Nuturing Tommorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with or university's
          comprehensive education program . Our Cutting-edge curriculum is
          designed to empower students with the knowledge, skills,and
          experiences needed to excel in the dynamic field of education
        </p>
        <p>
          With a focus of innovation, hands-on learning, and personalized
          mentorship, our program prepare aspiering educators to make a meaning
          impact in the classrooms,schools and communities
        </p>
        <p>
          Whether you aspier to become a teacher,administrator, conselor or
          educational leader,our diverse range of Programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education
        </p>
      </div>
    </div>
  );
};

export default About;
