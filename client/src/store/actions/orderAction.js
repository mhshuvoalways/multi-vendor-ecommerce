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
      dispatch(alertAction("Successfully ordered"));
      navigate("/shop");
    })
    .catch((err) => {
      dispatch({
        type: Types.ORDER_PRODUCT_ERROR,
        payload: err.response,
      });
      dispatch(alertAction("Something is wrong"));
    });
};
