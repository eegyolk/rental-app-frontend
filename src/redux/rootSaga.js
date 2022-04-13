import { takeLatest } from 'redux-saga/effects';
import { QUERY_ANNOUNCEMENT } from '../Pages/HomePage/reducer/actionTypes';
import { handleQueryAnnouncement } from '../Pages/HomePage/saga/handlers';

export function* watcherSaga() {
  yield takeLatest(QUERY_ANNOUNCEMENT, handleQueryAnnouncement);
}
