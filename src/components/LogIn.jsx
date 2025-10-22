import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";

import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";

const LogIn = () => {
  const { loginWithEP, setUser, createUserWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(loginWithEP);

  // log in func
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithEP(auth, email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Log In Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.meesage);
      });
  };

  //
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    console.log("google btn clicked");
    createUserWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate("/");
        toast.success("Sign In Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.meesage);
      });
  };
  return (
    <div>
      <div className="hero  min-h-screen bg-[#224230c0]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Pleaase Log In!</h1>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <p className="text-blue-700 text-md font-semibold cursor-pointer hover:underline">
                Forget Password?
              </p>
              <button className="btn btn-neutral mt-4">Log In</button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn mt-2 hover:bg-blue-50 bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign In with Google
              </button>
            </form>
            <div>
              <p className="">
                Don't have an account?{" "}
                <Link
                  to="/registration"
                  className="text-blue-700 font-semibold hover:underline"
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
