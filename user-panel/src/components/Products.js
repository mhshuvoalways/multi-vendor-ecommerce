import React, { useState } from "react";
import { Link } from "@reach/router";
import Modal from "./Modal";
import Product from "../assets/images/products/products.jpg";
import Visibility from "../assets/images/icons/visibility.png";
import Favorite from "../assets/images/icons/favorite.png";
import Cart from "../assets/images/icons/cart.png";

const Products = () => {
  const [state, setState] = useState({ modal: false });

  const modalHandler = () => {
    setState({ modal: !state.modal });
  };

  return (
    <div className="w-11/12 m-auto">
      <div className="flex gap-8 flex-wrap justify-center">
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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
        <div className="w-64 rounded shadow-lg product__card relative">
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

export default Products;
