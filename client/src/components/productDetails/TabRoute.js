import React from "react";

const TabRoute = ({ routeHandler, reviewReducer, state }) => {
  return (
    <div>
      <ul className="flex gap-3 md:gap-10 md:text-2xl text-base justify-center flex-wrap">
        <li
          onClick={() => routeHandler("addition")}
          className={
            state === "addition"
              ? "cursor-pointer font-semibold border-b-4 border-purple-600"
              : "cursor-pointer font-semibold"
          }
        >
          Additional Info
        </li>
        <li
          onClick={() => routeHandler("review")}
          className={
            state === "review"
              ? "cursor-pointer font-semibold border-b-4 border-purple-600"
              : "cursor-pointer font-semibold"
          }
        >
          Reviews({reviewReducer.reviews.length})
        </li>
        <li
          onClick={() => routeHandler("more")}
          className={
            state === "more"
              ? "cursor-pointer font-semibold border-b-4 border-purple-600"
              : "cursor-pointer font-semibold"
          }
        >
          More Products
        </li>
      </ul>
      <p className="border mt-4 border-gray-200 mb-10"></p>
    </div>
  );
};

export default TabRoute;
