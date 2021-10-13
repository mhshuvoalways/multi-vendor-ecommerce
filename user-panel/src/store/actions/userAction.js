import * as Types from "../constants/UserTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const adminRegister = () => (dispatch) => {
  axios
    .post("/user/adminregister")
    .then((response) => {
      dispatch({
        type: Types.ADMIN_REGISTER_USER,
        payload: {
          user: response.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_USER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const userRegister = (user) => (dispatch) => {
  axios
    .post("/user/register", user)
    .then((response) => {
      dispatch({
        type: Types.REGISTER_USER,
        payload: {
          user: response.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_USER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const userLogin = (user, navigate) => (dispatch) => {
  axios
    .post("/user/login", user)
    .then((response) => {
      dispatch({
        type: Types.LOGIN_USER,
        payload: {
          user: response.data,
        },
      });
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const isAuthenticate = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    var decoded = jwt_decode(token);
    var dateNow = new Date();
    if (decoded.exp * 1000 < dateNow.getTime()) {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: false,
        },
      });
    } else {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: true,
        },
      });
    }
  } else {
    dispatch({
      type: Types.ISAUTHENTICATE,
      payload: {
        isAuthenticate: false,
      },
    });
  }
};
