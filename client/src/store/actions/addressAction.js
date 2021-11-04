import * as Types from "../constants/AddressType";
import axios from "../../utils/axios";

export const addAddress = (body) => (dispatch) => {
  axios
    .post("/address/create", body)
    .then((res) => {
      dispatch({
        type: Types.ADD_ADDRESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.ADD_ADDRESS_ERROR,
        payload: err.response,
      });
    });
};

export const getAddress = () => (dispatch) => {
    axios
      .post("/address/get")
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

export const editAddress = (body) => (dispatch) => {
    axios
      .post("/address/edit", body)
      .then((res) => {
        dispatch({
          type: Types.EDIT_ADDRESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.EDIT_ADDRESS_ERROR,
          payload: err.response,
        });
      });
  };