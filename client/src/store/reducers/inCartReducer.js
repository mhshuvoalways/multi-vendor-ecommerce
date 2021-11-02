import * as Types from "../constants/InCartType";

const init = {
  cart: [],
  isLoading: true,
  error: {},
  modal: false,
  id: "",
};

const addCart = (state = init, action) => {
  switch (action.type) {
    case Types.CART_ADD: {
      const temp = [...state.cart];
      if (temp.length) {
        const findIndex = temp.findIndex(
          (el) => el.productId === action.payload.id
        );
        if (findIndex === -1) {
          temp.push(action.payload.cartItem);
        } else {
          temp[findIndex] = action.payload.cartItem;
        }
      } else {
        temp.push(action.payload.cartItem);
      }
      return {
        ...state,
        cart: temp,
        error: {},
      };
    }
    case Types.CART_ADD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.CART_GET: {
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        error: {},
      };
    }
    case Types.CART_GET_ERROR: {
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    }
    case Types.INCREMENT: {
      const temp = [...state.cart];
      const findIndex = temp.findIndex((el) => el._id === action.payload.id);
      temp[findIndex] = action.payload.cartItem;
      return {
        ...state,
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
        ...state,
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
        ...state,
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
    case Types.DELETEALL_ITEM: {
      return {
        ...state,
        cart: action.payload,
        error: {},
      };
    }
    case Types.DELETEALL_ITEM_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.UPDATE_ITEM: {
      const temp = [...state.cart];
      const findIndex = temp.findIndex(
        (el) => el.productId === action.payload.id
      );
      temp[findIndex] = action.payload.cartItem;
      return {
        ...state,
        cart: temp,
        modal: false,
        error: {},
      };
    }
    case Types.UPDATE_ITEM_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.MODAL_HANDLER: {
      return {
        ...state,
        modal: !state.modal,
        id: action.payload,
      };
    }
    case Types.FRESH_CART: {
      return {
        cart: [],
        isLoading: false,
        error: {},
        modal: false,
        id: "",
      };
    }
    default:
      return state;
  }
};

export default addCart;
