import { ACTION_TYPES } from ".";
import { exploreDataModel } from "../../modelsType/exploreDataModel/index.types";

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

export interface HYDRATE {
  type: ACTION_TYPES.HYDRATE;
  payload: exploreDataModel[];
}

export type Actions =
  | ExploreDataRequesting
  | ExploreDataSuccess
  | ExploreDataError
  | HYDRATE;
