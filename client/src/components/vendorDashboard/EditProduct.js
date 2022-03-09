import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/actions/productAction";
import Modal from "../Modal";
import Tags from "./Tags";
import Clear from "../../assets/images/icons/clear.png";

const EditProduct = ({ modal, modalHandler, id }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    regularPrice: "",
    salePrice: "",
    description: "",
    finalTags: [],
  });
  const [tags, setTags] = useState({
    searchTerm: "",
    searchTags: [],
  });

  const dispatch = useDispatch();
  const tagsData = useSelector((data) => data.tagsReducer);
  const categoryData = useSelector((data) => data.categoryReducer);
  const productReducer = useSelector((data) => data.productReducer);

  const changeHandlerImage = (event) => {
    setImage(event.target.files[0]);
  };

  const changeHandler = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const changeHandlerTag = (e) => {
    const temp = [...tagsData.tags];
    setTags({
      ...tags,
      searchTerm: e.target.value,
      searchTags: temp.filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  const onClickTags = (id) => {
    const tagAr = [...tagsData.tags];
    const obj = tagAr.find((el) => el._id === id);
    const finalTag = [...product.finalTags, obj];
    setProduct({
      ...product,
      finalTags: finalTag,
    });
    setTags({
      ...tags,
      searchTerm: "",
    });
  };

  const removeTag = (id) => {
    const ft = [...product.finalTags];
    const filterTags = ft.filter((el) => el._id !== id);
    setProduct({
      ...product,
      finalTags: filterTags,
    });
  };

  const editPro = productReducer.myProducts.find(
    (product) => product._id === id
  );

  useEffect(() => {
    setProduct({
      name: editPro.name,
      category: editPro.category,
      regularPrice: editPro.regularPrice,
      salePrice: editPro.salePrice,
      description: editPro.description,
      finalTags: editPro.tags,
    });
    setImageUrl(editPro.image[0].url);
  }, [editPro]);

  const onSubmit = (e) => {
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

  return (
    <Modal modal={modal} modalHandler={modalHandler}>
      <form onSubmit={onSubmit}>
        <div className="flex gap-5 justify-between flex-wrap">
          {imageView()}
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
              value={product.name}
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
              value={product.regularPrice}
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
              value={product.salePrice}
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
              value={product.category}
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
          changeHandlerTag={changeHandlerTag}
          tags={tags}
          onClickTags={onClickTags}
          value={tags.searchTerm}
        />
        <div className="mt-5">
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter some short description about this product"
            name="description"
            onChange={changeHandler}
            value={product.description}
          />
        </div>
        <div className="mt-5 ">
          <button
            className="shadow bg-teal-400 hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full md:w-28"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProduct;
