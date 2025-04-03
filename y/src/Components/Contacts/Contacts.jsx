import React from "react";
import "./Contacts.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg_icon" />
        </h3>
        <p>
          Feel free to reach out through contact form find our information
          below.Your feedback ,questions,and suggestions are important to us as
          we strive to provide exeptional service to our university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="mail_icon" /> contact@ola156.dev
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="phone_icon" /> +234 8087 442 124
          </li>
          <li>
            <img src={location_icon} alt="location_icon" />
            14 Maduke way, Cambridge <br /> MA02139,united States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Write Your Message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
