import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div>
      <div className="hero  min-h-screen bg-[#224230c0]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Pleaase Log In!</h1>
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Log In</button>
            </form>
            <div>
              <p className="">
                Don't have an account?{" "}
                <Link
                  to="/registration"
                  className="text-blue-700 font-semibold underline"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
