import React, { useState } from "react";
import usePlantsData from "../hook/usePlantData";
import { Link } from "react-router";
import PLantOfWeek from "./PLantOfWeek";
import Loader from "../components/Loader";
import { RiPlantFill } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import { AuthContext } from "../Context/AuthContext";

const PlantCard = () => {
  const { allData, error, loading } = usePlantsData();
  // const { loading } = use(AuthContext);

  const [selectedPlant, setSelectedPlant] = useState(null);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: Plants not found!</p>;
  }
  const uniqueCategories = [...new Set(allData.map((plant) => plant.category))];
  const filteredPlants = selectedPlant
    ? allData.filter((plant) => plant.category === selectedPlant)
    : allData;
  return (
    <>
      <div className="mb-10 border-2 border-gray-200 rounded-lg shadow-emerald-700  w-full mx-auto">
        <h1 className="text-xl font-semibold py-2 mb-4 text-center rounded-md md:rounded-l-md bg-[#224229] text-white">
          Top Categories
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around ">
          {uniqueCategories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedPlant(category)}
              className={` border-5 border-base-300 h-[180px] w-[180px] rounded-full px-3 py-2 mb-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                selectedPlant === category ? "bg-[#224229] text-white" : ""
              }`}
            >
              <div className="flex mt-10 flex-col justify-center items-center relative ">
                <p>
                  <TbPlant2 size={50} />
                </p>
                <h1 className="text-lg ">{category}</h1>
              </div>
            </div>
          ))}
          <div
            onClick={() => setSelectedPlant(null)}
            className={`border border-base-300 rounded-full h-[200px] w-[200px]  px-3 py-2 mb-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
              selectedPlant === null ? "bg-[#224229] text-white" : ""
            }`}
          >
            <div className="flex mt-10  flex-col justify-center items-center relative ">
              <p>
                <RiPlantFill size={64} />
              </p>
              <h1 className="text-lg">All Plants</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="h-full mx-auto  md:gap-2">
        <section className="border-2 border-base-300 rounded-lg shadow-md">
          <div className="gap-5 p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filteredPlants.map((plant) => (
              <div
                key={plant.plantId}
                className="card border-base-200 h-[400px] w-full bg-base-100 shadow-lg transform transition-transform duration-300 hover:scale-103"
              >
                <figure>
                  <img
                    className="w-full object-cover  h-[300px] px-5 "
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
    </>
  );
};

export default PlantCard;
