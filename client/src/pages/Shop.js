import React, { useState } from "react";
import Navigation from "../components/Navigations/Navigation";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Shop = () => {
  const [state, setState] = useState({ filter: false });

  const filterHandler = () => {
    setState({ filter: !state.filter });
  };

  return (
    <div>
      <Navigation />
      <div className="mt-5">
        <p className="text-4xl mb-5 py-8 text-center bg-gray-50">
          ALL PRODUCTS
        </p>
        <div className="flex justify-between w-11/12 m-auto mb-10">
          <p
            className={
              state.filter
                ? "cursor-pointer font-bold text-xl text-purple-500"
                : "cursor-pointer font-bold text-xl hover:text-purple-500"
            }
            onClick={filterHandler}
          >
            {state.filter ? "- Filter" : "+ Filter"}
          </p>
          <p>Showing 15 of 144 result</p>
        </div>
        {state.filter && <Filter />}
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
