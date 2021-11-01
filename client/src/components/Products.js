import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/productAction";
import { addCart } from "../store/actions/inCartAction";
import ProductModal from "./ProductModal";
import Loading from "./Loading";
import Visibility from "../assets/images/icons/visibility.png";
import Favorite from "../assets/images/icons/favorite.png";
import Cart from "../assets/images/icons/cart.png";

const Products = () => {
  const [state, setState] = useState({ modal: false, id: "" });
  const dispatch = useDispatch();
  const userReducer = useSelector((el) => el.userReducer);
  const productReducer = useSelector((el) => el.productReducer);
  const cartReducer = useSelector((el) => el.inCartReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const modalHandler = (id) => {
    setState({ modal: !state.modal, id });
  };

  return (
    <div className="w-11/12 m-auto">
      <div className="flex gap-8 flex-wrap justify-center">
        {productReducer.isLoading ? (
          <Loading />
        ) : (
          productReducer.products.map((el) => (
            <div
              className="w-64 rounded shadow-lg product__card relative"
              key={el._id}
            >
              <Link to={"/details/" + el._id}>
                <img
                  className="w-full cursor-pointer"
                  src={el.image[0].url}
                  alt="Sunset in the mountains"
                />
              </Link>
              <div className="product__cfc bg-purple-600">
                <img
                  src={Visibility}
                  alt=""
                  onClick={() => modalHandler(el._id)}
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
                {userReducer.isAuthenticate ? (
                  <img
                    src={Cart}
                    alt=""
                    className={
                      cartReducer.cart.length
                        ? cartReducer.cart.map((item) => {
                            return item.authorId === userReducer.user._id &&
                              item.productId === el._id
                              ? "rounded-full mx-3 bg-purple-400 cursor-not-allowed p-1"
                              : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1";
                          })
                        : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                    }
                    onClick={() => {
                      dispatch(addCart(el._id));
                    }}
                  />
                ) : (
                  <Link to="/login">
                    <img
                      src={Cart}
                      alt=""
                      className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                    />
                  </Link>
                )}
              </div>
              <div className="px-6 py-4">
                <p className="mb-2 text-base">{el.name}</p>
                <div className="flex">
                  <p>${el.salePrice}</p>
                  <span className="mx-2">-</span>
                  <p className="line-through">${el.regularPrice}</p>
                </div>
                <ul className="flex">
                  <li>
                    <i className="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-yellow-500 mr-1"></i>
                  </li>
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
      <ProductModal
        state={state}
        modalHandler={modalHandler}
        productReducer={productReducer}
      />
    </div>
  );
};

export default Products;
