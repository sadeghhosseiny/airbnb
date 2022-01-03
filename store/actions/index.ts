import { ACTION_TYPES } from "../../constants/actionTypes";
import {
  ExploreDataRequesting,
  LiveAnywhereRequesting,
  Mode,
  SearchDataRequesting,
} from "../../constants/actionTypes/actionTypes.types";
import { exploreDataModel } from "../../modelsType/exploreDataModel/index.types";
import { liveAnywhereDataModel } from "../../modelsType/liveAnywhereModel/index.types";
import { searchDataModel } from "../../modelsType/searchDataModel/index.types";

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

export const searchDataRequesting = (
  payload: searchDataModel[],
): SearchDataRequesting => ({
  type: ACTION_TYPES.SEARCH_DATA_REQUESTING,
  payload,
});

export const changeMode = (): Mode => ({
  type: ACTION_TYPES.MODE,
});
