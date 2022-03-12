import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/actions/productAction";
import Modal from "../Modal";
import Tags from "./Tags";
import Clear from "../../assets/images/icons/clear.png";

const UploadModal = ({ modal, modalHandler }) => {
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    regularPrice: "",
    salePrice: "",
    description: "",
    finalTags: [],
  });

  const [tags, setTags] = useState({
    searchTags: [],
  });

  const dispatch = useDispatch();
  const tagsData = useSelector((data) => data.tagsReducer);
  const categoryData = useSelector((data) => data.categoryReducer);

  const changeHandlerImage = (event) => {
    setImage(event.target.files[0]);
  };

  const changeHandler = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const temp = [...tagsData.tags];
    const removeDublicate = temp.filter(
      (val) => !product.finalTags.includes(val)
    );
    setTags({
      searchTags: removeDublicate,
    });
  }, [product.finalTags, tagsData.tags]);

  const onClickTags = (name) => {
    const tagAr = [...tagsData.tags];
    const obj = tagAr.find(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );
    if (obj) {
      const finalTag = [...product.finalTags, obj];
      setProduct({
        ...product,
        finalTags: finalTag,
      });
    }
  };

  const removeTag = (id) => {
    const ft = [...product.finalTags];
    const filterTags = ft.filter((el) => el._id !== id);
    setProduct({
      ...product,
      finalTags: filterTags,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("regularPrice", product.regularPrice);
    formData.append("salePrice", product.salePrice);
    formData.append("description", product.description);
    formData.append("tags", JSON.stringify(product.finalTags));
    dispatch(createProduct(formData));
  };

  return (
    <Modal modal={modal} modalHandler={modalHandler}>
      <form>
        <div className="flex gap-5 justify-between flex-wrap">
          {image ? (
            <div className="flex gap-1 flex-wrap">
              <img
                alt="not fount"
                className="w-64 border"
                src={URL.createObjectURL(image)}
              />
              <div>
                <img
                  src={Clear}
                  alt="clear"
                  className="cursor-pointer border"
                  onClick={() => setImage(null)}
                />
              </div>
            </div>
          ) : (
            <label className="w-64 flex flex-col items-center px-2 py-4 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
              <i className="fas fa-cloud-upload-alt fa-3x"></i>
              <span className="mt-2 text-base leading-normal">
                Upload a Product
              </span>
              <input
                type="file"
                onChange={changeHandlerImage}
                className="hidden"
              />
            </label>
          )}
          <div className="md:w-1/2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-5 flex-wrap justify-between">
          <div className="md:w-1/5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Regular Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="regularPrice"
              placeholder="Price"
              onChange={changeHandler}
            />
          </div>
          <div className="md:w-1/5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Sale Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="salePrice"
              placeholder="Discount"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="mt-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Select a category
          </label>
          <label>
            <select
              className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="category"
              onChange={changeHandler}
            >
              <option>Default</option>
              {categoryData.categories.map((el) => (
                <option key={el._id}>{el.name}</option>
              ))}
            </select>
          </label>
        </div>
        <Tags
          product={product}
          removeTag={removeTag}
          tags={tags}
          onClickTags={onClickTags}
        />
        <div className="mt-5">
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter some short description about this product"
            name="description"
            onChange={changeHandler}
          />
        </div>
        <div className="mt-5 ">
          <button
            className="shadow bg-teal-400 hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full md:w-28"
            type="button"
            onClick={onSubmitHandler}
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadModal;
