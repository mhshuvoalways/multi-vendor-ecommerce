import * as Types from "../constants/ProductTypes";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  products: [],
  myProducts: [],
  error: {},
  isLoading: true,
  modal: false,
  proModal: false,
  proId: "",
};

const productReducer = (state = init, action) => {
  switch (action.type) {
    case Types.UPLOAD_PRODUCT: {
      const temp = [...state.myProducts, action.payload.product];
      return {
        ...state,
        myProducts: temp,
        error: {},
        isLoading: false,
        modal: false,
      };
    }
    case Types.UPLOAD_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
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
      const temp = [...state.myProducts];
      const products = temp.filter((el) => el._id !== action.payload._id);
      return {
        ...state,
        myProducts: products,
        error: {},
        isLoading: false,
      };
    }
    case Types.DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.UPDATE_PRODUCT: {
      const temp = [...state.myProducts];
      const findIndex = temp.findIndex((el) => el._id === action.payload.id);
      temp[findIndex] = action.payload.product;
      return {
        ...state,
        myProducts: temp,
        error: {},
        isLoading: false,
      };
    }
    case Types.UPDATE_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.MODAL_TOGGLE: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    case Types.MODAL_PRODUCT: {
      return {
        ...state,
        proModal: !state.proModal,
        proId: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        products: [],
        myProducts: [],
        error: {},
        isLoading: true,
        modal: false,
        proModal: false,
        proId: "",
      };
    }
    default:
      return state;
  }
};

export default productReducer;
