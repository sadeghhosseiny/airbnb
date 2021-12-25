import { ACTION_TYPES } from "../../../constants/actionTypes";
import { Actions } from "../../../constants/actionTypes/actionTypes.types";
import { HYDRATE } from "next-redux-wrapper";
import { LiveAnywherState } from "../../../appState";

const initialState: LiveAnywherState = {
  requesting: false,
  success: false,
  data: null,
  error: "",
};

const liveAnywhereReducer = (
  state = initialState,
  action: Actions,
): LiveAnywherState => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.liveAnywhereReducer };
    }
    case ACTION_TYPES.LIVE_ANYWHERE_REQUESTING: {
      return {
        requesting: true,
        data: null,
        error: "",
        success: false,
      };
    }
    case ACTION_TYPES.LIVE_ANYWHERE_SUCCESS: {
      return {
        success: true,
        error: "",
        requesting: false,
        data: action.payload,
      };
    }
    case ACTION_TYPES.LIVE_ANYWHERE_ERROR: {
      return { requesting: false, data: null, error: "errrrr", success: false };
    }
    default:
      return state;
  }
};

export default liveAnywhereReducer;
