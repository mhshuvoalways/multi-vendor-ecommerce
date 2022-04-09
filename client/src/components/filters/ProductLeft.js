import React from "react";

const ProductTop = ({ productReducer, lowHigh }) => {
  return (
    <div className="flex justify-between mb-10">
      <div>
        <label>
          <select
            className="px-2 w-full py-2 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            onChange={(e) => lowHigh(e.target.value)}
          >
            <option>Default</option>
            <option value="hightolow">Price - High to Low</option>
            <option value="lowtohigh">Price - Low to High</option>
          </select>
        </label>
      </div>
      <p>{productReducer.products.length} results</p>
    </div>
  );
};

export default ProductTop;
