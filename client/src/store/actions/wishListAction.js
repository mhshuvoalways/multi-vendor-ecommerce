import * as Types from "../constants/WishListType";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";

export const addWishList = (id) => (dispatch) => {
  axios
    .post("/wishlist/add/" + id)
    .then((res) => {
      dispatch({
        type: Types.WISH_ADD,
        payload: {
          id,
          cartItem: res.data,
        },
      });
      dispatch(alertAction("Successfully add in wishlist"));
    })
    .catch((err) => {
      dispatch({
        type: Types.WISH_ADD_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const getWishItem = () => (dispatch) => {
  axios
    .get("/wishlist/get")
    .then((res) => {
      dispatch({
        type: Types.WISH_GET,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.WISH_GET_ERROR,
        payload: err.response,
      });
    });
};

export const deleteWishItem = (id) => (dispatch) => {
  axios
    .delete("/wishlist/delete/" + id)
    .then((res) => {
      dispatch({
        type: Types.DELETE_ITEM,
        payload: {
          id,
          cartItem: res.data,
        },
      });
      dispatch(alertAction("Successfully remove from wishlist"));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_ITEM_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const deleteAllWishItem = () => (dispatch) => {
  axios
    .delete("/wishlist/deleteall")
    .then((res) => {
      dispatch({
        type: Types.DELETEALL_ITEM,
        payload: [],
      });
      dispatch(alertAction("Successfully remove all items from wishlist"));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETEALL_ITEM_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};

export const freshWish = () => (dispatch) => {
  dispatch({
    type: Types.FRESH_WISHLIST,
  });
};
