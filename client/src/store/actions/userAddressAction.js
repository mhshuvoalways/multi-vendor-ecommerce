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
      dispatch(alertAction("Successfully updated"));
    })
    .catch((err) => {
      dispatch({
        type: Types.ADD_ADDRESS_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
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
