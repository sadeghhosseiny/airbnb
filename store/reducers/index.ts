import { combineReducers } from "redux";
import exploreDataReducer from "./exploreData";
import liveAnywhereReducer from "./liveAnywhere";
import searchDataReducer from "./searchData";
import modeReducer from "./mode";

const reducers = combineReducers({
  exploreDataReducer,
  liveAnywhereReducer,
  searchDataReducer,
  modeReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
