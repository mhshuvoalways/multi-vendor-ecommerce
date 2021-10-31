import * as Types from "../constants/UserTypes";

const init = {
  isAuthenticate: false,
  user: {},
  error: null,
};

const userReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.ADMIN_REGISTER_USER: {
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.ADMIN_REGISTER_USER_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case Types.REGISTER_USER: {
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.REGISTER_USER_ERROR: {
      return {
        isAuthenticate: false,
        user: {},
        error: action.payload.error,
      };
    }

    case Types.LOGIN_USER: {
      return {
        isAuthenticate: Object.keys(action.payload.user).length > 0,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.ISAUTHENTICATE: {
      return {
        ...state,
        isAuthenticate: action.payload.isAuthenticate,
      };
    }
    case Types.LOGOUT_USER: {
      return {
        isAuthenticate: action.payload.isAuthenticate,
        user: {},
        error: null,
      };
    }
    case Types.GET_MYACCOUT: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case Types.GET_MYACCOUT_ERROR: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case Types.FRESH_USER: {
      return {
        isAuthenticate: false,
        user: {},
        error: null,
      };
    }
    default:
      return state;
  }
};

export default userReudcer;
