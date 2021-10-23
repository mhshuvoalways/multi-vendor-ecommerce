import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/actions/productAction";
import Tags from "./Tags";

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
    tagsArr: [],
    searchTerm: "",
    searchTags: [],
  });

  const dispatch = useDispatch();
  const tagsData = useSelector((data) => data.tagsReducer);
  const categoryData = useSelector((data) => data.categoryReducer);

  useEffect(() => {
    setTags({
      ...tags,
      tagsArr: tagsData.tags,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const temp = [...tags.tagsArr];
    setTags({
      ...tags,
      searchTerm: e.target.value,
      searchTags: temp.filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  const onClickTags = (id) => {
    const tagAr = [...tags.tagsArr];
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

  const onSubmit = (e) => {
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
    <div>
      {modal && (
        <div>
          <div
            className={
              modal
                ? "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                : "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            }
          >
            <div className="relative my-6 w-3/5 m-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Product</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span
                      className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                      onClick={modalHandler}
                    >
                      <i className="fas fa-times"></i>
                    </span>
                  </button>
                </div>
                <div className="p-6 text-gray-500 text-lg leading-relaxed">
                  {/* Content start */}
                  <form onSubmit={onSubmit}>
                    <div className="flex gap-5 justify-between flex-wrap">
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
                  {/* Content end */}
                </div>
              </div>
            </div>
          </div>
          <div className="left-0 top-0 bottom-0 right-0 fixed bg-black opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default UploadModal;
