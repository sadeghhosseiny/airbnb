import { exploreDataModel } from "../modelsType/exploreDataModel/index.types";
import { liveAnywhereDataModel } from "../modelsType/liveAnywhereModel/index.types";
import { searchDataModel } from "../modelsType/searchDataModel/index.types";

export interface ExploreState {
  requesting: boolean;
  success: boolean;
  data: exploreDataModel[] | null;
  error: string | boolean;
}

export interface modeState {
  mode: string;
}

export interface LiveAnywherState {
  requesting: boolean;
  success: boolean;
  data: liveAnywhereDataModel[] | null;
  error: string | boolean;
}

export interface SearchState {
  requesting: boolean;
  success: boolean;
  data: searchDataModel[] | null;
  error: string | boolean;
}
