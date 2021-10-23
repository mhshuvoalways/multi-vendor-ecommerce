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
        <nav class="bg-gray-100 py-6 rounded mb-10">
          <ol class="flex justify-center">
            <li>HOME</li>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li>SHOP</li>
          </ol>
        </nav>
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
          <p>Showing 8 of 25 result</p>
        </div>
        {state.filter && <Filter />}
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
