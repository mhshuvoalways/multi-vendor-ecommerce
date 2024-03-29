import React from "react";
import { Link } from "react-router-dom";
import Discount from "../Coupon/Discount";
import GrandTotal from "../Coupon/GrandTotal";

const cartTotal = ({
  calculate,
  applyCoupon,
  getCodeHandler,
  orderReducer,
}) => {
  return (
    <div className="bg-gray-100 md:w-96 sm:w-auto ml-auto rounded-lg p-8 mt-10">
      <p className="text-2xl">Cart Total</p>
      <p className="border border-gray-200 my-5"></p>
      <div className="flex justify-between pb-5">
        <p className="text-xl">Total Products</p>
        <p className="text-xl">${calculate.proTotal}</p>
      </div>
      {orderReducer.applyCoupon && (
        <div className="flex justify-between mb-5">
          <p>Coupon Discount</p>
          <Discount calculate={calculate.grandTotal} />
        </div>
      )}
      <div className="flex justify-between gap-2">
        <input
          type="text"
          placeholder="Code : e-Shop"
          className="p-2 placeholder-gray-400 text-gray-600 bg-white text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-2/4"
          onChange={getCodeHandler}
        />
        <button
          className="bg-purple-600 text-white py-2 hover:bg-gray-600 w-2/4"
          onClick={applyCoupon}
        >
          APPLY COUPON
        </button>
      </div>
      <div className="flex justify-between text-2xl text-purple-600 font-medium my-5">
        <p>Grand Total</p>
        <GrandTotal calculate={calculate.grandTotal} />
      </div>
      <Link to="/checkout">
        <button className="bg-purple-600 text-white py-2 w-full hover:bg-gray-600">
          PROCEED TO CHECKOUT
        </button>
      </Link>
    </div>
  );
};

export default cartTotal;
