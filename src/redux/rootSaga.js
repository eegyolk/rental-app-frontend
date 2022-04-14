import { takeLatest } from 'redux-saga/effects';
import {
  QUERY_ANNOUNCEMENT,
  QUERY_PROPERTY_TYPES,
} from '../Pages/HomePage/reducer/actionTypes';
import {
  handleQueryAnnouncement,
  handleQueryPropertyTypes,
} from '../Pages/HomePage/saga/handlers';

export function* watcherSaga() {
  yield takeLatest(QUERY_ANNOUNCEMENT, handleQueryAnnouncement);
  yield takeLatest(QUERY_PROPERTY_TYPES, handleQueryPropertyTypes);
}
