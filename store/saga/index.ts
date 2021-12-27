import { all, call, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "../../constants/actionTypes";
import { services } from "../../services";

function* handleGetExploreData(action) {
  try {
    const res = yield call(
      services.getHomePageData.getExploreData,
      action.payload,
    );
    yield put({
      type: ACTION_TYPES.EXPLORE_DATA_SUCCESS,
      payload: res,
    });
  } catch (err) {
    console.log("THIS IS ERROR ", err.message);
  }
}

function* getExploreDataWatcher() {
  yield takeLatest(ACTION_TYPES.EXPLORE_DATA_REQUESTING, handleGetExploreData);
}

///////////////////////////////////////////////////////

function* handleGetLiveAnywhereData(action) {
  try {
    const res = yield call(
      services.getHomePageData.getLiveAnywhereData,
      action.payload,
    );
    yield put({
      type: ACTION_TYPES.LIVE_ANYWHERE_SUCCESS,
      payload: res,
    });
  } catch (err) {
    console.log("this is err2", err.message);
  }
}

function* getLiveAnywhereDataWatcher() {
  yield takeLatest(
    ACTION_TYPES.LIVE_ANYWHERE_REQUESTING,
    handleGetLiveAnywhereData,
  );
}

///////////////////////////////////////////////////////

function* handleGetSearchData(action) {
  try {
    const res = yield call(
      services.getHomePageData.getSearchData,
      action.payload,
    );
    yield put({
      type: ACTION_TYPES.SEARCH_DATA_SUCCESS,
      payload: res,
    });
  } catch (err) {
    console.log("this is err3", err.message);
  }
}

function* getSearchDataWatcher() {
  yield takeLatest(ACTION_TYPES.SEARCH_DATA_REQUESTING, handleGetSearchData);
}

export default function* rootSaga() {
  yield all([
    getExploreDataWatcher(),
    getLiveAnywhereDataWatcher(),
    getSearchDataWatcher(),
  ]);
}
