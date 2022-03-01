import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./filter/Index";

const ProductTop = () => {
  const [state, setState] = useState({ filter: false });
  const productReducer = useSelector((el) => el.productReducer);

  const filterHandler = () => {
    setState({ filter: !state.filter });
  };

  return (
    <div>
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
    </div>
  );
};

export default ProductTop;
