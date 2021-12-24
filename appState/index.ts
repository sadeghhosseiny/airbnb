import { exploreDataModel } from "../modelsType/exploreDataModel/index.types";

export interface AppState {
  requesting: boolean;
  success: boolean;
  data: exploreDataModel[] | null;
  error: string | boolean;
}
