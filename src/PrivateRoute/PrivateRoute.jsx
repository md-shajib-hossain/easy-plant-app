import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate state={location.pathname} to="/login">
        {" "}
      </Navigate>
    );
  }
};

export default PrivateRoute;
