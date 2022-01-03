import { ACTION_TYPES } from ".";
import { exploreDataModel } from "../../modelsType/exploreDataModel/index.types";
import { liveAnywhereDataModel } from "../../modelsType/liveAnywhereModel/index.types";
import { searchDataModel } from "../../modelsType/searchDataModel/index.types";

export interface ExploreDataRequesting {
  type: ACTION_TYPES.EXPLORE_DATA_REQUESTING;
  payload: exploreDataModel[];
}

export interface ExploreDataSuccess {
  type: ACTION_TYPES.EXPLORE_DATA_SUCCESS;
  payload: exploreDataModel[];
}

export interface ExploreDataError {
  type: ACTION_TYPES.EXPLORE_DATA_ERROR;
  payload: string;
}

export interface LiveAnywhereRequesting {
  type: ACTION_TYPES.LIVE_ANYWHERE_REQUESTING;
  payload: liveAnywhereDataModel[];
}

export interface LiveAnywhereSuccess {
  type: ACTION_TYPES.LIVE_ANYWHERE_SUCCESS;
  payload: liveAnywhereDataModel[];
}

export interface LiveAnywhereError {
  type: ACTION_TYPES.LIVE_ANYWHERE_ERROR;
  payload: string;
}

export interface SearchDataRequesting {
  type: ACTION_TYPES.SEARCH_DATA_REQUESTING;
  payload: searchDataModel[];
}

export interface SearchDataSuccess {
  type: ACTION_TYPES.SEARCH_DATA_SUCCESS;
  payload: searchDataModel[];
}

export interface SearchDataError {
  type: ACTION_TYPES.SEARCH_DATA_ERROR;
  payload: string;
}

export interface Mode {
  type: ACTION_TYPES.MODE;
}

export interface HYDRATE {
  type: ACTION_TYPES.HYDRATE;
  payload: {
    liveAnywhereReducer;
    exploreDataReducer;
    searchDataReducer;
  };
}

export type Actions =
  | ExploreDataRequesting
  | ExploreDataSuccess
  | ExploreDataError
  | LiveAnywhereRequesting
  | LiveAnywhereSuccess
  | LiveAnywhereError
  | SearchDataRequesting
  | SearchDataSuccess
  | SearchDataError
  | Mode
  | HYDRATE;
