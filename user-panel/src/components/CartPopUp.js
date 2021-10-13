import React from "react";
import { Link } from "@reach/router";
import Product from "../assets/images/products/products.jpg";
import Clear from "../assets/images/icons/clear.png";

const CartPopUp = () => {
  return (
    <div>
      <div className="flex justify-between gap-1 text-sm text-gray-700 p-8 hover:bg-gray-100">
        <div className="w-20">
          <img src={Product} alt="" className="cursor-pointer" />
        </div>
        <div>
          <p>The Coldest Sunset</p>
          <p>Qty: 2</p>
          <p>$20</p>
          <div className="mt-2">
            <p>Color: blue</p>
            <p>Size: x</p>
          </div>
        </div>
        <div>
          <img src={Clear} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between gap-1 text-sm text-gray-700 p-8 hover:bg-gray-100">
        <div className="w-20">
          <img src={Product} alt="" className="cursor-pointer" />
        </div>
        <div>
          <p>The Coldest Sunset</p>
          <p>Qty: 2</p>
          <p>$20</p>
          <div className="mt-2">
            <p>Color: blue</p>
            <p>Size: x</p>
          </div>
        </div>
        <div>
          <img src={Clear} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between w-64 m-auto my-5 font-medium">
        <p>Total:</p>
        <p>$66</p>
      </div>
      <div>
        <Link to="/cart">
          <button className="bg-purple-600 text-white py-2 block my-2 w-64 m-auto hover:bg-gray-600">
            VIEW CART
          </button>
        </Link>
        <button className="bg-purple-600 text-white py-2 block my-2 w-64 m-auto hover:bg-gray-600">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPopUp;
