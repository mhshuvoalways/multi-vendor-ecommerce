import * as Types from "../constants/UserTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import alertAction from "./AlertAction";

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
          error: err.response,
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
      dispatch(alertAction("Thanks for register!"));
      navigate("/login");
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_USER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.storeName));
      dispatch(alertAction(err.response.data.recaptch));
      dispatch(alertAction(err.response.data.message));
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
      dispatch(alertAction("Welcome back!"));
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response,
        },
      });
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.message));
    });
};

export const findMail = (email, navigate) => (dispatch) => {
  axios
    .post("/user/findmail", email)
    .then(() => {
      dispatch({
        type: Types.FIND_MAIL,
        payload: true,
      });
      navigate("/checkmsg");
    })
    .catch((err) => {
      dispatch({
        type: Types.FIND_MAIL_ERROR,
        payload: false,
      });
      dispatch(alertAction(err.response.data));
    });
};

export const recoverPass = (value, navigate) => (dispatch) => {
  if (value.password === value.confirmPassword) {
    axios
      .post("/user/recoverpass", value)
      .then(() => {
        dispatch({
          type: Types.RECOVER_PASS,
          payload: true,
        });
        navigate("/");
      })
      .catch((err) => {
        dispatch({
          type: Types.RECOVER_PASS_ERROR,
          payload: false,
        });
        dispatch(alertAction(err.response.data.password));
        dispatch(alertAction(err.response.data.message));
      });
  } else {
    dispatch(alertAction("New password and confirm password don't match"));
  }
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

export const updateUser = (user) => (dispatch) => {
  if (user.newPassword === user.confirmPassword) {
    axios
      .put("/user/edit", user)
      .then((res) => {
        dispatch({
          type: Types.UPDATE_MYACCOUT,
          payload: res.data,
        });
        dispatch(alertAction("Updated!"));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({
          type: Types.UPDATE_MYACCOUT_ERROR,
          payload: err.response,
        });
        dispatch(alertAction(err.response.data.currentPassword));
        dispatch(alertAction(err.response.data.newPassword));
        dispatch(alertAction(err.response.data.message));
      });
  } else {
    dispatch(alertAction("New password and confirm password don't match"));
  }
};

export const avatarAdd = (avatar) => (dispatch) => {
  axios
    .put("/user/avatar", avatar)
    .then((res) => {
      dispatch({
        type: Types.AVATAR_UPDATE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.AVATAR_UPDATE_ERROR,
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
