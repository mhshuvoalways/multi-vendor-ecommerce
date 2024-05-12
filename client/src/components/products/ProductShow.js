import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import ReactStars from "react-rating-stars-component";
import { addCart } from "../../store/actions/inCartAction";
import { addWishList } from "../../store/actions/wishListAction";
import Modal from "../Modal";
import Loading from "../utils/Loading";
import ProductShare from "../productDetails/ProductShare";

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
    <Modal
      modal={state.modal}
      modalHandler={modalHandler}
      modalTitle={products && products.name}
    >
      {products && products ? (
        <div className="w-11/12 my-20 md:flex gap-20 m-auto container">
          <div className="w-full md:w-2/5">
            <img
              src={products.image[0].url}
              alt=""
              className="w-full border p-5"
            />
          </div>
          <div className="my-10 md:my-0 md:w-2/4 w-full">
            <p className="mb-2 text-3xl">{products.name}</p>
            <div className="flex">
              <p className="text-2xl">${products.salePrice}</p>
              <span className="mx-2 text-2xl">-</span>
              <p className="line-through text-2xl">${products.regularPrice}</p>
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
            <p className="mt-5 text-base">{parse(products.description)}</p>
            <p className="border-solid bg-gray-100 border-2 my-10"></p>
            <div className="flex gap-4 items-center flex-wrap">
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
                  onClick={() => dispatch(addWishList(products._id))}
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
              <ProductShare products={products} productUrl={products._id} />
            </div>
            <p className="border-solid bg-gray-100 border-2 my-10"></p>
            <div className="border-solid border-2 border-gray-100">
              <Link to={"/shop/" + products.author._id}>
                <p className="p-2">Sold by</p>
                <p className="text-xl p-2">{products.author.storeName}</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Modal>
  );
};

export default ProductModal;
