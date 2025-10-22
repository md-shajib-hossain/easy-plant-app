import React from "react";

import ImageSlider from "../components/ImageSlider";
import PlantCard from "../components/PlantCard";
import AsideBar from "../components/AsideBar";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen py-2">
      <ImageSlider></ImageSlider>
      <h1 className="text-xl font-semibold pt-10 pb-2 mb-10 px-2 text-center">
        Top Rated Indoor Plants
      </h1>
      <main className="grid grid-cols-12 gap-2">
        <div className=" category col-span-10 ">
          <PlantCard></PlantCard>
        </div>
        <div className=" col-span-2">
          <AsideBar></AsideBar>
        </div>
      </main>
    </div>
  );
};

export default Home;
