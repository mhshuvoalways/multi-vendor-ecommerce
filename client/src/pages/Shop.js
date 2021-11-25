import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import Filter from "../components/filter/Index";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Shop = () => {
  const [state, setState] = useState({ filter: false });
  const productReducer = useSelector((el) => el.productReducer);

  const filterHandler = () => {
    setState({ filter: !state.filter });
  };

  return (
    <div>
      <Navigation />
      <div>
        <PageLocation value={["HOME", "-/-", "SHOP"]} />
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
          <p>{productReducer.products.length} results</p>
        </div>
        {state.filter && <Filter />}
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
