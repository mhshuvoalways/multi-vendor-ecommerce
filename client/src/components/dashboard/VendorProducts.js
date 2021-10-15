import React from "react";
import Product from "../../assets/images/products/products.jpg";
import Clear from "../../assets/images/icons/clear.png";
import Edit from "../../assets/images/icons/edit.png";

const Products = () => {
  return (
    <div className="overflow-x-auto md:overflow-x-hidden">
      <div className="flex justify-between mb-2">
        <div>
          <input
            type="text"
            placeholder="Search Product..."
            className="w-4/5 max-w-lg p-2 placeholder-gray-400 text-gray-600 bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
          />
        </div>
        <button className="bg-purple-600 text-white p-2 rounded hover:bg-gray-900">
          Add Product
        </button>
      </div>
      <table className="border-collapse w-full text-left">
        <tr>
          <th className="p-2 bg-gray-100">IMAGE</th>
          <th className="p-2 bg-gray-100">NAME</th>
          <th className="p-2 bg-gray-100">PRICE</th>
          <th className="p-2 bg-gray-100">STOCK</th>
          <th className="p-2 bg-gray-100">PUBLISHED</th>
          <th className="p-2 bg-gray-100">ACTION</th>
        </tr>
        <tr className="border-gray-100 border-2">
          <td className="p-2">
            <img src={Product} alt="" className="w-28" />
          </td>
          <td className="p-2">
            <p>The Coldest Sunset</p>
            <p>Color: blue</p>
            <p>Size: x</p>
          </td>
          <td className="p-2">
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
          </td>
          <td className="p-2">
            <p className="text-green-600">In Stock</p>
          </td>
          <td className="p-2">
            <p>September 11, 2021</p>
          </td>
          <td className="p-2">
            <div className="flex gap-2">
              <img src={Edit} alt="" className="cursor-pointer w-5" />
              <img src={Clear} alt="" className="cursor-pointer w-5" />
            </div>
          </td>
        </tr>
        <tr className="border-gray-100 border-2">
          <td className="p-2">
            <img src={Product} alt="" className="w-28" />
          </td>
          <td className="p-2">
            <p>The Coldest Sunset</p>
            <p>Color: blue</p>
            <p>Size: x</p>
          </td>
          <td className="p-2">
            <div className="flex">
              <p>$10</p>
              <span className="mx-2">-</span>
              <p className="line-through">$12</p>
            </div>
          </td>
          <td className="p-2">
            <p className="text-green-600">In Stock</p>
          </td>
          <td className="p-2">
            <p>September 11, 2021</p>
          </td>
          <td className="p-2">
            <div className="flex gap-2">
              <img src={Edit} alt="" className="cursor-pointer w-5" />
              <img src={Clear} alt="" className="cursor-pointer w-5" />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Products;
