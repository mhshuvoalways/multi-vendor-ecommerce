import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { addCart } from "../store/actions/inCartAction";
import { addWishList } from "../store/actions/wishListAction";
import Loading from "./utils/Loading";

const ProductModal = ({ state, modalHandler, productReducer }) => {
  const [products, setProducts] = useState();
  const [count, setCount] = useState();
  const [cart, setCart] = useState();

  const dispatch = useDispatch();
  const cartReducer = useSelector((store) => store.inCartReducer);
  const userReducer = useSelector((store) => store.userReducer);
  const wishListReducer = useSelector((el) => el.wishListReducer);

  useEffect(() => {
    setProducts(
      productReducer.products &&
        productReducer.products.find((el) => el._id === state.id)
    );
    const findCart = cartReducer.cart.find(
      (el) => el.productId === (products && products._id)
    );
    setCount((findCart && findCart.quantity) || 1);
    setCart(findCart);
  }, [cartReducer.cart, productReducer.products, products, state.id]);

  const idCheck = wishListReducer.wishlist.find(
    (el) => el.productId === (products && products._id)
  );

  return (
    <div>
      {state.modal && (
        <div>
          <div
            className={
              state.modal
                ? "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                : "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            }
          >
            <div className="relative my-6 w-4/5 m-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span
                      className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                      onClick={() => dispatch(modalHandler())}
                    >
                      <i className="fas fa-times"></i>
                    </span>
                  </button>
                </div>
                <div className="p-6 text-gray-500 text-lg leading-relaxed">
                  {/* Content start */}
                  {products ? (
                    <div className="w-11/12 my-20 md:flex gap-20 m-auto">
                      <div className="flex-1">
                        <img src={products.image[0].url} alt="" />
                      </div>
                      <div className="my-10 md:my-0 flex-1">
                        <p className="mb-2 text-3xl">{products.name}</p>
                        <div className="flex">
                          <p className="text-2xl">${products.salePrice}</p>
                          <span className="mx-2 text-2xl">-</span>
                          <p className="line-through text-2xl">
                            ${products.regularPrice}
                          </p>
                        </div>
                        <div className="mt-2">
                          <ReactStars
                            {...{
                              size: 20,
                              value: products.rating,
                              count: 5,
                              activeColor: "red",
                              a11y: true,
                              isHalf: true,
                              edit: false,
                            }}
                          />
                        </div>
                        <p className="mt-5">{products.description}</p>
                        <p className="border-solid bg-gray-100 border-2 my-10"></p>
                        <div className="flex gap-4 items-center">
                          <div className="flex gap-5 border-solid border border-gray-300 cursor-pointer p-2">
                            <p
                              onClick={() => {
                                if (count > 1) {
                                  setCount(count - 1);
                                }
                              }}
                            >
                              -
                            </p>
                            <p>{count}</p>
                            <p onClick={() => setCount(count + 1)}>+</p>
                          </div>
                          {userReducer.isAuthenticate ? (
                            <button
                              className={
                                cart && cart.productId === products._id
                                  ? "bg-gray-800 hover:bg-purple-600 text-white w-40 cursor-not-allowed p-3 border border-gray-100 text-sm"
                                  : "bg-gray-800 hover:bg-purple-600 text-white w-40 cursor-pointer p-3 border border-gray-100 text-sm"
                              }
                              onClick={() => {
                                dispatch(
                                  addCart(products._id, {
                                    quantity: count,
                                  })
                                );
                              }}
                            >
                              ADD TO CART
                            </button>
                          ) : (
                            <Link to="/login">
                              <button className="bg-gray-800 hover:bg-purple-600 text-white w-40 cursor-pointer p-3 border border-gray-100 text-sm">
                                ADD TO CART
                              </button>
                            </Link>
                          )}
                          {userReducer.isAuthenticate ? (
                            <i
                              className={
                                idCheck &&
                                idCheck.authorId === userReducer.user._id &&
                                idCheck.productId === products._id
                                  ? "fas fa-heart text-2xl cursor-not-allowed text-red-800"
                                  : "far fa-heart text-2xl cursor-pointer"
                              }
                              onClick={() =>
                                dispatch(addWishList(products._id))
                              }
                            ></i>
                          ) : (
                            <Link to="/login">
                              <i className="far fa-heart text-2xl cursor-pointer"></i>
                            </Link>
                          )}
                        </div>
                        <div className="mt-5">
                          <p>Categories : {products.category}</p>
                          <p className="flex gap-1">
                            <p>Tags:</p>
                            {products.tags.map((el) => (
                              <p key={el._id}>{el.name}</p>
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
                  ) : (
                    <Loading />
                  )}
                  {/* Content end */}
                </div>
              </div>
            </div>
          </div>
          <div className="left-0 top-0 bottom-0 right-0 fixed bg-black opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
