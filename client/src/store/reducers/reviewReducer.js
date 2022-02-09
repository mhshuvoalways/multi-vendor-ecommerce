import * as Types from "../constants/ReviewType";

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
    default:
      return state;
  }
};

export default reviewReducer;
