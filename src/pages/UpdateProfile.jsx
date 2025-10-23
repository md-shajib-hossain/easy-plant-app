import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, setUser, updateUser } = use(AuthContext);
  console.log(user);
  const reUpdateUser = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    console.log(name, email, photo);
    if (user.email === email) {
      updateUser({
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          toast.success("Profile Updated Successfully");
          setUser({ ...user, displayName: name, photoURL: photo });
        })
        .catch((error) => {
          toast(error.message);
          console.log(error.message);
          setUser(user);
        });
    } else {
      toast.error("Email Doesn't Matched");
    }
  };
  return (
    <div className="hero bg-base-300 h-50%  w-12/12 mx-auto py-10">
      <div className="hero-content flex-col gap-[200px] lg:flex-row-reverse">
        <img src={user.photoURL} className="w-3xs rounded-lg  shadow-2xl" />

        {/* form will be here */}
        <div className="rounded-lg w-[400px] h-full p-5 bg-white">
          <h1 className="text-2xl font-semibold">Update Your Profile</h1>
          <form onSubmit={reUpdateUser} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter New Name"
              required
            />
            <label className="label">Photo URL </label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              required
              placeholder="Confirm Email"
            />

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
