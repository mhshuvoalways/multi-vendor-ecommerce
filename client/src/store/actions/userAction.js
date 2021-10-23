import * as Types from "../constants/UserTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
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
        type: Types.ADMIN_REGISTER_USER_ERROR,
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

export const userLogin = (user) => (dispatch) => {
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
    setAuthToken(token);
    var decoded = jwt_decode(token);
    var dateNow = new Date();
    if (decoded.exp * 1000 < dateNow.getTime()) {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: false,
        },
      });
      localStorage.removeItem("token");
    } else {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: true,
        },
      });
      dispatch(getMyAccount());
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

export const getMyAccount = () => (dispatch) => {
  axios
    .get("/user/getmyaccount")
    .then((res) => {
      dispatch({
        type: Types.GET_MYACCOUT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MYACCOUT,
        payload: err.response,
      });
    });
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  setAuthToken(null);
  localStorage.removeItem("token");
  navigate("/login");
};
