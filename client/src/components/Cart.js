import React from "react";
import Product from "../assets/images/products/products.jpg";
import Clear from "../assets/images/icons/clear.png";

const Cart = () => {
  return (
    <div className="w-11/12 m-auto mt-10">
      <p className="text-xl mb-3">Your cart items</p>
      <div className="overflow-x-auto md:overflow-x-hidden">
        <table className="border-collapse w-full text-left">
          <tr>
            <th className="p-2 bg-gray-100">IMAGE</th>
            <th className="p-2 bg-gray-100">PRODUCT NAME</th>
            <th className="p-2 bg-gray-100">UNIT PRICE</th>
            <th className="p-2 bg-gray-100">QTY</th>
            <th className="p-2 bg-gray-100">SUBTOTAL</th>
            <th className="p-2 bg-gray-100">ACTION</th>
          </tr>
          <tr className="border-gray-100 border-2">
            <td className="p-2">
              <img src={Product} alt="" className="w-28" />
            </td>
            <td className="p-2">
              <p>The Coldest Sunset</p>
              <p>Color: blue</p>
              <p>Size: x</p>
            </td>
            <td className="p-2">
              <div className="flex">
                <p>$10</p>
                <span className="mx-2">-</span>
                <p className="line-through">$12</p>
              </div>
            </td>
            <td className="p-2">
              <div className="flex border-solid border-2 border-gray-200 cursor-pointer p-2 justify-around">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </td>
            <td className=" p-2">
              <p>$10</p>
            </td>
            <td className=" p-2">
              <img src={Clear} alt="" className="cursor-pointer w-5" />
            </td>
          </tr>
          <tr className="border-gray-100 border-2">
            <td className="p-2">
              <img src={Product} alt="" className="w-28" />
            </td>
            <td className="p-2">
              <p>The Coldest Sunset</p>
              <p>Color: blue</p>
              <p>Size: x</p>
            </td>
            <td className="p-2">
              <div className="flex">
                <p>$10</p>
                <span className="mx-2">-</span>
                <p className="line-through">$12</p>
              </div>
            </td>
            <td className="p-2">
              <div className="flex border-solid border-2 border-gray-200 cursor-pointer p-2 justify-around">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </td>
            <td className=" p-2">
              <p>$10</p>
            </td>
            <td className=" p-2">
              <img src={Clear} alt="" className="cursor-pointer w-5" />
            </td>
          </tr>
        </table>
      </div>
      <div className="flex justify-between my-10">
        <button className="bg-gray-100 text-gray-900 py-2 w-60 hover:bg-purple-600 hover:text-white rounded-full">
          CONTINUE SHOPPING
        </button>
        <button className="bg-gray-100 text-gray-900 py-2 w-60 hover:bg-purple-600 hover:text-white rounded-full">
          CLEAR SHOPPING CART
        </button>
      </div>
      <div className="bg-gray-100 md:w-96 sm:w-auto ml-auto rounded-lg p-8 mt-10">
        <p className="text-2xl">Cart Total</p>
        <p className="border border-gray-200 my-2"></p>
        <div className="flex justify-between py-5">
          <p className="text-xl">Total Products</p>
          <p className="text-xl">$66</p>
        </div>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="Apply coupon"
            className="p-2 placeholder-gray-400 text-gray-600 bg-white text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-2/4"
          />
          <button className="bg-purple-600 text-white py-2 hover:bg-gray-600 w-2/4">
            APPLY COUPON
          </button>
        </div>
        <div className="flex justify-between text-2xl text-purple-600 font-medium my-5">
          <p>Grand Total</p>
          <p>$66</p>
        </div>
        <button className="bg-purple-600 text-white py-2 w-full hover:bg-gray-600">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
