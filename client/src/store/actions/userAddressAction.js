import * as Types from "../constants/UserAddressType";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";

export const addAddress = (body) => (dispatch) => {
  axios
    .post("/address/create", body)
    .then((res) => {
      dispatch({
        type: Types.ADD_ADDRESS,
        payload: res.data,
      });
      dispatch(alertAction("Updated!"));
    })
    .catch((err) => {
      dispatch({
        type: Types.ADD_ADDRESS_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Opps! Something is wrong. Please try again!"));
    });
};

export const getAddress = () => (dispatch) => {
    axios
      .get("/address/get")
      .then((res) => {
        dispatch({
          type: Types.GET_ADDRESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.GET_ADDRESS_ERROR,
          payload: err.response,
        });
      });
  };
