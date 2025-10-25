import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { loading } = use(AuthContext);
  // ekhane navbar and footer fixed thakbe. then outlet er moddhe changable jinish gula ashbe
  return (
    <>
      <Navbar></Navbar>
      {loading ? <Loader /> : <Outlet></Outlet>}

      <Footer></Footer>
    </>
  );
};

export default MainLayout;
