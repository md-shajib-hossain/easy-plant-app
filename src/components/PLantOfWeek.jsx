import React from "react";

const PLantOfWeek = () => {
  return (
    <div className="space-y-2 rounded-lg  grid grid-cols-1 md:grid-cols-3 gap-10 border border-gray-200 shadow-sm">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-lg  font-semibold py-2 px-2 rounded-md text-center text-[#224229]">
          Plant of the Week
        </h1>
        <button className="btn rounded-lg text-white bg-[#224229]">
          {" "}
          Explore All Plants
        </button>
      </div>
      <div className="card h-full p-2 shadow-sm ">
        <figure>
          <img
            src="https://www.gardenersdream.co.uk/cdn/shop/articles/Snake_Plant_1_f6204179-d92b-40e3-bec7-0d3a61e93b81.jpg?v=1744013002"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">Snake Plant</h2>
          <div>
            <span className="font-semibold text-green-800 text-md">
              Care Level: Easy
            </span>{" "}
            <p className="line-clamp-5">
              The ZZ Plant (Zamioculcas zamiifolia) is the ultimate
              low-maintenance houseplant with glossy, dark green leaves on
              upright stems that store water, making it extremely
              drought-tolerant. Perfect for forgetful plant owners, it only
              needs watering every 3-4 weeks and thrives in low to bright
              indirect light.
            </p>
          </div>
        </div>
      </div>
      {/*  2*/}
      <div className="card p-2 shadow-sm">
        <figure>
          <img
            src="https://www.southernliving.com/thmb/Spd7_4JdKb3e0ObSF0nDlYlTYU8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-823655632-85c0768e6cb74bfcad51021a7ed92d5b.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">Spider Plant</h2>
          <div>
            <span className="font-semibold text-green-800 text-md">
              Care Level: Moderate
            </span>{" "}
            <p className="line-clamp-5">
              Spider Plants are classic hanging basket favorites with arching,
              grass-like leaves and plantlets (spiders) that dangle from
              runners, creating a cascading display. NASA-ranked #1 for air
              purification, they remove formaldehyde, xylene, and toluene from
              indoor environments. Thriving in bright indirect light to low
              light, they're incredibly adaptable and produce oxygen-rich air.
              Water when soil surface is dry, about once a week. The variegated
              green and white leaves brighten any space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PLantOfWeek;
