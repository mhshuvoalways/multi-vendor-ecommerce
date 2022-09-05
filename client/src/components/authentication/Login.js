import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import {
  userLogin,
  loginWithGoogle,
  loginWithFacebook,
} from "../../store/actions/userAction";
import enableBtn from "../../store/actions/enableBtnAction";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const Login = () => {
  const [state, setState] = useState({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    checked: false,
  });

  const btnReducer = useSelector((store) => store.btnReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeRemember = (event) => {
    if (event.target.checked) {
      localStorage.setItem("email", state.email);
      localStorage.setItem("password", state.password);
      setState({ ...state, checked: event.target.checked });
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      setState({ ...state, checked: event.target.checked });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    dispatch(userLogin({ email, password }, navigate, from));
    dispatch(enableBtn(false));
    if (!state.checked) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };

  const responseGoogle = (response) => {
    const { email, givenName, familyName, imageUrl } = response.profileObj;
    dispatch(
      loginWithGoogle(
        {
          accessToken: response.accessToken,
          email,
          givenName,
          familyName,
          imageUrl,
        },
        navigate,
        from
      )
    );
    dispatch(enableBtn(false));
  };

  const responseFacebook = (response) => {
    const { email, name, accessToken, userID } = response;
    dispatch(
      loginWithFacebook(
        {
          email,
          name,
          imageUrl: response.picture.data.url,
          accessToken,
          userID,
          appId: process.env.REACT_APP_FACEBOOK_APPID,
        },
        navigate,
        from
      )
    );
    dispatch(enableBtn(false));
  };

  return (
    <div className="mt-12 max-w-sm m-auto">
      <div className="flex justify-center mb-5">
        <NavLink
          to="/register"
          className={({ isActive }) => isActive && "text-purple-600"}
        >
          <button className="py-2 mt-5 text-2xl font-bold">Register</button>
        </NavLink>
        <p className="py-2 mt-5 text-2xl mx-2">|</p>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive && "text-purple-600"}
        >
          <button className="py-2 mt-5 text-2xl font-bold">Login</button>
        </NavLink>
      </div>
      <form>
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
          <div className="flex mt-6 justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox cursor-pointer"
                onChange={onChangeRemember}
                checked={state.checked}
              />
              <span className="ml-2 cursor-pointer">Remember me</span>
            </label>
            <label>
              <Link to="/findmail">
                <span className="ml-2 cursor-pointer hover:text-purple-500">
                  Forgot Password?
                </span>
              </Link>
            </label>
          </div>
          {btnReducer ? (
            <button
              className="bg-purple-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
              onClick={onSubmit}
            >
              LOGIN
            </button>
          ) : (
            <button
              className="bg-gray-600 cursor-not-allowed opacity-50 text-white py-2 mt-5 w-full hover:bg-gray-900"
              type="button"
            >
              LOGIN
            </button>
          )}

          <p className="mt-1">Or, login with</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) =>
              btnReducer ? (
                <button
                  className="bg-red-500 text-white py-2 mt-2 w-full hover:bg-gray-900"
                  onClick={renderProps.onClick}
                >
                  GOOGLE
                </button>
              ) : (
                <button
                  className="bg-gray-600 cursor-not-allowed opacity-50 text-white py-2 mt-2 w-full hover:bg-gray-900"
                  type="button"
                >
                  GOOGLE
                </button>
              )
            }
            icon={true}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          {btnReducer ? (
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APPID}
              fields="name,email,picture"
              callback={responseFacebook}
              textButton="FACEBOOK"
              cssClass="bg-blue-600 text-white py-2 mt-2 w-full hover:bg-gray-900"
              render={(renderProps) => (
                <button onClick={renderProps.onClick}></button>
              )}
            />
          ) : (
            <button
              className="bg-gray-600 cursor-not-allowed opacity-50 text-white py-2 mt-2 w-full hover:bg-gray-900"
              type="button"
            >
              FACEBOOK
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
