import { sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const emailRef = useRef();

  const handleForgetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        // ..
        window.location = "https://workspace.google.com/gmail/";
        e.target.reset();
      })
      .catch((error) => {
        //
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };
  return (
    <div className=" mx-auto flex items-center justify-center min-h-[500px] bg-[#224230c0]">
      <form
        onSubmit={handleForgetPass}
        className="fieldset w-10/12 md:w-4/12 rounded-lg p-5 mx-auto bg-white"
      >
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>

        <p className="italic underline">
          <span className="text-red-500">Note:</span>If you enter reset button a
          password reset link will send to your email.
        </p>
        <label className="label">Email</label>
        <input
          ref={emailRef}
          name="email"
          type="email"
          className="input w-full "
          placeholder="Enter Your Email"
        />
        <button type="submit" className="btn btn-primary mt-4">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
