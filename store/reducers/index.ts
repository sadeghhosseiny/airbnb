import { combineReducers } from "redux";
import exploreDataReducer from "./exploreData";
import liveAnywhereReducer from "./liveAnywhere";
import searchDataReducer from "./searchData";

const reducers = combineReducers({
  exploreDataReducer,
  liveAnywhereReducer,
  searchDataReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
