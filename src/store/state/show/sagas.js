import { all, put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";
import * as api from "./api";

export function* searchSaga(action) {}

export function* root() {
  yield all([takeLatest(actions.types.SEARCH_START, searchSaga)]);
}
