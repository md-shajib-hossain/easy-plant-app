import React, { use } from "react";
import PlantCard from "../components/PlantCard";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/Loader";

const AllPlants = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-xl font-semibold pt-10 pb-2 mb-10 px-2 text-center">
        All Plants
      </h1>
      <main className="gap-2">
        <PlantCard></PlantCard>
      </main>
    </div>
  );
};

export default AllPlants;
