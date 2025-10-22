import React from "react";
import usePlantsData from "../hook/usePlantData";

const PlantCard = () => {
  const { allData, loading, error } = usePlantsData();
  // console.log(allData);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Plants not found!</p>;
  }

  const uniqueCategories = [...new Set(allData.map((plant) => plant.category))];
  return (
    <section>
      <h1 className="text-xl font-semibold py-2 mb-1 px-2 text-center rounded-md bg-[#224229] text-white">
        Categories
      </h1>
      <div className="flex flex-col ">
        {uniqueCategories.map((category) => (
          <div
            key={category}
            className="border border-base-300 rounded-l-md px-3 py-2  mb-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <h1 className=" text-lg">{category}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCard;
