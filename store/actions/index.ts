import { ACTION_TYPES } from "../../constants/actionTypes";
import { ExploreDataSuccess } from "../../constants/actionTypes/actionTypes.types";

export const exploreDataRequesting = (payload: {}[]): ExploreDataSuccess => ({
  type: ACTION_TYPES.EXPLORE_DATA_SUCCESS,
  payload,
});
