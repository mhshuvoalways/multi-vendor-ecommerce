import * as Types from "../constants/UserTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import alertAction from "./AlertAction";
import enableBtn from "./enableBtnAction";

export const userRegister = (user, navigate) => (dispatch) => {
  axios
    .post("/user/customerregister", user)
    .then((response) => {
      dispatch({
        type: Types.CUSTOMER_REGISTER,
        payload: {
          user: response.data,
        },
      });
      dispatch(
        alertAction(
          "Thanks for register! Please check your email and active your account."
        )
      );
      navigate("/login");
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.CUSTOMER_REGISTER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.storeName));
      dispatch(alertAction(err.response.data.recaptch));
      dispatch(alertAction(err.response.data.message));
    });
};

export const vendorRegister = (user, navigate) => (dispatch) => {
  axios
    .post("/user/vendorregister", user)
    .then((response) => {
      dispatch({
        type: Types.REGISTER_VENDOR,
        payload: {
          user: response.data,
        },
      });
      dispatch(
        alertAction(
          "Thanks for register! Please check your email and active your account."
        )
      );
      navigate("/login");
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_VENDOR_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.storeName));
      dispatch(alertAction(err.response.data.recaptch));
      dispatch(alertAction(err.response.data.message));
    });
};

export const userLogin = (user, navigate, form) => (dispatch) => {
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
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      dispatch(alertAction("Welcome to our application!"));
      navigate(form);
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.message));
    });
};

export const loginWithGoogle = (user) => (dispatch) => {
  axios
    .post("/user/google", user)
    .then((response) => {
      const decoded = jwt_decode(response.data.token);
      dispatch({
        type: Types.LOGIN_WITH_GOOGLE,
        payload: {
          user: decoded,
        },
      });
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      dispatch(alertAction(response.data.message));
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_WITH_GOOGLE_ERROR,
        payload: {
          error: err.response,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
    });
};

export const loginWithFacebook = (user) => (dispatch) => {
  axios
    .post("/user/facebook", user)
    .then((response) => {
      const decoded = jwt_decode(response.data.token);
      dispatch({
        type: Types.LOGIN_WITH_FACEBOOK,
        payload: {
          user: decoded,
        },
      });
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      dispatch(alertAction(response.data.message));
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_WITH_FACEBOOK_ERROR,
        payload: {
          error: err.response,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
    });
};

export const activeAccount = (token, navigate) => (dispatch) => {
  axios
    .post("/user/active", token)
    .then((response) => {
      dispatch({
        type: Types.ACTIVE_ACCOUNT,
        payload: response.data,
      });
      navigate("/login");
    })
    .catch((err) => {
      dispatch({
        type: Types.ACTIVE_ACCOUNT_ERROR,
        payload: err.response.data.message,
      });
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
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.FIND_MAIL_ERROR,
        payload: false,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.message));
    });
};

export const recoverPass = (value, navigate) => (dispatch) => {
  if (value.password === value.confirmPassword) {
    axios
      .post("/user/recoverpass", value)
      .then((response) => {
        const decoded = jwt_decode(response.data);
        dispatch({
          type: Types.RECOVER_PASS,
          payload: {
            user: decoded,
          },
        });
        dispatch(enableBtn(true));
        setAuthToken(response.data);
        localStorage.setItem("token", response.data);
        dispatch(alertAction("Welcome to our application!"));
        navigate("/");
      })
      .catch((err) => {
        dispatch({
          type: Types.RECOVER_PASS_ERROR,
          payload: {
            error: err.response,
          },
        });
        dispatch(enableBtn(true));
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
    setAuthToken("");
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
  axios
    .put("/user/edituser", user)
    .then((res) => {
      dispatch({
        type: Types.UPDATE_USER,
        payload: res.data,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction("Updated!"));
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_USER_ERROR,
        payload: err.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
    });
};

export const updateUserPass = (user) => (dispatch) => {
  if (user.newPassword === user.confirmPassword) {
    axios
      .put("/user/editpass", user)
      .then((res) => {
        dispatch({
          type: Types.UPDATE_MYACCOUT,
          payload: res.data,
        });
        dispatch(enableBtn(true));
        dispatch(alertAction("Updated!"));
      })
      .catch((err) => {
        dispatch({
          type: Types.UPDATE_MYACCOUT_ERROR,
          payload: err.response,
        });
        dispatch(enableBtn(true));
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

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  localStorage.removeItem("token");
  setAuthToken("");
  navigate("/login");
};
