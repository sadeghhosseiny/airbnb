import { ACTION_TYPES } from "../../../constants/actionTypes";
import { Actions } from "../../../constants/actionTypes/actionTypes.types";
import { HYDRATE } from "next-redux-wrapper";
import { SearchState } from "../../../appState";

const initialState: SearchState = {
  requesting: false,
  success: false,
  data: null,
  error: "",
};

const searchDataReducer = (
  state = initialState,
  action: Actions,
): SearchState => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.searchDataReducer };
    }
    case ACTION_TYPES.SEARCH_DATA_REQUESTING: {
      return {
        requesting: true,
        data: null,
        error: "",
        success: false,
      };
    }
    case ACTION_TYPES.SEARCH_DATA_SUCCESS: {
      return {
        success: true,
        error: "",
        requesting: false,
        data: action.payload,
      };
    }
    case ACTION_TYPES.SEARCH_DATA_ERROR: {
      return { requesting: false, data: null, error: "errrrr", success: false };
    }
    default:
      return state;
  }
};

export default searchDataReducer;
