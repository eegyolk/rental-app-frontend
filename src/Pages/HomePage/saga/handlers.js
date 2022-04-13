import { call, put } from 'redux-saga/effects';
import {
  mutateAnnouncementIsFetching,
  mutateAnnouncement,
  mutateAnnouncementError,
} from '../reducer/actionTypes';
import { requestQueryAnnouncement } from './requesters';

export function* handleQueryAnnouncement() {
  try {
    yield put(mutateAnnouncementIsFetching(true));

    const response = yield call(requestQueryAnnouncement);
    const { data } = response;
    yield put(mutateAnnouncement(data.data.announcements[0]));
  } catch (error) {
    if (error.hasOwnProperty('response')) {
      const { status, data } = error.response;

      yield put(
        mutateAnnouncementError(
          `Error in handleQueryAnnouncement: Got status ${status}, due to "${data.errors
            .map((item) => item.message)
            .join(', ')
            .replace(/\"/g, "'")}"`
        )
      );
    } else {
      yield put(mutateAnnouncementError(error.message));
    }
  } finally {
    yield put(mutateAnnouncementIsFetching(false));
  }
}
