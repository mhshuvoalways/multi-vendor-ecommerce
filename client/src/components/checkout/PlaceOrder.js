import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddress } from "../../store/actions/userAddressAction";
import { orderProduct } from "../../store/actions/orderAction";
import { navigate } from "@reach/router";
import ApplyCoupon from "../ApplyCoupon";

const PlaceOrder = ({ state }) => {
  const [calculate, setCalculate] = useState(0);

  const dispatch = useDispatch();
  const cartReducer = useSelector((item) => item.inCartReducer);

  const productTotal = useCallback(() => {
    let proTotal = 0;
    cartReducer.cart.forEach((el) => {
      proTotal = proTotal + el.subTotal;
    });
    setCalculate(proTotal);
  }, [cartReducer.cart]);

  useEffect(() => {
    dispatch(getAddress());
    productTotal();
  }, [dispatch, productTotal]);

  return (
    <div className="w-96 mt-5">
      <p className="text-xl mb-10 font-semibold">Your order</p>
      <div className="bg-gray-100 p-10">
        <div className="flex justify-between text-xl border-b border-gray-400 mb-5">
          <p className="mb-5">Product</p>
          <p className="mb-5">Total</p>
        </div>
        <div className="my-10 border-b border-gray-400">
          {cartReducer.cart.map((el) => (
            <div className="flex justify-between">
              <p className="mb-5">
                {el.name} X {el.quantity}
              </p>
              <p className="mb-5">${el.subTotal}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between my-5 border-b border-gray-400">
          <p className="mb-5 text-base">Shipping</p>
          <p className="mb-5">Free shipping</p>
        </div>
        <div className="flex justify-between my-5 border-b border-gray-400">
          <p className="mb-5 text-base">Coupon discount</p>
          <p className="mb-5 flex items-center">
            $ <ApplyCoupon calculate={calculate} />
          </p>
        </div>
        <div className="flex justify-between text-xl">
          <p>Total</p>
          <p className="text-purple-600 flex items-center">
            $ <ApplyCoupon calculate={calculate} />
          </p>
        </div>
      </div>
      <button
        className="bg-purple-600 text-white py-3 w-full hover:bg-gray-600 mt-10 rounded-full"
        onClick={() => {
          dispatch(orderProduct(state, navigate));
        }}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default PlaceOrder;
