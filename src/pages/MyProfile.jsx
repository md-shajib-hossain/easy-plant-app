import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="w-11/12 mx-auto">
      {user ? (
        <div className="hero bg-base-200 max-h-[600px]mt-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              cls
              src={user.photoURL}
              className="max-w-[240px] h-[250px]  rounded-lg shadow-2xl"
            />
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
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </div>
        </div>
      ) : (
        <div> user not logged in yet!!! </div>
      )}
    </div>
  );
};

export default MyProfile;
