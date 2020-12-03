import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  ON_LOAD_USERS,
  setLoadingUsersList,
  setSelectedUserId,
  setUsersList,
} from "./actions";

const fetchUsersList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(
        "http://localhost:5588/mocking_G/generate?library=users&category=user&amount=100"
      )
        .then((res) => res.json())
        .then((data) => resolve(data));
    }, 1000);
  });
};

function* onLoadUsers(action) {
  yield put(setLoadingUsersList(true));
  yield put(setSelectedUserId(null));
  const usersList = yield call(fetchUsersList);
  yield put(setLoadingUsersList(false));
  yield put(setUsersList(usersList));
}

export default function* rootSaga() {
  yield all([takeLatest(ON_LOAD_USERS, onLoadUsers)]);
}
