import * as Types from "../constants/OrderType";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";

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
    })
    .catch((err) => {
      dispatch({
        type: Types.ORDER_PRODUCT_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Opps! Something is wrong. Please try again!"));
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
    });
};
