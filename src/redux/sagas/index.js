import { put, takeLatest, all } from "redux-saga/effects";
import { feacthGet } from "../../api/feacth";

//[GET]: https://jsonplaceholder.typicode.com/todos/1
function* fetchNews() {
  const payload = yield feacthGet("get", "albums").then((response) => response.data);
  yield put({ type: "NEW_RECEIVED", payload: payload });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

//[GET]: https://jsonplaceholder.typicode.com/posts
function* fetchPost() {
  const payload = yield feacthGet("get", "posts").then((response) => response.data);
  yield put({ type: "POST_RECEIVED", payload: payload });
}

function* actionWatcherPost() {
  yield takeLatest("GET_POST", fetchPost);
}

//RootSaga
export default function* rootSaga() {
  yield all([actionWatcher(),actionWatcherPost()]);
}
