import * as Types from "../constants/CategoryTypes";

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
    default:
      return state;
  }
};

export default categoryReducer;
