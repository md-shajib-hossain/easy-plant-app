import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3401172/pexels-photo-3401172.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About </h1>
          <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
            Your trusted platform for booking premium indoor plants. Bring
            nature into your home with our expert-curated collection and
            hassle-free delivery service.
          </p>
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

export default About;
