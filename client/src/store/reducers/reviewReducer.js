import * as Types from "../constants/ReviewType";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  reviews: [],
  error: {},
};

const reviewReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ADD_REVIEW: {
      return {
        reviews: action.payload,
        error: {},
      };
    }
    case Types.ADD_REVIEW_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.GET_REVIEW: {
      return {
        reviews: action.payload,
        error: {},
      };
    }
    case Types.GET_REVIEW_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        reviews: [],
        error: {},
      };
    }
    default:
      return state;
  }
};

export default reviewReducer;
