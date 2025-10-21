import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const MainLayout = () => {
  // ekhane navbar and footer fixed thakbe. then outlet er moddhe changable jinish gula ashbe
  return (
    <>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
