import * as Types from "../constants/InCartType";
import axios from "../../utils/axios";

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
    })
    .catch((err) => {
      dispatch({
        type: Types.CART_ADD_ERROR,
        payload: err.response,
      });
    });
};

export const getCartItem = (userId) => (dispatch) => {
  axios
    .get("/cart/get/" + userId)
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
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_ITEM_ERROR,
        payload: err.response,
      });
    });
};

export const freshCart = () => (dispatch) => {
  dispatch({
    type: Types.FRESH_CART,
  });
};
