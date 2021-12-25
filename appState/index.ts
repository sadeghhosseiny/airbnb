import { exploreDataModel } from "../modelsType/exploreDataModel/index.types";
import { liveAnywhereDataModel } from "../modelsType/liveAnywhereModel/index.types";

export interface ExploreState {
  requesting: boolean;
  success: boolean;
  data: exploreDataModel[] | null;
  error: string | boolean;
}

export interface LiveAnywherState {
  requesting: boolean;
  success: boolean;
  data: liveAnywhereDataModel[] | null;
  error: string | boolean;
}
