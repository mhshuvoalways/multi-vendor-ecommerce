import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getAddress } from "../../store/actions/userAddressAction";
import enableBtn from "../../store/actions/enableBtnAction";

const Address = () => {
  const [state, setState] = useState({
    zipCode: "",
    city: "",
    state: "",
    country: "",
    streetAddress: "",
  });

  const dispatch = useDispatch();
  const userAddressReducer = useSelector((state) => state.userAddressReducer);
  const btnReducer = useSelector((state) => state.btnReducer);

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    userAddressReducer.address &&
      setState({
        zipCode: userAddressReducer.address.zipCode,
        city: userAddressReducer.address.city,
        state: userAddressReducer.address.state,
        country: userAddressReducer.address.country,
        streetAddress: userAddressReducer.address.streetAddress,
      });
  }, [userAddressReducer.address]);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addAddress(state));
    dispatch(enableBtn(false));
  };

  return (
    <form className="w-4/5 max-w-lg m-auto" onSubmit={onSubmitHandler}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Zip Code
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="zipCode"
            onChange={onChangeHandler}
            value={state.zipCode}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={state.city}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            State
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={state.state}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Country
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={state.country}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Street Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="streetAddress"
            value={state.streetAddress}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          {btnReducer ? (
            <button
              className="shadow bg-teal-400 hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Save Changes
            </button>
          ) : (
            <button
              className="shadow bg-teal-400 hover:bg-gray-800 bg-gray-600 opacity-50 cursor-not-allowed focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Address;
