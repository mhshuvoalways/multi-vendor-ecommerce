import * as Types from "../constants/VendorTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  vendor: {},
  allvendor: [],
  error: {},
  isLoading: true,
};

const vendorReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_VENDOR: {
      return {
        ...state,
        vendor: action.payload,
        isLoading: false,
      };
    }
    case Types.GET_VENDOR_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case Types.GET_MY_VENDOR: {
      return {
        ...state,
        vendor: action.payload,
        isLoading: false,
      };
    }
    case Types.GET_MY_VENDOR_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case Types.GET_ALL_VENDOR: {
      return {
        ...state,
        allvendor: action.payload,
        isLoading: false,
      };
    }
    case Types.GET_ALL_VENDOR_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case Types.UPDATE_VENDOR: {
      return {
        ...state,
        vendor: action.payload,
        isLoading: false,
      };
    }
    case Types.UPDATE_VENDOR_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case Types.FOLLOW_VENDOR: {
      return {
        ...state,
        vendor: action.payload,
        isLoading: false,
      };
    }
    case Types.FOLLOW_VENDOR_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case ClearDataTypes.CLEAR_DATA: {
      return {
        vendor: {},
        allvendor: [],
        error: {},
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default vendorReducer;
