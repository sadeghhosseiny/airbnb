import { ACTION_TYPES } from "../../../constants/actionTypes";
import { Actions } from "../../../constants/actionTypes/actionTypes.types";
import { exploreDataModel } from "../../../modelsType/exploreDataModel/index.types";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../../appState";

const initialState: AppState = {
  requesting: false,
  success: false,
  data: null,
  error: "",
};

const exploreDataReducer = (
  state = initialState,
  action: Actions,
): AppState => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.exploreDataReducer };
    }
    case ACTION_TYPES.EXPLORE_DATA_REQUESTING: {
      return {
        requesting: true,
        data: null,
        error: "",
        success: false,
      };
    }
    case ACTION_TYPES.EXPLORE_DATA_SUCCESS: {
      return {
        success: true,
        error: "",
        requesting: false,
        data: action.payload,
      };
    }
    case ACTION_TYPES.EXPLORE_DATA_ERROR: {
      return { requesting: false, data: null, error: "errrrr", success: false };
    }
    default:
      return state;
  }
};

export default exploreDataReducer;
