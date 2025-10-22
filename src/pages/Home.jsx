import React from "react";

import ImageSlider from "../components/ImageSlider";
import PlantCard from "../components/PlantCard";
import { FaTree } from "react-icons/fa";
import FeaturePlants from "../components/FeaturePlants";
import AsideBar from "../components/AsideBar";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen py-2">
      <ImageSlider></ImageSlider>
      <h1 className="text-xl font-semibold py-10 px-2 text-center rounded-md">
        Top Rated Indoor Plants
      </h1>
      <main className="grid grid-cols-12 gap-2 ">
        <div className=" category col-span-2 ">
          <PlantCard></PlantCard>
        </div>
        <div className="col-span-8 ">
          <FeaturePlants></FeaturePlants>
        </div>
        <div className=" col-span-2">
          <AsideBar></AsideBar>
        </div>
      </main>
    </div>
  );
};

export default Home;
