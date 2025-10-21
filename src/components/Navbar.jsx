import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/plant-logo.png";

const Navbar = () => {
  return (
    <section className="w-full bg-[#224229] ">
      <div className="navbar shadow-sm text-white w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/plants">Plants</NavLink>
              </li>
              <li>
                <NavLink to="/myprofile">My Profile</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-1 text-2xl font-semibold">
              <span>
                <img className="w-10 rounded-full " src={logo} alt="" />
              </span>
              Green Nest
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/plants">Plants</NavLink>
            </li>
            <li>
              <NavLink to="/myprofile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img src="https://americanplantexchange.com/cdn/shop/products/peacelily-2.jpg?v=1672881763&width=1445" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
