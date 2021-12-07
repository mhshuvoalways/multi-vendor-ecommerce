import * as Types from "../constants/ProductTypes";

const init = {
  products: [],
  myProducts: [],
  error: {},
  isLoading: true,
  modal: false,
  performSearch: [],
};

const productReducer = (state = init, action) => {
  switch (action.type) {
    case Types.UPLOAD_PRODUCT: {
      const temp = [...state.products, action.payload.product];
      return {
        products: temp,
        error: {},
        isLoading: false,
        modal: false,
      };
    }
    case Types.UPLOAD_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: true,
      };
    }
    case Types.GET_PRODUCT: {
      return {
        ...state,
        products: action.payload.product,
        isLoading: false,
      };
    }
    case Types.GET_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: true,
      };
    }
    case Types.FILTER_PRODUCT: {
      return {
        ...state,
        products: action.payload.product,
        isLoading: false,
      };
    }
    case Types.FILTER_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: true,
      };
    }
    case Types.GET_MY_PRODUCT: {
      return {
        ...state,
        myProducts: action.payload.product,
        isLoading: false,
      };
    }
    case Types.GET_MY_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: true,
      };
    }
    case Types.DELETE_PRODUCT: {
      const temp = [...state.products];
      const products = temp.filter((el) => el._id !== action.payload._id);
      return {
        products,
        error: {},
        isLoading: false,
      };
    }
    case Types.DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case Types.UPDATE_PRODUCT: {
      const temp = [...state.products];
      const findIndex = temp.findIndex((el) => el._id === action.payload.id);
      temp[findIndex] = action.payload.product;
      return {
        products: temp,
        error: {},
        isLoading: false,
      };
    }
    case Types.UPDATE_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case Types.MODAL_TOGGLE: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    case Types.FRESH_PRODUCT: {
      return {
        products: [],
        myProducts: [],
        error: {},
        isLoading: true,
        modal: false,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
