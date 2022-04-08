import React from "react";

const Nav = ({ handler, state }) => {
  return (
    <div className="flex bg-gray-100 justify-center gap-10 rounded-md mt-5 py-4">
      <p
        className={
          state === "profile"
            ? "cursor-pointer bg-purple-600 px-4 py-1 rounded-md text-white"
            : "cursor-pointer px-4 py-1 rounded-md hover:bg-purple-600 hover:text-white"
        }
        onClick={() => handler("profile")}
      >
        Profile
      </p>
      <p
        className={
          state === "allProducts"
            ? "cursor-pointer bg-purple-600 px-4 py-1 rounded-md text-white"
            : "cursor-pointer px-4 py-1 rounded-md hover:bg-purple-600 hover:text-white"
        }
        onClick={() => handler("allProducts")}
      >
        Products
      </p>
    </div>
  );
};

export default Nav;
