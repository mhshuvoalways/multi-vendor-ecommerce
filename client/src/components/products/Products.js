import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../../assets/images/icons/cart.png";
import Favorite from "../../assets/images/icons/favorite.png";
import Visibility from "../../assets/images/icons/visibility.png";
import enableBtn from "../../store/actions/enableBtnAction";
import { addCart, modalHandler } from "../../store/actions/inCartAction";
import { getProducts } from "../../store/actions/productAction";
import { addWishList } from "../../store/actions/wishListAction";
import Loading from "../utils/Loading";
import ProductShow from "./ProductShow";

const Products = ({ productReducer, allProducts, proFilter, morePro }) => {
  const dispatch = useDispatch();
  const userReducer = useSelector((el) => el.userReducer);
  const cartReducer = useSelector((el) => el.inCartReducer);
  const wishListReducer = useSelector((el) => el.wishListReducer);
  const btnReducer = useSelector((store) => store.btnReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const reverseProducts = [...allProducts];

  const products =
    proFilter || morePro
      ? reverseProducts.reverse().slice(0, 8)
      : reverseProducts.reverse();

  return (
    <div>
      <div className="flex gap-8 flex-wrap justify-center sm:justify-between">
        {productReducer.isLoading ? (
          <Loading />
        ) : products.length ? (
          products.map((el) => (
            <LazyLoad
              offset={-200}
              className="w-64 h-96 rounded shadow-md product__card relative border lazyload-placeholder"
              key={el._id}
              data-aos={proFilter && "zoom-in"}
            >
              <Link to={"/details/" + el._id}>
                <img
                  className="w-full cursor-pointer h-64"
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
                            return btnReducer
                              ? item.authorId === userReducer.user._id &&
                                item.productId === el._id
                                ? "rounded-full mx-3 bg-purple-400 cursor-not-allowed p-1"
                                : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                              : "rounded-full mx-3 bg-purple-400 cursor-not-allowed p-1";
                          })
                        : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                    }
                    onClick={() => {
                      dispatch(addWishList(el._id));
                      dispatch(enableBtn(false));
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
                            return btnReducer
                              ? item.authorId === userReducer.user._id &&
                                item.productId === el._id
                                ? "rounded-full mx-3 bg-purple-400 cursor-not-allowed p-1"
                                : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                              : "rounded-full mx-3 bg-purple-400 cursor-not-allowed p-1";
                          })
                        : "rounded-full mx-3 bg-white hover:bg-purple-400 cursor-pointer p-1"
                    }
                    onClick={() => {
                      dispatch(addCart(el._id));
                      dispatch(enableBtn(false));
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
            </LazyLoad>
          ))
        ) : (
          <p className="text-2xl m-auto">There are no products</p>
        )}
      </div>
      <ProductShow
        state={cartReducer}
        modalHandler={modalHandler}
        productReducer={productReducer}
      />
    </div>
  );
};

export default Products;
