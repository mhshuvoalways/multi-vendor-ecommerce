import React from "react";

const ProductTop = ({ filterHandler, state, productReducer }) => {
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
    </div>
  );
};

export default ProductTop;
