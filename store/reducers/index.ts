import { combineReducers } from "redux";
import exploreDataReducer from "./exploreData";
import liveAnywhereReducer from "./liveAnywhere";

const reducers = combineReducers({
  exploreDataReducer,
  liveAnywhereReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
