import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { adminRegister, userRegister } from "../../store/actions/userAction";
import ActiveLink from "../ActiveLink";

const Register = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    recaptch: "",
    storeName: "",
    role: "customer",
    agree: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminRegister());
  }, [dispatch]);

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCaptcha = (value) => {
    setState({
      ...state,
      recaptch: value,
    });
  };

  const onChangeRadio = (event) => {
    setState({
      ...state,
      role: event.target.value,
    });
  };

  const onChangeAgree = () => {
    setState({
      ...state,
      agree: !state.agree,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
      storeName,
      recaptch,
      role,
      agree,
    } = state;
    dispatch(
      userRegister(
        {
          email,
          password,
          storeName,
          recaptch,
          role,
          agree,
        },
        navigate
      )
    );
    setState({
      email: "",
      password: "",
      storeName: "",
      role: "customer",
      agree: true,
    });
  };

  return (
    <div className="mt-12 max-w-sm m-auto">
      <div className="flex justify-center mb-5">
        <ActiveLink to="/register">
          <button className="py-2 mt-5 text-2xl font-bold">Register</button>
        </ActiveLink>
        <p className="py-2 mt-5 text-2xl mx-2">|</p>
        <ActiveLink to="/login">
          <button className="py-2 mt-5 text-2xl font-bold">Login</button>
        </ActiveLink>
      </div>
      <form onSubmit={onSubmit}>
        <div className="shadow-md rounded-md text-left p-10">
          <label className="block">
            <span className="text-gray-700">EMAIL</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="email"
              onChange={onChange}
              value={state.email}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PASSWORD</span>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="password"
              onChange={onChange}
              value={state.password}
            />
          </label>
          {state.role === "vendor" && (
            <label className="block">
              <span className="text-gray-700">STORE NAME</span>
              <input
                type="text"
                placeholder="Enter Your Store Name"
                className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                name="storeName"
                onChange={onChange}
                value={state.storeName}
              />
            </label>
          )}
          <label className="block">
            <span className="text-gray-700">RECAPTCHA</span>
            <div className="my-1">
              <ReCAPTCHA
                value={state.recaptch}
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={onChangeCaptcha}
              />
            </div>
          </label>
          <div className="block mt-2">
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="customer"
                  checked={state.role === "customer"}
                  onChange={onChangeRadio}
                />
                <span className="ml-2">I am a customer</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="vendor"
                  checked={state.role === "vendor"}
                  onChange={onChangeRadio}
                />
                <span className="ml-2">I am a vendor</span>
              </label>
            </div>
          </div>
          <div className="flex mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={state.agree}
                className="form-checkbox cursor-pointer"
                onChange={onChangeAgree}
              />
              <span className="ml-2">
                I agree to the
                <span className="underline cursor-pointer">
                  {" "}
                  privacy policy
                </span>
              </span>
            </label>
          </div>
          {state.agree ? (
            <button className="bg-purple-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
              REGISTER
            </button>
          ) : (
            <button className="bg-gray-300 text-gray-500 py-2 mt-5 w-full cursor-not-allowed">
              REGISTER
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
