import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/plant-logo.png";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaSmile } from "react-icons/fa"; // ধরে নিচ্ছি Smile একটি আইকন
import { Frown, Smile } from "lucide-react";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Failed to log out");
      });
  };

  return (
    <section className="w-full bg-[#224229]">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
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
                <img
                  className="w-10 rounded-full"
                  src={logo}
                  alt="Green Nest Logo"
                />
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
          {user ? (
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 m-1"
              >
                {user.photoURL ? (
                  <img
                    className="h-12 w-12 rounded-full"
                    src={user.photoURL}
                    alt={user.displayName || user.email || "User"}
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/48")
                    } // Fallback if image fails to load
                  />
                ) : (
                  <FaSmile className="h-10 w-10 text-white" />
                )}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm text-black"
              >
                <li>
                  <span>{user.displayName || user.email || "User"}</span>
                  <button onClick={handleLogOut} className="text-red-600">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="w-12 h-12 m-1">
                <Frown size={18} className="h-12 w-12 text-white" />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-[20] w-52 p-2 shadow-sm text-black"
              >
                <li>
                  <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Register</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
