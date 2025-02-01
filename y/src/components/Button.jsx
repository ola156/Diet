import React from "react";
import { Link } from "react-router-dom";

const Button = ({ ButtonClass, title }) => {
  return (
    <button
      className={`${ButtonClass}  py-[5px] rounded bg-green-100 flex items-center text-slate-200  radius-border`}
    >
      {" "}
      <Link to="">
        <span className="text-[12px] text-white "> {title}</span>
      </Link>
    </button>
  );
};

export default Button;
