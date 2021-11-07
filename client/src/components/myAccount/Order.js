import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getOderDetails } from "../../store/actions/orderAction";

const Order = () => {
  const dispatch = useDispatch();
  const orderReducer = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getOderDetails());
  }, [dispatch]);

  const orderReverse = [...orderReducer.order];

  return (
    <div className="overflow-x-auto md:overflow-x-hidden">
      {orderReverse.length ? (
        <table className="text-left">
          <tr>
            <th className="p-3 border border-gray-300">Order</th>
            <th className="p-3 border border-gray-300">Date</th>
            <th className="p-3 border border-gray-300">Status</th>
            <th className="p-3 border border-gray-300">Total</th>
          </tr>
          {orderReverse.reverse().map((el) => (
            <tr key={el._id}>
              <td className="p-3 border border-gray-300">
                <p>#{el._id.substring(18)}</p>
              </td>
              <td className="p-3 border border-gray-300">
                <p>{moment(el.createdAt).format("LL")}</p>
              </td>
              <td className="p-3 border border-gray-300">
                <p>{el.status}</p>
              </td>
              <td className="p-3 border border-gray-300">
                <p>
                  ${el.subTotal} for {el.quantity} items
                </p>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <p className="text-xl text-center">You don't have any order yet</p>
      )}
    </div>
  );
};

export default Order;
