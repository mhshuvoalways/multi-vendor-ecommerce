import * as Types from "../constants/SubscriberTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const contactReducer = (state = false, action) => {
  switch (action.type) {
    case Types.SEND_EMAIL: {
      return action.payload;
    }
    case Types.SEND_EMAIL_ERROR: {
      return action.payload;
    }
    case ClearDataTypes.CLEAR_DATA: {
      return false;
    }
    default:
      return state;
  }
};

export default contactReducer;
