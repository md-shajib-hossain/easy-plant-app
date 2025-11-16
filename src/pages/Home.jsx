import React, { use } from "react";

import ImageSlider from "../components/ImageSlider";
import PlantCard from "../components/PlantCard";
import AsideBar from "../components/AsideBar";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/Loader";
import PLantOfWeek from "../components/PLantOfWeek";
import Experts from "../components/Experts";

const Home = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto min-h-screen py-2">
      <ImageSlider></ImageSlider>
      <h1 className="text-xl font-semibold pt-10 pb-2 mb-10 px-2 text-center">
        Top Rated Indoor Plants
      </h1>
      <main className="gap-5">
        <div className=" ">
          <PlantCard></PlantCard>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12  gap-10 my-10 ">
          {/* Plant of week */}
          <div className="md:col-span-8 col-span-6">
            <PLantOfWeek></PLantOfWeek>
          </div>
          <div className="md:col-span-4 col-span-6 h-full">
            <AsideBar></AsideBar>
          </div>
        </div>
        <Experts></Experts>
      </main>
    </div>
  );
};

export default Home;
