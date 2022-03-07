import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PlaceOrder from "./PlaceOrder";

const Checkout = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
    streetAddress: "",
    additionalInfo: "",
    discount: false,
  });

  const userReducer = useSelector((state) => state.userReducer);
  const userAddressReducer = useSelector((state) => state.userAddressReducer);
  const orderReducer = useSelector((item) => item.orderReducer);

  useEffect(() => {
    userAddressReducer.address &&
      userReducer.user &&
      setState({
        firstName: userReducer.user.firstName,
        lastName: userReducer.user.lastName,
        email: userReducer.user.email,
        phone: userReducer.user.phone,
        zipCode: userAddressReducer.address.zipCode,
        city: userAddressReducer.address.city,
        state: userAddressReducer.address.state,
        country: userAddressReducer.address.country,
        streetAddress: userAddressReducer.address.streetAddress,
        discount: orderReducer.applyCoupon
          ? process.env.REACT_APP_DISCOUNT_COUPON
          : false,
      });
  }, [orderReducer.applyCoupon, userAddressReducer.address, userReducer.user]);

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex w-11/12 m-auto flex-wrap justify-between"
    >
      <div className="mt-5">
        <p className="text-xl mb-5 font-semibold">Billing Details</p>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">First Name</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="firstName"
              onChange={onChangeHandler}
              value={state.firstName}
            />
          </div>
          <div>
            <label className="block">Last Name</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="lastName"
              onChange={onChangeHandler}
              value={state.lastName}
            />
          </div>
        </div>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">Email</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              value={state.email}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={state.phone}
              type="phone"
              name="phone"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">Zip Code</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="zipCode"
              onChange={onChangeHandler}
              value={state.zipCode}
            />
          </div>
          <div>
            <label className="block">City</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="city"
              onChange={onChangeHandler}
              value={state.city}
            />
          </div>
        </div>
        <div className="flex gap-5 mb-10 justify-between">
          <div>
            <label className="block">State</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="state"
              onChange={onChangeHandler}
              value={state.state}
            />
          </div>
          <div>
            <label className="block">Country</label>
            <input
              type="text"
              className="appearance-none md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="country"
              onChange={onChangeHandler}
              value={state.country}
            />
          </div>
        </div>
        <div>
          <label className="block">Street Address</label>
          <input
            type="text"
            className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="streetAddress"
            value={state.streetAddress}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mt-10">
          <label className="block">Additional information (optional)</label>
          <textarea
            placeholder="Note about your order, e.g. special notes for delivery"
            className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 h-32 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="additionalInfo"
            value={state.additionalInfo}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <PlaceOrder state={state} />
    </form>
  );
};

export default Checkout;
