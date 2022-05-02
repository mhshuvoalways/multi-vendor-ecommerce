import * as Types from "../constants/ContactTypes";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";
import enableBtn from "./enableBtnAction";

export const sendMessage = (value) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/contact/send", value)
    .then((response) => {
      dispatch({
        type: Types.SEND_MESSAGE,
        payload: true,
      });
      dispatch(alertAction(response.data.message));
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.SEND_MESSAGE_ERROR,
        payload: false,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.firstName));
      dispatch(alertAction(err.response.data.lastName));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.message));
    });
};

export default enableBtn;
