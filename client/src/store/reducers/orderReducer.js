import * as Types from "../constants/OrderType";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  order: [],
  error: {},
  applyCoupon: false,
};

const orderReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ORDER_PRODUCT: {
      const temp = [...state.order, action.payload];
      return {
        ...state,
        order: temp,
      };
    }
    case Types.ORDER_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.GET_ORDER_PRODUCT: {
      return {
        ...state,
        order: action.payload,
      };
    }
    case Types.GET_ORDER_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_VENODR_ORDER_PRODUCT: {
      return {
        ...state,
        order: action.payload,
      };
    }
    case Types.GET_VENODR_ORDER_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.APPLY_COUPON: {
      return {
        ...state,
        applyCoupon: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        order: [],
        error: {},
        applyCoupon: false,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
