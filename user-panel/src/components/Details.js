import React from "react";
import { Link } from "@reach/router";
import Slider from "../assets/images/products/products.jpg";

const Details = () => {
  return (
    <div className="w-4/5 m-auto my-20 md:flex gap-20">
      <div className="w-full" >
        <img src={Slider} alt=""/>
      </div>
      <div className="my-10 md:my-0">
        <p className="mb-2 text-3xl">The Coldest Sunset</p>
        <div className="flex">
          <p className="text-2xl">$10</p>
          <span className="mx-2 text-2xl">-</span>
          <p className="line-through text-2xl">$12</p>
        </div>
        <ul class="flex mt-3">
          <li>
            <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
          </li>
          <li>
            <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
          </li>
          <li>
            <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
          </li>
          <li>
            <i class="far fa-star fa-sm text-yellow-500 mr-1"></i>
          </li>
          <li>
            <i class="far fa-star fa-sm text-yellow-500 mr-1"></i>
          </li>
        </ul>
        <p className="mt-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </p>
        <p className="border-solid bg-gray-100 border-2 my-10"></p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-5 border-solid border-2 border-gray-100 cursor-pointer p-2">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <button className="bg-purple-600 text-white w-40 cursor-pointer py-2">
            ADD TO CART
          </button>
          <i className="far fa-heart cursor-pointer text-2xl"></i>
        </div>
        <div className="mt-5">
          <p>Categories : accessories</p>
          <p>Tags : accessories</p>
          <div className="mt-10 flex gap-8">
            <i className="fab fa-facebook cursor-pointer text-2xl"></i>
            <i className="fab fa-instagram cursor-pointer text-2xl"></i>
            <i className="fab fa-linkedin-in cursor-pointer text-2xl"></i>
            <i className="fab fa-twitter cursor-pointer text-2xl"></i>
          </div>
        </div>
        <p className="border-solid bg-gray-100 border-2 my-10"></p>
        <div className="border-solid border-2 border-gray-100">
          <p className="p-2">Sold by</p>
          <Link to="/shop" className="text-xl p-2">
            MHS Fashion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
