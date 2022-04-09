import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteWishItem,
  deleteAllWishItem,
} from "../store/actions/wishListAction";
import enableBtn from "../store/actions/enableBtnAction";
import { Link } from "react-router-dom";
import Loading from "./utils/Loading";
import Clear from "../assets/images/icons/clear.png";

const InWishList = () => {
  const dispatch = useDispatch();
  const wishListReducer = useSelector((item) => item.wishListReducer);
  const btnReducer = useSelector((store) => store.btnReducer);

  const wishListReverse = [...wishListReducer.wishlist];

  return (
    <div>
      {wishListReducer.isLoading ? (
        <Loading />
      ) : (
        <div>
          {wishListReducer.wishlist.length ? (
            <div className="w-11/12 m-auto mt-10">
              <p className="text-xl mb-3">Your wishlist items</p>
              <div className="overflow-x-auto md:overflow-x-hidden">
                <table className="border-collapse w-full text-left">
                  <tr>
                    <th className="p-2 bg-gray-100">IMAGE</th>
                    <th className="p-2 bg-gray-100">PRODUCT NAME</th>
                    <th className="p-2 bg-gray-100">UNIT PRICE</th>
                    <th className="p-2 bg-gray-100">ADD TO CART</th>
                    <th className="p-2 bg-gray-100">ACTION</th>
                  </tr>
                  {wishListReverse.reverse().map((el) => (
                    <tr className="border-gray-100 border-2">
                      <td className="p-2">
                        <Link to={`/details/${el.productId}`}>
                          <img src={el.image} alt="" className="w-28" />
                        </Link>
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
                        <Link to={`/details/${el.productId}`}>
                          <p className="bg-purple-700 px-3 text-xs py-2 text-center hover:bg-gray-800 rounded-full w-32 text-gray-100 cursor-pointer">
                            SELECT OPTION
                          </p>
                        </Link>
                      </td>
                      <td className=" p-2">
                        <img
                          src={Clear}
                          alt=""
                          className="cursor-pointer w-5"
                          onClick={() => dispatch(deleteWishItem(el._id))}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="flex md:justify-between justify-center my-10 flex-wrap gap-5 margin-auto">
                <Link to="/shop">
                  <button className="bg-gray-100 text-gray-900 py-3 w-60 hover:bg-purple-600 hover:text-white rounded-full">
                    CONTINUE SHOPPING
                  </button>
                </Link>
                {btnReducer ? (
                  <button
                    className="bg-gray-100 text-gray-900 py-3 w-60 hover:bg-purple-600 hover:text-white rounded-full"
                    onClick={() => {
                      dispatch(deleteAllWishItem());
                      dispatch(enableBtn(false));
                    }}
                  >
                    CLEAR WISHLIST
                  </button>
                ) : (
                  <button
                    className="bg-gray-600 cursor-not-allowed opacity-50 text-gray-900 py-3 w-60 hover:bg-purple-600 hover:text-white rounded-full"
                    type="button"
                  >
                    CLEAR WISHLIST
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-2xl my-36 text-center">
              No items found in wishlist
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InWishList;
