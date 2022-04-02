import * as Types from "../constants/CategoryTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  categories: [],
  error: {},
};

const categoryReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case Types.GET_CATEGORY_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        categories: [],
        error: {},
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
