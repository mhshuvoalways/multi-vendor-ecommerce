import * as Types from "../constants/ReviewType";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  reviews: [],
  allreviews: [],
  error: {},
  isLoading: true,
};

const reviewReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ADD_REVIEW: {
      return {
        ...state,
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
        ...state,
        reviews: action.payload,
        error: {},
        isLoading: false,
      };
    }
    case Types.GET_REVIEW_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case Types.GET_ALL_REVIEW: {
      return {
        ...state,
        reviews: action.payload,
        error: {},
        isLoading: false,
      };
    }
    case Types.GET_ALL_REVIEW_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case Types.GET_ALL_REVIEWS: {
      return {
        ...state,
        allreviews: action.payload,
        error: {},
        isLoading: false,
      };
    }
    case Types.GET_ALL_REVIEWS_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case ClearDataTypes.CLEAR_DATA: {
      return {
        reviews: [],
        allreviews: [],
        error: {},
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default reviewReducer;
