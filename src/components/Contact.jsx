import { Earth, Home, Mail, Phone, PhoneIcon, WholeWord } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3075352/pexels-photo-3075352.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
          {/*  */}
          <div className="flex mb-3 px-5 py-2 items-center gap-2 border bg-transparent text-white rounded-lg shadow">
            <PhoneIcon className="mx-auto  text-green-500" size={26} />
            <h3 className="font-semibold ">Call Us</h3>
            <p className="text-white">+880 17XX-XXXXXX</p>
          </div>
          <div className="flex mb-3 px-5 py-2 items-center gap-2 border bg-transparent text-white rounded-lg shadow">
            <Mail className="mx-auto  text-blue-500" size={26} />
            <h3 className="font-semibold ">Mail Us</h3>
            <p className="text-white">www.hero@zero.com</p>
          </div>
          <div className="flex mb-3 px-5 py-2 items-center gap-2 border bg-transparent text-white rounded-lg shadow">
            <Earth className="mx-auto  text-orange-500" size={26} />
            <h3 className="font-semibold ">Visit Us</h3>
            <p className="text-white">www.herowebsite.com</p>
          </div>
          {/*  */}
          <Link to="/">
            <button className="btn btn-outline ">
              <span>
                <Home></Home>
              </span>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
