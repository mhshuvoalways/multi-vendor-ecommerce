import * as Types from "../constants/InCartType";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";

export const addCart = (id, body) => (dispatch) => {
  axios
    .post("/cart/add/" + id, body)
    .then((res) => {
      dispatch({
        type: Types.CART_ADD,
        payload: {
          id,
          cartItem: res.data,
        },
      });
      dispatch(alertAction("Successfully add in cart"));
    })
    .catch((err) => {
      dispatch({
        type: Types.CART_ADD_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const getCartItem = () => (dispatch) => {
  axios
    .get("/cart/get")
    .then((res) => {
      dispatch({
        type: Types.CART_GET,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.CART_GET_ERROR,
        payload: err.response,
      });
    });
};

export const increment = (id) => (dispatch) => {
  axios
    .put("/cart/increment/" + id)
    .then((res) => {
      dispatch({
        type: Types.INCREMENT,
        payload: {
          id,
          cartItem: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.INCREMENT_ERROR,
        payload: err.response,
      });
    });
};

export const decrement = (id) => (dispatch) => {
  axios
    .put("/cart/decrement/" + id)
    .then((res) => {
      dispatch({
        type: Types.DECREMENT,
        payload: {
          id,
          cartItem: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.DECREMENT_ERROR,
        payload: err.response,
      });
    });
};

export const deleteCartItem = (id) => (dispatch) => {
  axios
    .delete("/cart/delete/" + id)
    .then((res) => {
      dispatch({
        type: Types.DELETE_ITEM,
        payload: {
          id,
          cartItem: res.data,
        },
      });
      dispatch(alertAction("Successfully remove from cart"));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_ITEM_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const deleteAllCartItem = () => (dispatch) => {
  axios
    .delete("/cart/deleteall")
    .then((res) => {
      dispatch({
        type: Types.DELETEALL_ITEM,
        payload: [],
      });
      dispatch(alertAction("Successfully remove all items from cart"));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETEALL_ITEM_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const updateCart = (id, quantity) => (dispatch) => {
  axios
    .put("/cart/edit/" + id, quantity)
    .then((res) => {
      dispatch({
        type: Types.UPDATE_ITEM,
        payload: {
          id,
          cartItem: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_ITEM_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const modalHandler = (id) => (dispatch) => {
  dispatch({
    type: Types.MODAL_HANDLER,
    payload: id,
  });
};

export const freshCart = () => (dispatch) => {
  dispatch({
    type: Types.FRESH_CART,
  });
};
