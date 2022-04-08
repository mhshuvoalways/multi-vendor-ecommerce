import * as Types from "../constants/ReviewType";
import axios from "../../utils/axios";
import enableBtn from "./enableBtnAction";
import { getProducts } from "./productAction";
import AlertAction from "./AlertAction";

export const addReview = (body, id) => (dispatch) => {
  axios
    .post("/review/add/" + id, body)
    .then((res) => {
      dispatch({
        type: Types.ADD_REVIEW,
        payload: res.data,
      });
      dispatch(getProducts());
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.ADD_REVIEW_ERROR,
        payload: err.response,
      });
      dispatch(AlertAction(err.response.data.message));
      dispatch(enableBtn(true));
    });
};

export const getReview = (id) => (dispatch) => {
  axios
    .get("/review/get/" + id)
    .then((res) => {
      dispatch({
        type: Types.GET_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_REVIEW_ERROR,
        payload: err.response,
      });
      dispatch(AlertAction(err.response.data.message));
    });
};

export const getAllReview = (storeUsername) => (dispatch) => {
  axios
    .get("/review/allreviews/" + storeUsername)
    .then((res) => {
      dispatch({
        type: Types.GET_ALL_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_ALL_REVIEW_ERROR,
        payload: err.response,
      });
      dispatch(AlertAction(err.response.data.message));
    });
};
