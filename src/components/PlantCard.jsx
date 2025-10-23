import React, { useState } from "react";
import usePlantsData from "../hook/usePlantData";
import { Link } from "react-router";

const PlantCard = () => {
  const { allData, loading, error } = usePlantsData();

  const [selectedPlant, setSelectedPlant] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: Plants not found!</p>;
  }
  const uniqueCategories = [...new Set(allData.map((plant) => plant.category))];
  const filteredPlants = selectedPlant
    ? allData.filter((plant) => plant.category === selectedPlant)
    : allData;
  return (
    <section className="container h-full mx-auto grid grid-cols-9 gap-2">
      <div className="mb-8 col-span-2">
        <h1 className="text-xl font-semibold py-2 mb-4 text-center rounded-l-md bg-[#224229] text-white">
          Top Categories
        </h1>
        <div className="flex flex-col">
          {uniqueCategories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedPlant(category)}
              className={`border border-base-300 rounded-l-md px-3 py-2 mb-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                selectedPlant === category ? "bg-[#224229] text-white" : ""
              }`}
            >
              <h1 className="text-lg">{category}</h1>
            </div>
          ))}
          <div
            onClick={() => setSelectedPlant(null)}
            className={`border border-base-300 rounded-l-md px-3 py-2 mb-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
              selectedPlant === null ? "bg-[#224229] text-white" : ""
            }`}
          >
            <h1 className="text-lg">All Plants</h1>
          </div>
        </div>
      </div>
      <section className="col-span-7  ">
        <div className="gap-2 grid grid-cols-3 2">
          {filteredPlants.map((plant) => (
            <div
              key={plant.plantId}
              className="card h-[400px] w-full bg-base-100 shadow-sm transform transition-transform duration-300 hover:scale-103"
            >
              <figure>
                <img
                  className="w-[300px] h-[300px] px-5 "
                  src={plant.image}
                  alt={plant.plantName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-md">
                  {plant.plantName}
                  <div className="badge badge-primary">{plant.rating}</div>
                </h2>
                <p className="line-clamp-3 text-sm">{plant.description} </p>
                <div className="card-actions justify-between">
                  <div className="btn btn-outline btn-primary text-md font-semibold">
                    ${plant.price}
                  </div>
                  <Link to={`/plantsdetails/${plant.plantId}`}>
                    <div className="btn btn-soft btn-success text-md font-semibold">
                      View Details
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PlantCard;
