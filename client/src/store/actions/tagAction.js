import * as Types from "../constants/TagTypes";
import axios from "../../utils/axios";
import AlertAction from "./AlertAction";

export const getTags = () => (dispatch) => {
  axios
    .get("/tags/get")
    .then((res) => {
      dispatch({
        type: Types.GET_TAGS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_TAGS_ERROR,
        payload: err.response,
      });
      dispatch(AlertAction(err.response.data.message));
    });
};
