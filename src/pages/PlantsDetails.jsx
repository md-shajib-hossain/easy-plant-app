import { useParams } from "react-router";
import usePlantsData from "../hook/usePlantData";
import { toast } from "react-toastify";

import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/Loader";
import ErrorGlobal from "../Error/ErrorGlobal";

const PlantsDetails = () => {
  const { id } = useParams();
  const { allData } = usePlantsData();
  const selectedPlant = allData.find((plant) => plant.plantId == id);
  const { loading } = use(AuthContext);
  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("Booking Successful");
    e.target.reset();
  };

  if (loading) {
    return <Loader></Loader>;
  }
  if (!selectedPlant) {
    return (
      <div>
        <ErrorGlobal></ErrorGlobal>
      </div>
    );
  }
  return (
    <div className="card w-11/12 mx-auto my-5 flex gap-5 justify-between lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          className="md:w-[5oopx] md:h-[500px] "
          src={selectedPlant.image}
          alt="Album"
        />
      </figure>
      <div className="card-body ">
        <h2 className="text-4xl font-extrabold bg-linear-to-r from-[#0c4eb9] via-[#DC1FFF] to-[#00BFFF] bg-clip-text text-transparent">
          {selectedPlant.plantName}
        </h2>
        <p className="  max-w-[800px]">{selectedPlant.description}</p>
        <div className="card-actions flex flex-col ">
          <div className="flex md:flex-row flex-col items-center gap-4 py-3">
            <p className="btn btn-primary py-2 px-3 text-lg">
              Price:${selectedPlant.price}
            </p>
            <p className="btn btn-accent  py-2 px-3 text-lg">
              Rating:{selectedPlant.rating}
            </p>
            <p className="btn  btn-secondary rounded-sm badge-secondary py-2 px-5 text-lg">
              In Stock: {selectedPlant.availableStock}
            </p>
          </div>
          <form onSubmit={handleBookNow} className="fieldset w-[90%] md:w-1/2 ">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Book now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
