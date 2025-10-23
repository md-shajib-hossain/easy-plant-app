import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import errorjpg from "../assets/error.jpg";
import admin from "../assets/admin.jpg";
import Loader from "../components/Loader";

const MyProfile = () => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto my-10 rounded-md">
      {user ? (
        <div className="hero bg-base-200 max-h-[600px]mt-10">
          <div className="hero-content flex-col lg:flex-row">
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                className="max-w-[240px] h-[250px]  rounded-lg shadow-2xl"
              />
            ) : (
              <img
                className="max-w-[240px] h-[250px]  rounded-lg shadow-2xl"
                src={admin}
                alt="admin"
              />
            )}
            <div>
              <h1 className="text-xl font-semibold ">Hi ! This is_</h1>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#0c4eb9] via-[#DC1FFF] to-[#00BFFF] bg-clip-text text-transparent">
                {user.displayName}
              </h1>
              <p className="py-2">
                I’m a passionate learner with a dream to become a skilled
                website developer. I love creating things that live on the
                internet — from clean, functional designs to interactive user
                experiences. I’m constantly improving my skills in modern web
                technologies and working toward turning my dream of becoming a
                professional web developer into reality.
              </p>
              <p className="pb-3 font-semibold">My Email:{user.email}</p>
              <Link to="/updateprofile">
                <button className="btn btn-primary">Update Profile</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-2 justify-center ">
          {" "}
          <img className="w-[300px] mx-auto mt-10" src={errorjpg} alt="" />
          <h1 className="text-lg font-bold text-center">USER NOT FOUND!</h1>
          <button className="btn mx-auto w-40 btn-primary text-center">
            <Link to="/login">
              {" "}
              <span>Please Log In </span>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
