import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadModal from "./UploadModal";
import moment from "moment";
import Clear from "../../assets/images/icons/clear.png";
import Edit from "../../assets/images/icons/edit.png";
import {
  deleteProduct,
  modalToggle,
  getMyProducts,
} from "../../store/actions/productAction";
import { getTags } from "../../store/actions/tagAction";
import { getCategory } from "../../store/actions/categoryAction";
import { getCartItem } from "../../store/actions/inCartAction";
import AddSearch from "./AddSearch";

const Products = () => {
  const productReducer = useSelector((el) => el.productReducer);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
    dispatch(getCategory());
    dispatch(getMyProducts());
  }, [dispatch]);

  const reverseProduct = [
    ...productReducer.myProducts.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    ),
  ];

  return (
    <div className="overflow-x-auto md:overflow-x-hidden">
      <AddSearch setInputValue={setInputValue} modalToggle={modalToggle} />
      <table className="border-collapse w-full text-left">
        <tr>
          <th className="p-2 bg-gray-100">IMAGE</th>
          <th className="p-2 bg-gray-100">NAME</th>
          <th className="p-2 bg-gray-100">PRICE</th>
          <th className="p-2 bg-gray-100">STOCK</th>
          <th className="p-2 bg-gray-100">PUBLISHED</th>
          <th className="p-2 bg-gray-100">ACTION</th>
        </tr>
        {reverseProduct.reverse().map((el) => (
          <tr className="border-gray-100 border-2" key={el._id}>
            <td className="p-2">
              <img src={el.image[0].url} alt="" className="w-28" />
            </td>
            <td className="p-2">
              <p>{el.name}</p>
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
              {el.stockStatus ? (
                <p className="text-green-700">In Stock</p>
              ) : (
                <p className="text-red-700">Out of Stock</p>
              )}
            </td>
            <td className="p-2">
              <p>{moment(el.createdAt).format("LL")}</p>
            </td>
            <td className="p-2">
              <div className="flex gap-2">
                <img src={Edit} alt="" className="cursor-pointer w-5" />
                <img
                  src={Clear}
                  alt=""
                  className="cursor-pointer w-5"
                  onClick={() => {
                    dispatch(deleteProduct(el._id));
                    dispatch(getCartItem());
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </table>
      {productReducer.modal && (
        <UploadModal modalHandler={modalToggle} modal={productReducer.modal} />
      )}
    </div>
  );
};

export default Products;
