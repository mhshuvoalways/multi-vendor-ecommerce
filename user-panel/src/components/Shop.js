import React, { useState } from "react";
import { Link } from "@reach/router";
import Filter from "./Filter";
import Modal from "./Modal";
import Product from "../assets/images/products/products.jpg";
import Visibility from "../assets/images/icons/visibility.png";
import Favorite from "../assets/images/icons/favorite.png";
import Cart from "../assets/images/icons/cart.png";

const Shop = () => {
  const [state, setState] = useState({ modal: false, filter: false });

  const modalHandler = () => {
    setState({ modal: !state.modal });
  };

  const filterHandler = () => {
    setState({ filter: !state.filter });
  };

  return (
    <div className="mt-5">
      <p className="text-4xl mb-5 py-8 text-center bg-gray-50">ALL PRODUCTS</p>
      <div className="flex justify-between w-11/12 m-auto mb-5">
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
        <p>Showing 15 of 144 result</p>
      </div>
      {state.filter && <Filter />}
      <div className="flex gap-8 flex-wrap md:justify-between justify-around w-11/12 m-auto">
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
        <div className="w-60 rounded shadow-lg product__card relative">
          <Link to="/details">
            <img
              className="w-full cursor-pointer"
              src={Product}
              alt="Sunset in the mountains"
            />
          </Link>
          <div className="product__cfc bg-purple-600">
            <img
              src={Visibility}
              alt=""
              onClick={modalHandler}
              className={
                state.modal
                  ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                  : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
              }
            />
            <img
              src={Favorite}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
            <img
              src={Cart}
              alt=""
              className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
            />
          </div>
          <div className="px-6 py-4">
            <p className="mb-2 text-lg">The Coldest Sunset</p>
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
            <ul class="flex">
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
          </div>
        </div>
      </div>
      <Modal state={state} modalHandler={modalHandler} />
    </div>
  );
};

export default Shop;
