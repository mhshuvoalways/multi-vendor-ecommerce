import * as Types from "../constants/InCartType";

const init = {
  cart: [],
  error: {},
};

const addCart = (state = init, action) => {
  switch (action.type) {
    case Types.CART_ADD: {
      const temp = [...state.cart, action.payload];
      return {
        cart: temp,
        error: {},
      };
    }
    case Types.CART_ADD_ERROR: {
      return {
        ...state,
        error: action.payload.data,
      };
    }
    case Types.CART_GET: {
      console.log(action.payload);

      return {
        cart: action.payload,
        error: {},
      };
    }
    case Types.CART_GET_ERROR: {
      return {
        ...state,
        error: action.payload.data,
      };
    }
    case Types.INCREMENT: {
      const temp = [...state.cart];
      const findIndex = temp.findIndex((el) => el._id === action.payload.id);
      temp[findIndex] = action.payload.cartItem;
      return {
        cart: temp,
        error: {},
      };
    }
    case Types.INCREMENT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.DECREMENT: {
      const temp = [...state.cart];
      const findIndex = temp.findIndex((el) => el._id === action.payload.id);
      temp[findIndex] = action.payload.cartItem;
      return {
        cart: temp,
        error: {},
      };
    }
    case Types.DECREMENT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.DELETE_ITEM: {
      const temp = [...state.cart];
      const newTemp = temp.filter((el) => el._id !== action.payload.id);
      return {
        cart: newTemp,
        error: {},
      };
    }
    case Types.DELETE_ITEM_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default addCart;
