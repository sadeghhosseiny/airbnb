import { combineReducers } from "redux";
import exploreDataReducer from "./exploreData";

const reducers = combineReducers({
  exploreDataReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
