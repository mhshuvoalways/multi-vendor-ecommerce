import * as Types from "../constants/VendorTypes";
import axios from "../../utils/axios";
import enableBtn from "./enableBtnAction";
import alertAction from "./AlertAction";

export const getMyVendor = () => (dispatch) => {
  axios
    .get("/vendor/myvendor")
    .then((res) => {
      dispatch({
        type: Types.GET_MY_VENDOR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MY_VENDOR_ERROR,
        payload: err.response,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const getVendor = (authorId) => (dispatch) => {
  axios
    .get("/vendor/get/" + authorId)
    .then((res) => {
      dispatch({
        type: Types.GET_VENDOR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_VENDOR_ERROR,
        payload: err.response,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const updateVendor = (image) => (dispatch) => {
  axios
    .post("/vendor/add", image)
    .then((res) => {
      dispatch({
        type: Types.UPDATE_VENDOR,
        payload: res.data.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(res.data.message));
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_VENDOR_ERROR,
        payload: err.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
      dispatch(alertAction(err.response.data.storeName));
    });
};

export const followVendor = (vendorId) => (dispatch) => {
  axios
    .get("/vendor/follow/" + vendorId)
    .then((res) => {
      dispatch({
        type: Types.FOLLOW_VENDOR,
        payload: res.data,
      });
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.FOLLOW_VENDOR_ERROR,
        payload: err.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
    });
};
