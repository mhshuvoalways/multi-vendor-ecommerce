import * as Types from "../constants/AddressType";

const init = {
  address: {},
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
    default:
      return state;
  }
};

export default addressReducer;
