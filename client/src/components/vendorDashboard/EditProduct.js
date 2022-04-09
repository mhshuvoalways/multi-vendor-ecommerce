import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/actions/productAction";
import enableBtn from "../../store/actions/enableBtnAction";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Modal from "../Modal";
import Tags from "./Tags";
import Clear from "../../assets/images/icons/clear.png";

const EditProduct = ({ modal, modalHandler, id }) => {
  const productReducer = useSelector((data) => data.productReducer);
  const editPro = productReducer.myProducts.find(
    (product) => product._id === id
  );

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(editPro.image[0].url);
  const [product, setProduct] = useState({
    name: editPro.name,
    category: editPro.category,
    regularPrice: editPro.regularPrice,
    salePrice: editPro.salePrice,
    description: editPro.description,
    finalTags: editPro.tags,
  });

  const [tags, setTags] = useState({
    searchTags: [],
  });

  const dispatch = useDispatch();
  const tagsData = useSelector((data) => data.tagsReducer);
  const categoryData = useSelector((data) => data.categoryReducer);
  const btnReducer = useSelector((store) => store.btnReducer);

  const changeHandlerImage = (event) => {
    setImage(event.target.files[0]);
  };

  const changeHandler = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (value) => {
    setProduct({
      ...product,
      description: value,
    });
  };

  useEffect(() => {
    const temp = [...tagsData.tags];
    const removeDublicate = temp.filter(
      (val) => !product.finalTags.find((el) => el._id === val._id)
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

  const imageView = () => {
    if (imageUrl) {
      return (
        <div className="flex gap-1 flex-wrap">
          <img alt="not found" className="w-64 border" src={imageUrl} />
          <div>
            <img
              src={Clear}
              alt="clear"
              className="cursor-pointer border"
              onClick={() => setImageUrl(null)}
            />
          </div>
        </div>
      );
    } else if (image) {
      return (
        <div className="flex gap-1 flex-wrap">
          <img
            alt="not found"
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
      );
    } else {
      return (
        <label className="w-64 flex flex-col items-center px-2 py-4 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
          <i className="fas fa-cloud-upload-alt fa-3x"></i>
          <span className="mt-2 text-base leading-normal">
            Upload a Product
          </span>
          <input type="file" onChange={changeHandlerImage} className="hidden" />
        </label>
      );
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    image
      ? formData.append("image", image)
      : formData.append("imageUrl", imageUrl);
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("regularPrice", product.regularPrice);
    formData.append("salePrice", product.salePrice);
    formData.append("description", product.description);
    formData.append("tags", JSON.stringify(product.finalTags));
    dispatch(updateProduct(id, formData));
    dispatch(enableBtn(false));
  };

  return (
    <Modal modal={modal} modalHandler={modalHandler} modalTitle={product.name}>
      <form>
        <div className="flex gap-5 justify-between flex-wrap">
          {imageView()}
          <div className="md:w-1/2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={changeHandler}
              value={product.name}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-5 flex-wrap justify-between">
          <div className="md:w-1/5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Regular Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="regularPrice"
              placeholder="Price"
              onChange={changeHandler}
              value={product.regularPrice}
            />
          </div>
          <div className="md:w-1/5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Sale Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="salePrice"
              placeholder="Discount"
              onChange={changeHandler}
              value={product.salePrice}
            />
          </div>
        </div>
        <div className="mt-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
        <div className="mt-5 bg-gray-200">
          <ReactQuill
            onChange={handleChange}
            className="bg text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={product.description}
          />
        </div>
        <div className="mt-5 ">
          {btnReducer ? (
            <button
              className="shadow bg-teal-400 hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full md:w-28"
              type="button"
              onClick={onSubmitHandler}
            >
              Update
            </button>
          ) : (
            <button
              className="shadow bg-teal-400 hover:bg-gray-800 bg-gray-600 cursor-not-allowed opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full md:w-28"
              type="button"
            >
              Update
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default EditProduct;
