import React from "react";
import errorimg from "../assets/error.jpg";
import { House } from "lucide-react";
import { NavLink } from "react-router";
const ErrorGlobal = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center min-h-screen">
      <img className="h-[400px]" src={errorimg} alt="" />
      <NavLink to="/">
        {" "}
        <button className="btn  btn-primary px-10 py-5 mt-5">
          <span>
            <House size={24} strokeWidth={1.75} />
          </span>
          Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorGlobal;
