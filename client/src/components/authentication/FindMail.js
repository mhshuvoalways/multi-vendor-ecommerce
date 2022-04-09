import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMail } from "../../store/actions/userAction";
import enableBtn from "../../store/actions/enableBtnAction";
import { Link, useNavigate } from "react-router-dom";

const FindEmail = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const btnReducer = useSelector((store) => store.btnReducer);

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(enableBtn(false));
    dispatch(findMail({ email: state }, navigate));
  };

  return (
    <form className="mt-12 max-w-sm m-auto">
      <div className="shadow-md rounded-md text-left p-10">
        <Link
          to="/login"
          className="flex items-center border w-16 mb-10 justify-around"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </Link>
        <label className="block">
          <span className="text-gray-700">EMAIL</span>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            name="email"
            onChange={onChange}
            value={state}
          />
        </label>
        {btnReducer ? (
          <button
            className="bg-purple-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
            onClick={onSubmitHandler}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-gray-600 cursor-not-allowed opacity-50 text-white py-2 mt-5 w-full hover:bg-gray-900"
            type="button"
          >
            Next
          </button>
        )}
      </div>
    </form>
  );
};

export default FindEmail;
