import * as Types from "../constants/EnableBtnType";

const enableBtnReducer = (state = true, action) => {
  switch (action.type) {
    case Types.ENABLE_BTN: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default enableBtnReducer;
