import * as Types from "../constants/WishListType";
import * as ClearDataTypes from "../constants/ClearDataTypes";

const init = {
  wishlist: [],
  isLoading: true,
  error: {},
};

const addCart = (state = init, action) => {
  switch (action.type) {
    case Types.WISH_ADD: {
      const temp = [...state.wishlist];
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
        wishlist: temp,
        error: {},
      };
    }
    case Types.WISH_ADD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.WISH_GET: {
      return {
        ...state,
        wishlist: action.payload,
        isLoading: false,
        error: {},
      };
    }
    case Types.WISH_GET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case Types.DELETE_ITEM_WISHLIST: {
      const temp = [...state.wishlist];
      const newTemp = temp.filter((el) => el._id !== action.payload.id);
      return {
        ...state,
        wishlist: newTemp,
        error: {},
      };
    }
    case Types.DELETE_ITEM_WISHLIST_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.DELETEALL_ITEM_WISHLIST: {
      return {
        ...state,
        wishlist: action.payload,
        error: {},
      };
    }
    case Types.DELETEALL_ITEM_WISHLIST_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        wishlist: [],
        isLoading: true,
        error: {},
      };
    }
    default:
      return state;
  }
};

export default addCart;
