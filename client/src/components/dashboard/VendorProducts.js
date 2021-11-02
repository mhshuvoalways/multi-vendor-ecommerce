import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadModal from "./UploadModal";
import moment from "moment";
import Clear from "../../assets/images/icons/clear.png";
import Edit from "../../assets/images/icons/edit.png";
import { deleteProduct, modalToggle } from "../../store/actions/productAction";
import { getTags } from "../../store/actions/tagAction";
import { getCategory } from "../../store/actions/categoryAction";
import { getCartItem } from "../../store/actions/inCartAction";

const Products = () => {
  const [products, setProduct] = useState();
  const productReducer = useSelector((el) => el.productReducer);
  const userReducer = useSelector((el) => el.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
    dispatch(getCategory());
    setProduct(
      productReducer &&
        productReducer.products.filter(
          (el) => el.author.authorId === userReducer.user._id
        )
    );
  }, [dispatch, productReducer.products, userReducer.user._id, productReducer]);

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
        <button
          className="bg-purple-600 text-white p-2 rounded hover:bg-gray-900"
          onClick={() => dispatch(modalToggle())}
        >
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
        {products &&
          products.reverse().map((el) => (
            <tr className="border-gray-100 border-2">
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
                      dispatch(deleteProduct(el._id))
                      dispatch(getCartItem())
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
