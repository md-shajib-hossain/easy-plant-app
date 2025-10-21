import React from "react";

import ImageSlider from "../components/ImageSlider";
import PlantCard from "../components/PlantCard";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen py-2">
      <ImageSlider></ImageSlider>

      <main className="">
        <div className=" category py-3 ">
          <PlantCard></PlantCard>
        </div>
      </main>
    </div>
  );
};

export default Home;
