import React from "react";

const Address = () => {
  return (
    <div>
      <div className="shadow rounded-md">
        <div className="p-5">
          <h5 className="flex justify-between mb-2 flex-wrap">
            <p className="font-semibold text-sm sm:text-xl">Billing address</p>
            <p className="cursor-pointer underline">Edit</p>
          </h5>
          <p className="mb-4">
            <p>MH Shuvo</p>
            <p>Allardarga, Kushtia</p>
            <p>Bangladesh</p>
          </p>
        </div>
      </div>
      <div className="shadow rounded-md ">
        <div className="p-5">
          <h5 className="flex justify-between mb-2 flex-wrap">
            <p className="font-semibold text-sm sm:text-xl">Shipping address</p>
            <p className="cursor-pointer underline">Edit</p>
          </h5>
          <p className="mb-4">
            <p>MH Shuvo</p>
            <p>Allardarga, Kushtia</p>
            <p>Bangladesh</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
