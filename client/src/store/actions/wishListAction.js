import * as Types from "../constants/WishListType";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";
import enableBtn from "./enableBtnAction";

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
      dispatch(enableBtn(true));
      dispatch(alertAction("Item added in wishlist"));
    })
    .catch((err) => {
      dispatch({
        type: Types.WISH_ADD_ERROR,
        payload: err.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
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
      dispatch(alertAction(err.response.data.message));
    });
};

export const deleteWishItem = (id) => (dispatch) => {
  axios
    .delete("/wishlist/delete/" + id)
    .then((res) => {
      dispatch({
        type: Types.DELETE_ITEM_WISHLIST,
        payload: {
          id,
          cartItem: res.data,
        },
      });
      dispatch(alertAction("Remove item from wishlist"));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_ITEM_WISHLIST_ERROR,
        payload: err.response,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const deleteAllWishItem = () => (dispatch) => {
  axios
    .delete("/wishlist/deleteall")
    .then(() => {
      dispatch({
        type: Types.DELETEALL_ITEM_WISHLIST,
        payload: [],
      });
      dispatch(alertAction("Remove all items from wishlist"));
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETEALL_ITEM_WISHLIST_ERROR,
        payload: err.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
    });
};
