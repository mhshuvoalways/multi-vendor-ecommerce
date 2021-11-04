import React from "react";

const Checkout = () => {
  return (
    <div className="flex w-11/12 m-auto flex-wrap justify-between">
      <div className="mt-5">
        <p className="text-xl mb-5 font-semibold">Billing Details</p>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">First Name</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block">Last Name</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">Email</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">Zip Code</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block">City</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">State</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block">Country</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div>
          <label className="block">Street Address</label>
          <input
            type="text"
            className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="mt-10">
          <label className="block">Additional information</label>
          <textarea
            placeholder="Note about your order"
            className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 h-32 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
      <div className="w-96 mt-5">
        <p className="text-xl mb-10 font-semibold">Your order</p>
        <div className="bg-gray-100 p-10">
          <div className="flex justify-between text-xl border-b border-gray-400 mb-5">
            <p className="mb-5">Product</p>
            <p className="mb-5">Total</p>
          </div>
          <div className="flex justify-between my-10 border-b border-gray-400">
            <p className="mb-5">Lorem ipsum female coat X 3</p>
            <p className="mb-5">$68.85</p>
          </div>
          <div className="flex justify-between my-5 border-b border-gray-400">
            <p className="mb-5 text-base">Shipping</p>
            <p className="mb-5">Free shipping</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Total</p>
            <p className="text-purple-600">$78.39</p>
          </div>
        </div>
        <button className="bg-purple-600 text-white py-3 w-full hover:bg-gray-600 mt-10 rounded-full">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
