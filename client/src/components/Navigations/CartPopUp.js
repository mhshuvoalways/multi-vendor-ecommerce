import React, { useEffect, useState, useCallback } from "react";
import { Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/actions/inCartAction";
import Clear from "../../assets/images/icons/clear.png";

const CartPopUp = () => {
  const [cart, setCart] = useState([]);
  const [calculate, setCalculate] = useState({
    proTotal: 0,
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
    });
  }, [cart]);

  useEffect(() => {
    setCart(cartReducer.cart);
    productTotal();
  }, [cartReducer.cart, productTotal]);

  return (
    <div>
      {cart.length ? (
        <div>
          {cart.map((el) => (
            <div className="flex justify-between gap-1 text-sm text-gray-700 p-8 hover:bg-gray-100">
              <div className="w-20">
                <img src={el.image} alt="" className="cursor-pointer" />
              </div>
              <div>
                <p>{el.name}</p>
                <p>Qty: {el.quantity}</p>
                <p>${el.subTotal}</p>
                {/* <div className="mt-2">
                <p>Color: blue</p>
                <p>Size: x</p>
              </div> */}
              </div>
              <div>
                <img
                  src={Clear}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => dispatch(deleteCartItem(el._id))}
                />
              </div>
            </div>
          ))}
          <div>
            <div className="flex justify-between w-64 m-auto my-5 font-medium">
              <p>Total:</p>
              <p>${calculate.proTotal}</p>
            </div>
            <div>
              <Link to="/cart">
                <button className="bg-purple-600 text-white py-2 block my-2 w-64 m-auto hover:bg-gray-700">
                  VIEW CART
                </button>
              </Link>
              <button className="bg-purple-600 text-white py-2 block my-2 w-64 m-auto hover:bg-gray-700">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="p-10 text-base text-center">No items added to cart</p>
      )}
    </div>
  );
};

export default CartPopUp;
