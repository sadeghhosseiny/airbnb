import { all, call, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "../../constants/actionTypes";
import { services } from "../../services";

function* handleGetExploreData(action) {
  try {
    const res = yield call(services.getExploreData.getData, action.payload);
    console.log("RES ", res);
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

export default function* rootSaga() {
  yield all([getExploreDataWatcher()]);
}
