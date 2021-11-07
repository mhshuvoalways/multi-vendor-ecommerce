import React from "react";

const TabRoute = ({ routeHandler, reviewReducer }) => {
  return (
    <div>
      <ul className="flex gap-3 md:gap-10 md:text-2xl text-base justify-center flex-wrap">
        <li
          onClick={() => routeHandler("addition")}
          className="cursor-pointer font-semibold"
        >
          Additional Info
        </li>
        <li
          onClick={() => routeHandler("review")}
          className="cursor-pointer font-semibold"
        >
          Reviews({reviewReducer.reviews.length})
        </li>
        <li
          onClick={() => routeHandler("more")}
          className="cursor-pointer font-semibold"
        >
          More Products
        </li>
      </ul>
      <p className="border mt-4 border-gray-200 mb-10"></p>
    </div>
  );
};

export default TabRoute;
