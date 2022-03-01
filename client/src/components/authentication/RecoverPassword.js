import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recoverPass } from "../../store/actions/userAction";
import { navigate, useParams } from "@reach/router";

const RecoverPassword = () => {
  const params = useParams();

  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
    token: params.token,
  });

  const dispatch = useDispatch();

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(recoverPass(state, navigate));
  };

  return (
    <div className="mt-12 max-w-sm m-auto">
      <form onSubmit={onSubmit}>
        <div className="shadow-md rounded-md text-left p-10">
          <label className="block">
            <span className="text-gray-700">NEW PASSWORD</span>
            <input
              type="password"
              placeholder="Enter New Password"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="password"
              onChange={onChange}
              value={state.password}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">CONFIRM PASSWORD</span>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="confirmPassword"
              onChange={onChange}
              value={state.confirmPassword}
            />
          </label>
          <button className="bg-purple-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
