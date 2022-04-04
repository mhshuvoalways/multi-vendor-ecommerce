import * as Types from "../constants/CategoryTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  categories: [],
  error: {},
  isLoading: true,
};

const categoryReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    }
    case Types.GET_CATEGORY_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        categories: [],
        error: {},
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
