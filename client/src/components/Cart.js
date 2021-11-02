import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  deleteCartItem,
  deleteAllCartItem,
} from "../store/actions/inCartAction";
import { Link } from "@reach/router";
import Clear from "../assets/images/icons/clear.png";
import Loading from "./Loading";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [calculate, setCalculate] = useState({
    proTotal: 0,
    grandTotal: 0,
  });

  const dispatch = useDispatch();
  const cartReducer = useSelector((item) => item.inCartReducer);

  const productTotal = useCallback(() => {
    let proTotal = 0;
    cart.forEach((el) => {
      proTotal = proTotal + el.subTotal;
    });
    setCalculate({
      proTotal: proTotal,
      grandTotal: proTotal,
    });
  }, [cart]);

  useEffect(() => {
    setCart(cartReducer.cart);
    productTotal();
  }, [cartReducer.cart, productTotal]);

  const reverseCart = [...cart]

  return (
    <div>
      {cartReducer.isLoading ? (
        <Loading />
      ) : (
        <div>
          {cart.length ? (
            <div className="w-11/12 m-auto mt-10">
              <p className="text-xl mb-3">Your cart items</p>
              <div className="overflow-x-auto md:overflow-x-hidden">
                <table className="border-collapse w-full text-left">
                  <tr>
                    <th className="p-2 bg-gray-100">IMAGE</th>
                    <th className="p-2 bg-gray-100">PRODUCT NAME</th>
                    <th className="p-2 bg-gray-100">UNIT PRICE</th>
                    <th className="p-2 bg-gray-100">QTY</th>
                    <th className="p-2 bg-gray-100">SUBTOTAL</th>
                    <th className="p-2 bg-gray-100">ACTION</th>
                  </tr>
                  {reverseCart.reverse().map((el) => (
                    <tr className="border-gray-100 border-2">
                      <td className="p-2">
                        <Link to={`/details/${el.productId}`}><img src={el.image} alt="" className="w-28" /></Link>
                      </td>
                      <td className="p-2">
                        <p className="text-base">{el.name}</p>
                        <p>Color: blue</p>
                        <p>Size: x</p>
                      </td>
                      <td className="p-2">
                        <div className="flex">
                          <p>${el.salePrice}</p>
                          <span className="mx-2">-</span>
                          <p className="line-through">${el.regularPrice}</p>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex border-solid border-2 border-gray-200 py-1 justify-around">
                          <span
                            className="hover:bg-gray-300 px-2 rounded-full cursor-pointer"
                            onClick={() => {
                              dispatch(decrement(el._id));
                              if (el.quantity === 1) {
                                dispatch(deleteCartItem(el._id));
                              }
                            }}
                          >
                            -
                          </span>
                          <span>{el.quantity}</span>
                          <span
                            className="hover:bg-gray-300 px-2 rounded-full cursor-pointer"
                            onClick={() => dispatch(increment(el._id))}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td className=" p-2">
                        <p>${el.subTotal}</p>
                      </td>
                      <td className=" p-2">
                        <img
                          src={Clear}
                          alt=""
                          className="cursor-pointer w-5"
                          onClick={() => {
                            dispatch(deleteCartItem(el._id));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="flex justify-between my-10 flex-wrap gap-5 margin-auto">
                <Link to="/shop">
                  <button className="bg-gray-100 text-gray-900 py-3 w-60 hover:bg-purple-600 hover:text-white rounded-full">
                    CONTINUE SHOPPING
                  </button>
                </Link>
                <button
                  className="bg-gray-100 text-gray-900 py-3 w-60 hover:bg-purple-600 hover:text-white rounded-full"
                  onClick={() => dispatch(deleteAllCartItem())}
                >
                  CLEAR SHOPPING CART
                </button>
              </div>
              <div className="bg-gray-100 md:w-96 sm:w-auto ml-auto rounded-lg p-8 mt-10">
                <p className="text-2xl">Cart Total</p>
                <p className="border border-gray-200 my-2"></p>
                <div className="flex justify-between py-5">
                  <p className="text-xl">Total Products</p>
                  <p className="text-xl">${calculate.proTotal}</p>
                </div>
                <div className="flex justify-between gap-2">
                  <input
                    type="text"
                    placeholder="Apply coupon"
                    className="p-2 placeholder-gray-400 text-gray-600 bg-white text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-2/4"
                  />
                  <button className="bg-purple-600 text-white py-2 hover:bg-gray-600 w-2/4">
                    APPLY COUPON
                  </button>
                </div>
                <div className="flex justify-between text-2xl text-purple-600 font-medium my-5">
                  <p>Grand Total</p>
                  <p>${calculate.grandTotal}</p>
                </div>
                <button className="bg-purple-600 text-white py-2 w-full hover:bg-gray-600">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          ) : (
            <p className="text-2xl my-36 text-center">No items found in cart</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
