import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVendor } from "../../store/actions/vendorAction";
import Clear from "../../assets/images/icons/clear.png";
import enableBtn from "../../store/actions/enableBtnAction";

const Settings = () => {
  const [storeName, setStoreName] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const dispatch = useDispatch();

  const btnReducer = useSelector((store) => store.btnReducer);
  const vendorReducer = useSelector((store) => store.vendorReducer);

  const vendor = vendorReducer.vendor;

  const changeHandler = (e) => {
    setStoreName(e.target.value);
  };

  const changeHandlerImage = (event) => {
    setImage(event.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    image
      ? formData.append("image", image)
      : formData.append("imageUrl", imageUrl);
    formData.append("storeName", storeName);
    dispatch(updateVendor(formData));
    dispatch(enableBtn(false));
  };

  useEffect(() => {
    setStoreName(vendor && vendor.author && vendor.author.storeName);
    setImageUrl(vendor && vendor.image && vendor.image.url);
  }, [vendor]);

  const imageView = () => {
    if (imageUrl) {
      return (
        <div className="flex gap-1 flex-wrap">
          <img
            alt="not found"
            className="w-48 border border-gray-50 p-2"
            src={imageUrl}
          />
          <div>
            <img
              src={Clear}
              alt="clear"
              className="cursor-pointer border border-gray-50"
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
            className="w-48 border border-gray-50 p-2"
            src={URL.createObjectURL(image)}
          />
          <div>
            <img
              src={Clear}
              alt="clear"
              className="cursor-pointer border border-gray-50"
              onClick={() => setImage(null)}
            />
          </div>
        </div>
      );
    } else {
      return (
        <label className="w-48 flex flex-col items-center p-2 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
          <i className="fas fa-cloud-upload-alt fa-3x"></i>
          <span className="mt-2 text-base leading-normal">Upload a Image</span>
          <input type="file" onChange={changeHandlerImage} className="hidden" />
        </label>
      );
    }
  };

  return (
    <div className="border border-gray-50 p-5">
      <div className="flex gap-2 md:gap-10 flex-wrap mb-10 justify-center md:justify-start">
        <label className="text-base">Store Name:</label>
        <input
          className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-48 "
          type="text"
          name="name"
          placeholder="Store Name"
          value={storeName}
          onChange={changeHandler}
        />
      </div>
      <div className="flex gap-2 md:gap-10 flex-wrap justify-center md:justify-start">
        <label className="text-base">Store Image:</label>
        {imageView()}
      </div>
      <div className="mt-10">
        {btnReducer ? (
          <button
            className="shadow bg-teal-400 hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            type="button"
            onClick={onSubmitHandler}
          >
            Update Settings
          </button>
        ) : (
          <button
            className="shadow bg-teal-400 hover:bg-gray-800 bg-gray-600 cursor-not-allowed opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            type="button"
          >
            Update Settings
          </button>
        )}
      </div>
    </div>
  );
};

export default Settings;
