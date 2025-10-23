import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";

import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

//
//

const Registration = () => {
  const { createUserWithEP, setUser, createUserWithGoogle } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  // console.log(createUserWithGoogle);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    const passRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (password)
      if (!passRegEx.test(password)) {
        toast.error(
          "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
        );
        return;
      }
    // create user with email and pass
    //
    //
    createUserWithEP(email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        toast.success("Registered Successful");
      })
      .catch((error) => console.log(error));
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
  //
  return (
    <div>
      <div className="hero  min-h-screen bg-[#224230c0]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">
              Pleaase Register!
            </h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
                required
              />
              <label className="label">Photo-URL</label>
              <input
                name="photourl"
                type="text"
                className="input"
                placeholder="Photo-URL"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <div className="relative">
                <label className="label">Password</label>

                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-[25px] top-[30px] cursor-pointer z-50"
                >
                  {showPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>

              <button className="btn btn-neutral mt-4">Register</button>
              {/* google btn */}
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
              <p className=" ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
