import * as Types from "../constants/ContactTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const contactReducer = (state = false, action) => {
  switch (action.type) {
    case Types.SEND_MESSAGE: {
      return action.payload;
    }
    case Types.SEND_MESSAGE_ERROR: {
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
