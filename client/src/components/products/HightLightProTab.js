import React from "react";

const HightLightProTab = ({ changeHandler, filterTab }) => {
  return (
    <div className="flex justify-center flex-wrap gap-1 mb-10">
      <p
        className={
          filterTab === "bestsellers"
            ? "cursor-pointer border rounded bg-gray-900 text-gray-50 px-5 py-1"
            : "cursor-pointer border rounded hover:bg-gray-900 bg-purple-600 text-gray-50 px-5 py-1"
        }
        onClick={() => changeHandler("bestsellers")}
      >
        Best Sellers
      </p>
      <p
        className={
          filterTab === "bestrated"
            ? "cursor-pointer border rounded bg-gray-900 text-gray-50 px-5 py-1"
            : "cursor-pointer border rounded hover:bg-gray-900 bg-purple-600 text-gray-50 px-5 py-1"
        }
        onClick={() => changeHandler("bestrated")}
      >
        Best Rated
      </p>
      <p
        className={
          filterTab === "newarrivals"
            ? "cursor-pointer border rounded bg-gray-900 text-gray-50 px-5 py-1"
            : "cursor-pointer border rounded hover:bg-gray-900 bg-purple-600 text-gray-50 px-5 py-1"
        }
        onClick={() => changeHandler("newarrivals")}
      >
        New Arrivals
      </p>
    </div>
  );
};

export default HightLightProTab;
