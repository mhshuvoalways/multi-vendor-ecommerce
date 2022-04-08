import * as Types from "../constants/OrderType";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";

export const validationcheck = (value, navigate) => (dispatch) => {
  axios
    .post("/order/validationcheck", value)
    .then(() => {
      navigate("/checkout-method");
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data.firstName));
      dispatch(alertAction(err.response.data.lastName));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.phone));
      dispatch(alertAction(err.response.data.city));
      dispatch(alertAction(err.response.data.state));
      dispatch(alertAction(err.response.data.country));
      dispatch(alertAction(err.response.data.zipCode));
      dispatch(alertAction(err.response.data.streetAddress));
      dispatch(alertAction(err.response.data.message));
    });
};

export const orderProduct = (body, navigate) => (dispatch) => {
  axios
    .post("/order/place", body)
    .then((res) => {
      dispatch({
        type: Types.ORDER_PRODUCT,
        payload: res.data,
      });
      dispatch(alertAction("Thanks for order. Happy shopping!"));
      navigate("/my-account/order");
      dispatch(applyCouponAction(false));
      localStorage.removeItem("billingAddress");
      localStorage.removeItem("amount");
    })
    .catch((err) => {
      dispatch({
        type: Types.ORDER_PRODUCT_ERROR,
        payload: err.response,
      });
      dispatch(alertAction(err.response.data.firstName));
      dispatch(alertAction(err.response.data.lastName));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.phone));
      dispatch(alertAction(err.response.data.city));
      dispatch(alertAction(err.response.data.state));
      dispatch(alertAction(err.response.data.country));
      dispatch(alertAction(err.response.data.zipCode));
      dispatch(alertAction(err.response.data.streetAddress));
      dispatch(alertAction(err.response.data.message));
    });
};

export const getOderDetails = () => (dispatch) => {
  axios
    .get("/order/get")
    .then((res) => {
      dispatch({
        type: Types.GET_ORDER_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_ORDER_PRODUCT_ERROR,
        payload: err.response,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const applyCouponAction = (value) => (dispatch) => {
  dispatch({
    type: Types.APPLY_COUPON,
    payload: value,
  });
};
