import React, { useState, useEffect } from "react";
import { Link, useParams } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const Details = () => {
  const [products, setProducts] = useState();
  const params = useParams();

  const dispatch = useDispatch();
  const productReducer = useSelector((el) => el.productReducer);

  useEffect(() => {
    setProducts(productReducer.products.find((el) => el._id === params.id));
  }, [dispatch, productReducer.products, params.id]);

  return (
    <div>
      {!products ? (
        <Loading />
      ) : (
        <div className="w-11/12 my-20 flex md:flex gap-20 justify-center m-auto">
          <div className="w-72">
            <img src={products.image[0].url} alt="" />
          </div>
          <div className="my-10 md:my-0">
            <p className="mb-2 text-3xl">{products.name}</p>
            <div className="flex">
              <p className="text-2xl">${products.salePrice}</p>
              <span className="mx-2 text-2xl">-</span>
              <p className="line-through text-2xl">${products.regularPrice}</p>
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
            <p className="mt-5">{products.description}</p>
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
              <p>Categories : {products.category}</p>
              <p className="flex gap-1">
                <p>Tags:</p>
                {products.tags.map((el) => (
                  <p>{el.name}</p>
                ))}
              </p>
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
                {products.author.storeName}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
