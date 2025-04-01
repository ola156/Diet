import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo-img" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Program</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
