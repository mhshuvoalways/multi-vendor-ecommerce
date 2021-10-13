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
        isAuthenticate: Object.keys(action.payload.user).length > 0,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.REGISTER_USER: {
      return {
        isAuthenticate: Object.keys(action.payload.user).length > 0,
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
    default:
      return state;
  }
};

export default userReudcer;
