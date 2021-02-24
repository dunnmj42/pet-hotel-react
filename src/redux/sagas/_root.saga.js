import { all } from "redux-saga/effects";
import ownersSaga from "./owners.saga"
import petsSaga from "./pets.saga"

export default function* rootSaga() {
  yield all([
    ownersSaga(),
    petsSaga(),
  ]);
}