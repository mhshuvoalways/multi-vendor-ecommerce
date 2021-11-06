import * as Types from "../constants/AlertType";

const alertAction = (msg) => (dispatch) => {
  dispatch({
    type: Types.ALERT_TYPE,
    payload: {
      msg,
    },
  });
  setTimeout(() => {
    dispatch({
      type: Types.CLEAR_ALERT_TYPE,
    });
  }, 5000)
};

export default alertAction;
