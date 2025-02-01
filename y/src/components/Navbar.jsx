import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="bg-white shadow flex justify-center ">
      <nav className="flex justify-between items-center max-w-[85%] w-full  py-3">
        <div className="flex items-center">
          <img src="/Logo color 1.png" alt="logo" className="w-8 mr-1" />
          <div>
            <p className="text-[10px] font-bold">DOCTOR</p>
          </div>
        </div>
        <div>
          <ul className="flex  sm:gap-7 lg:gap-10 text-[12px] text-black-75 nav-items ">
            <Link to="">
              <li>Book Online</li>
            </Link>
            <Link to="">
              <li>Programs</li>
            </Link>
            <Link to="">
              <li>Shop</li>
            </Link>
            <Link to="">
              <li>FAQs</li>
            </Link>
          </ul>
        </div>
        <div>
          <Button title="Login" ButtonClass={"nav-items px-9"} />
          <div onClick={() => setIsNavOpen((prev) => !prev)}>
            <HiOutlineMenuAlt3
              size={23}
              className="text-black-75  hamburger hidden"
            />
          </div>
        </div>
      </nav>
      <div
        className={`w-[60%] fixed z-50 top-0 bottom-0 right-0 bg-pink-50 shadow ${
          isNavOpen ? null : "hidden"
        } `}
      >
        <div className="px-6 py-4 ">
          <div className="flex items-center mb-5">
            <img src="/Logo color 1.png" alt="logo" className="w-8 mr-1" />
            <div>
              <p className="text-[10px] font-bold">DOCTOR</p>
            </div>
          </div>
          <div
            className="absolute top-6 right-6"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <IoIosCloseCircleOutline />
          </div>

          <nav className="flex justify-between items-center ">
            <div>
              <ul className="flex flex-col  text-[15px] text-black-75 uppercase dropdown gap-5 ">
                <Link to="">
                  <li>Book Online</li>
                </Link>
                <Link to="">
                  <li>Programs</li>
                </Link>
                <Link to="">
                  <li>Shop</li>
                </Link>
                <Link to="">
                  <li>FAQs</li>
                </Link>
                <div>
                  <Button title="Login" ButtonClass={"w-full px-9"} />
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
