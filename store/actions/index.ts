import { ACTION_TYPES } from "../../constants/actionTypes";
import {
  ExploreDataRequesting,
  LiveAnywhereRequesting,
} from "../../constants/actionTypes/actionTypes.types";
import { exploreDataModel } from "../../modelsType/exploreDataModel/index.types";
import { liveAnywhereDataModel } from "../../modelsType/liveAnywhereModel/index.types";

export const exploreDataRequesting = (
  payload: exploreDataModel[],
): ExploreDataRequesting => ({
  type: ACTION_TYPES.EXPLORE_DATA_REQUESTING,
  payload,
});

export const liveAnywhereDataRequesting = (
  payload: liveAnywhereDataModel[],
): LiveAnywhereRequesting => ({
  type: ACTION_TYPES.LIVE_ANYWHERE_REQUESTING,
  payload,
});
