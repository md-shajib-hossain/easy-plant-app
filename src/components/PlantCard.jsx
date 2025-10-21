import React from "react";
import usePlantsData from "../hook/usePlantData";

const PlantCard = () => {
  const { allData, loading, error } = usePlantsData();
  console.log(allData);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Plants not found!</p>;
  }

  const uniqueCategories = [...new Set(allData.map((plant) => plant.category))];
  return (
    <div className="flex items-center justify-around">
      {uniqueCategories.map((category) => (
        <div
          key={category}
          className="w-30 h-30 shadow-xl flex justify-center items-center text-center rounded-full px-3 py-2 bg-[#224229] mb-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          <h1 className="text-white text-lg">{category}</h1>
        </div>
      ))}
    </div>
  );
};

export default PlantCard;
