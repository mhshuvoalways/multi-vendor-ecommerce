import React from "react";

const Order = () => {
  return (
    <div className="overflow-x-auto md:overflow-x-hidden">
      <table className="text-left">
        <tr>
          <th className="p-3 border border-gray-300">Order</th>
          <th className="p-3 border border-gray-300">Date</th>
          <th className="p-3 border border-gray-300">Status</th>
          <th className="p-3 border border-gray-300">Total</th>
        </tr>
        <tr className="">
          <td className="p-3 border border-gray-300">
            <p>#131</p>
          </td>
          <td className="p-3 border border-gray-300">
            <p>October 5, 2021</p>
          </td>
          <td className="p-3 border border-gray-300">
            <p>Delivered</p>
          </td>
          <td className="p-3 border border-gray-300">
            <p>$50.00 for 3 items</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Order;
