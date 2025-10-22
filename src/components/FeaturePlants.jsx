import React from "react";
import usePlantsData from "../hook/usePlantData";

const FeaturePlants = () => {
  const { allData, loading, error } = usePlantsData();
  //   console.log(allData);
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error 420</p>;
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* image, name, price, rating, and “View Details” */}
      {allData.map((plant) => (
        <div
          key={plant.plantId}
          className="card h-[400px] bg-base-100 shadow-sm transform transition-transform duration-300 hover:scale-103"
        >
          <figure>
            <img
              className="w-[300px] h-[300px]"
              src={plant.image}
              alt="plants"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-md">
              {plant.plantName}
              <div className="badge badge-primary">{plant.rating}</div>
            </h2>
            <p className="">{plant.description}</p>
            <div className="card-actions justify-between">
              <div className="btn btn-outline btn-primary text-md font-semibold">
                ${plant.price}
              </div>
              <div className="btn btn-soft btn-success text-md font-semibold">
                View Details
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturePlants;
