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
          error: err.response
        },
      });
    });
};

export const userRegister = (user, navigate) => (dispatch) => {
  axios
    .post("/user/register", user)
    .then((response) => {
      dispatch({
        type: Types.REGISTER_USER,
        payload: {
          user: response.data,
        },
      });
      navigate("/login");
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
      var decoded = jwt_decode(response.data.token);
      dispatch({
        type: Types.LOGIN_USER,
        payload: {
          user: decoded,
        },
      });
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response,
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

export const freshData = () => (dispatch) => {
  dispatch({
    type: Types.FRESH_USER,
  });
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  localStorage.removeItem("token");
  navigate("/login");
};
