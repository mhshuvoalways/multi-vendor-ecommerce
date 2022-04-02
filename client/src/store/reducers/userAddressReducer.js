import * as Types from "../constants/UserAddressType";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  address: null,
  error: {},
};

const addressReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ADD_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case Types.ADD_ADDRESS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.GET_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case Types.GET_ADDRESS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        address: null,
        error: {},
      };
    }
    default:
      return state;
  }
};

export default addressReducer;
