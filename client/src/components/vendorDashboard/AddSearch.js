import React from "react";
import { useDispatch } from "react-redux";

const AddBtnSearch = ({ setInputValue, modalToggle }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between mb-2">
      <div>
        <input
          type="text"
          placeholder="Search Product..."
          className="w-4/5 max-w-lg p-2 placeholder-gray-400 text-gray-600 bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        className="bg-purple-600 text-white p-2 rounded hover:bg-gray-900"
        onClick={() => dispatch(modalToggle())}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddBtnSearch;
