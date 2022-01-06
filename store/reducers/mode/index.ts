import { ACTION_TYPES } from "../../../constants/actionTypes";
import { modeState } from "../../../appState";
import { Actions } from "../../../constants/actionTypes/actionTypes.types";

const initialState: modeState = {
  mode: "light",
};

const modeReducer = (state = initialState, action: Actions): modeState => {
  switch (action.type) {
    case ACTION_TYPES.MODE: {
      return {
        mode: state.mode == "light" ? "dark" : "light",
      };
    }
    default:
      return state;
  }
};

export default modeReducer;
