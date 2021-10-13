import React from "react";
import { Link } from "@reach/router";

const Register = () => {
  return (
    <div className="mt-16 max-w-xl m-auto">
      <div className="flex justify-center mb-5">
        <Link to="/register">
          <button className="hover:text-purple-600 py-2 mt-5 w-60 text-2xl font-bold">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="hover:text-purple-600 py-2 mt-5 w-60 text-2xl font-bold">
            Login
          </button>
        </Link>
      </div>
      <form>
        <div className="p-4 shadow-md rounded-md text-left px-28 py-10">
          <label className="block">
            <span className="text-gray-700">NAME</span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">EMAIL</span>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PHONE</span>
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PASSWORD</span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
          </label>
          <div className="flex mt-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <span className="ml-2">
                I agree to the
                <span className="underline cursor-pointer">
                  {" "}
                  privacy policy
                </span>
              </span>
            </label>
          </div>
          <button className="bg-purple-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
