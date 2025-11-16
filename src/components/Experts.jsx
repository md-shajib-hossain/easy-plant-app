import React from "react";

const Experts = () => {
  return (
    <div className="space-y-2 border-2 border-base-300 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-5 gap-5 mb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold py-2 mb-1 px-2 rounded-md text-[#224229]">
          Meet Our Experts
        </h1>
        <button className="btn bg-[#224229] text-white rounded-lg">
          Explore more
        </button>
      </div>

      <div className="card h-full bg-base-100 shadow-sm ">
        <figure>
          <img
            className="w-[200px] h-[200px]"
            src="https://miro.medium.com/v2/resize:fit:1024/1*hfw3A-EAfFQyDQyVul-Eew.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">Ashley Nussman-Berry</h2>
          <p>
            <span className="font-semibold text-green-800 text-md">
              Specialization:
            </span>{" "}
            Plant Identification & Health Assessment
          </p>
        </div>
      </div>
      {/*  2*/}
      <div className="card h-full bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-[200px] h-[200px]"
            src="https://media.licdn.com/dms/image/v2/C4E03AQHW3fNyr5Nyvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517717615288?e=2147483647&v=beta&t=p-eJnwV8wyYm3KVSH5m48C3eoxeNWBg1Iu3BaNE3ER8"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">Will Creed</h2>
          <p>
            <span className="font-semibold text-green-800 text-md">
              Specialization:
            </span>{" "}
            Indoor Plant Troubleshooting & Long-Term Maintenance
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="card h-full bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-[200px] h-[200px]"
            src="https://maryjaneduford.com/wp-content/uploads/2023/11/mj-duford.jpeg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">Mary Jane Duford</h2>
          <p>
            <span className="font-semibold text-green-800 text-md">
              Specialization:
            </span>{" "}
            Sustainable Gardening & Soil Management
          </p>
        </div>
      </div>
      <div className="card h-full bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-[200px] h-[200px]"
            src="https://media.licdn.com/dms/image/v2/C4E03AQG5gNO_QkkZBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516957775802?e=2147483647&v=beta&t=uVtQfBj7qGbzFQ1hE2P9gql6k4nODuPZ0BVrGgj6kXc"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">Christopher Satch</h2>
          <p>
            <span className="font-semibold text-green-800 text-md">
              Specialization:
            </span>{" "}
            Urban Plant Styling & Pest Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
