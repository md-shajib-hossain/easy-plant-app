import React, { use, useState } from "react";
import { Link } from "react-router";

import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

//
//

const Registration = () => {
  const { createUserWithEP } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  // console.log(createUserWithGoogle);

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
    createUserWithEP(email, password)
      .then((result) => {
        console.log(result);
        // setUser(result.user);
        toast.success("Registered Successful");
      })
      .catch((error) => console.log(error));
  };

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
            </form>
            <div>
              <p className=" ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 font-semibold underline"
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
