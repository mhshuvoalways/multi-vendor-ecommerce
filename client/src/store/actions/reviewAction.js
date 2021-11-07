import * as Types from "../constants/ReviewType";
import axios from "../../utils/axios";

export const addReview = (body, id) => (dispatch) => {
  axios
    .post("/review/add/" + id, body)
    .then((res) => {
      dispatch({
        type: Types.ADD_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.ADD_REVIEW_ERROR,
        payload: err.response,
      });
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
    });
};
