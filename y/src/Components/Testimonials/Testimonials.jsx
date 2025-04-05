import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideFoward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideFoward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />
                <div>
                  <h3>Wlliams Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue y degree at edusity was one of the best
                decitionxs i've ever made. The supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence has truely exceeded my expectations.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_1" />
                <div>
                  <h3>Wlliams Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue y degree at edusity was one of the best
                decitionxs i've ever made. The supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence has truely exceeded my expectations.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_1" />
                <div>
                  <h3>Wlliams Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue y degree at edusity was one of the best
                decitionxs i've ever made. The supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence has truely exceeded my expectations.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />
                <div>
                  <h3>Wlliams Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                choosing to pursue y degree at edusity was one of the best
                decitionxs i've ever made. The supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence has truely exceeded my expectations.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
