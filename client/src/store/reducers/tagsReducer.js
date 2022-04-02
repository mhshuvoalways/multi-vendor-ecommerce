import * as Types from "../constants/TagTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  tags: [],
  error: {},
};

const productReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_TAGS: {
      return {
        ...state,
        tags: action.payload,
      };
    }
    case Types.GET_TAGS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        tags: [],
        error: {},
      };
    }
    default:
      return state;
  }
};

export default productReducer;
