import * as Types from "../constants/AlertType";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.ALERT_TYPE: {
      return action.payload;
    }
    case Types.CLEAR_ALERT_TYPE: {
      return {};
    }
    default:
      return state;
  }
};

export default alertReducer;
