import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/actions/contactAction";

const Contact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();
  const btnReducer = useSelector((store) => store.btnReducer);
  const contactReducer = useSelector((store) => store.contactReducer);

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessage(state));
  };

  useEffect(() => {
    if (contactReducer) {
      setState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  }, [contactReducer]);

  return (
    <div>
      <form className="w-4/5 max-w-lg m-auto mt-14">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              onChange={onChangeHandler}
              value={state.firstName}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              onChange={onChangeHandler}
              value={state.lastName}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              onChange={onChangeHandler}
              value={state.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              placeholder="Enter Your Message"
              name="message"
              onChange={onChangeHandler}
              value={state.message}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            {btnReducer ? (
              <button
                className="shadow hover:bg-gray-800 bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onSubmitHandler}
              >
                Send
              </button>
            ) : (
              <button
                className="shadow hover:bg-gray-800 bg-gray-600 cursor-not-allowed opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onSubmitHandler}
              >
                Send
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
