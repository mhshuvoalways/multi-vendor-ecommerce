import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/productAction";
import { addCart, modalHandler } from "../store/actions/inCartAction";
import { addWishList, getWishItem } from "../store/actions/wishListAction";
import ReactStars from "react-rating-stars-component";
import ProductModal from "./ProductModal";
import Loading from "./utils/Loading";
import Visibility from "../assets/images/icons/visibility.png";
import Favorite from "../assets/images/icons/favorite.png";
import Cart from "../assets/images/icons/cart.png";

const Products = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((el) => el.userReducer);
  const productReducer = useSelector((el) => el.productReducer);
  const cartReducer = useSelector((el) => el.inCartReducer);
  const wishListReducer = useSelector((el) => el.wishListReducer);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getWishItem());
  }, [dispatch]);

  const reverseCart = [...productReducer.products];

  return (
    <div className="w-11/12 m-auto">
      <div className="flex gap-8 flex-wrap justify-center">
        {productReducer.isLoading ? (
          <Loading />
        ) : (
          reverseCart.reverse().map((el) => (
            <div
              className="w-64 rounded shadow-lg product__card relative"
              key={el._id}
            >
              <Link to={"/details/" + el._id}>
                <img
                  className="w-full cursor-pointer"
                  src={el.image[0].url}
                  alt="Sunset in the mountains"
                  thumbnail
                />
              </Link>
              <div className="product__cfc bg-purple-600">
                <img
                  src={Visibility}
                  alt=""
                  onClick={() => dispatch(modalHandler(el._id))}
                  className={
                    cartReducer.modal
                      ? "rounded-full mx-3 bg-purple-400 cursor-pointer p-1"
                      : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                  }
                />
                {userReducer.isAuthenticate ? (
                  <img
                    src={Favorite}
                    alt=""
                    className={
                      wishListReducer.wishlist.length
                        ? wishListReducer.wishlist.map((item) => {
                            return item.authorId === userReducer.user._id &&
                              item.productId === el._id
                              ? "rounded-full mx-3 bg-purple-400 cursor-not-allowed p-1"
                              : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1";
                          })
                        : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                    }
                    onClick={() => {
                      dispatch(addWishList(el._id));
                    }}
                  />
                ) : (
                  <Link to="/login">
                    <img
                      src={Favorite}
                      alt=""
                      className="rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                    />
                  </Link>
                )}
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
                <ReactStars
                  {...{
                    size: 20,
                    value: el.rating,
                    count: 5,
                    activeColor: "red",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <ProductModal
        state={cartReducer}
        modalHandler={modalHandler}
        productReducer={productReducer}
      />
    </div>
  );
};

export default Products;
