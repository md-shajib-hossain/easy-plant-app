import React from "react";
import Experts from "./Experts";

const AsideBar = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold py-2 mb-1 px-2 text-center rounded-md bg-[#224229] text-white">
        Planting Tips
      </h1>
      <section>
        <div tabIndex={0} className="collapse   border-base-300 border">
          <div className="collapse-title text-md font-semibold">
            Know about Watering:
          </div>
          <div className="collapse-content text-white  bg-[#224229] text-sm">
            "Water 1-2 times per week, ensuring soil is moist but not
            waterlogged. Allow the top inch of soil to dry out between
            waterings."
          </div>
        </div>
      </section>
      <section>
        <div
          tabIndex={0}
          className="collapse bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Know about Sunlight:
          </div>
          <div className="collapse-content  text-white  bg-[#224229] text-sm">
            Requires 6-8 hours of direct sunlight daily. Place near a
            south-facing window or in a sunny garden spot
          </div>
        </div>
      </section>
      <section>
        <div
          tabIndex={0}
          className="collapse bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Know about Fertilizing:
          </div>
          <div className="collapse-content  text-white  bg-[#224229] text-sm">
            Fertilize every 2-4 weeks during the growing season (spring and
            summer) with a balanced liquid fertilizer (e.g., 10-10-10).
          </div>
        </div>
      </section>
      <Experts></Experts>
    </div>
  );
};

export default AsideBar;
