import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="">
      <div className=" mt-12 max-w-[85%] mx-auto">
        <div className="flex justify-around pt-10 pr-10 hero-flex ">
          <div className="text-div">
            <h2 className="capitalize font-extrabold text-3xl mb-5 hero-h2">
              Unlock Your <br />{" "}
              <span className="text-green-100">healthiest</span> self <br />{" "}
              with expert <br />
              <span className="text-orange-300">nutrition </span> guidance
            </h2>

            <p className="text-sm hero-p">
              Transform Your health with tailored nutrition plans <br /> and
              support from Doctors of the future a certified <br /> expert
              dedicated to helping you achieve your <br /> wellness goals
              Weather you are looking to improve <br />
              your diet, manage a health condition, or simply feel <br />
              better. We're here to guid you every step of the <br />
              way.
            </p>

            <div className="w-full mt-5 flex justify-between items-center ">
              <Button title="Start Your Journey" ButtonClass={"px-5"} />
              <div className="flex items-center px-3">
                <div>
                  <img src="/Logo color 1.png" alt="arrow" className="w-6" />
                </div>
                <p className="ml-3 text-[12px]">Learn More</p>
              </div>
            </div>
          </div>
          <div>
            <div className=" relative w-full ">
              <img
                src="/Vector.png"
                alt=""
                className="absolute z-50 w-28 -top-14 -left-8 vector"
              />
              <div className="w-full">
                <img
                  src="/Display Image 1.png"
                  alt="hero"
                  className="max-w-[330px] img-frame absolute z-30"
                />
              </div>
              <div className=" relative top-12 left-20">
                <img
                  src="/Display image 2.png"
                  alt="hero"
                  className="max-w-[330px] img-frame "
                />
              </div>
              <img
                src="/path.png"
                alt=""
                className="absolute z-30 w-28 -right-20 mb-2 vector2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
