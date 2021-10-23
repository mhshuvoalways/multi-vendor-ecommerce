import * as Types from "../constants/CategoryTypes";
import axios from "../../utils/axios";

export const getCategory = () => (dispatch) => {
  axios
    .get("/category/get")
    .then((res) => {
      dispatch({
        type: Types.GET_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_CATEGORY_ERROR,
        payload: err.response,
      });
    });
};
