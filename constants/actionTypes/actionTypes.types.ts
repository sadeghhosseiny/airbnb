import { ACTION_TYPES } from ".";

export interface ExploreDataRequesting {
  type: ACTION_TYPES.EXPLORE_DATA_REQUESTING;
}

export interface ExploreDataSuccess {
  type: ACTION_TYPES.EXPLORE_DATA_SUCCESS;
  payload: {}[];
}

export interface ExploreDataError {
  type: ACTION_TYPES.EXPLORE_DATA_ERROR;
  payload: string;
}

export type Actions =
  | ExploreDataRequesting
  | ExploreDataSuccess
  | ExploreDataError;
