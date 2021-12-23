import { ACTION_TYPES } from "../../../constants/actionTypes";
import { Actions } from "../../../constants/actionTypes/actionTypes.types";
import { exploreDataModel } from "../../../modelsType/exploreDataModel";

type initTypes = {
  requesting: boolean;
  data: exploreDataModel[];
  error: boolean;
};

const initialState = {
  requesting: false,
  data: [],
  error: false,
};

const exploreDataReducer = (
  state: initTypes = initialState,
  action: Actions,
) => {
  switch (action.type) {
    case ACTION_TYPES.EXPLORE_DATA_REQUESTING: {
      return {
        requesting: true,
        data: null,
        error: false,
      };
    }
    case ACTION_TYPES.EXPLORE_DATA_SUCCESS: {
      return {
        requesting: false,
        data: action.payload,
        error: false,
      };
    }
    case ACTION_TYPES.EXPLORE_DATA_ERROR: {
      return { requesting: false, data: null, error: true };
    }
    default:
      return state;
  }
};

export default exploreDataReducer;
