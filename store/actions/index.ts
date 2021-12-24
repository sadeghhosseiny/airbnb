import { ACTION_TYPES } from "../../constants/actionTypes";
import { ExploreDataRequesting } from "../../constants/actionTypes/actionTypes.types";
import { exploreDataModel } from "../../modelsType/exploreDataModel/index.types";

export const exploreDataRequesting = (
  payload: exploreDataModel[],
): ExploreDataRequesting => ({
  type: ACTION_TYPES.EXPLORE_DATA_REQUESTING,
  payload,
});
