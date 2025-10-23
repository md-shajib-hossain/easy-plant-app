import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4 ">
        <Link to="about">
          <h1 className="link link-hover font-semibold">About us</h1>
        </Link>
        <Link to="contact">
          <h1 className="link link-hover font-semibold">Contact</h1>
        </Link>
        <Link to="privacy-policy">
          <h1 className="link link-hover font-semibold">Privacy Policy</h1>
        </Link>
      </nav>
      <nav>
        {" "}
        <h1 className="text-lg text-blue-700 font-semibold mb-5">
          Follow us On{" "}
        </h1>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://instagram.com">
            <p>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/instagram-new.png"
                alt="instagram-new"
              />
            </p>
          </Link>
          <Link to="https://pinterest.com">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/arcade/64/pinterest.png"
              alt="pinterest"
            />
          </Link>
          <Link to="https://facebook.com">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/arcade/64/facebook-new.png"
              alt="facebook-new"
            />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-lg font-semibold">
          {new Date().getFullYear()} - “© 2025 GreenNest. All rights reserved.”{" "}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
