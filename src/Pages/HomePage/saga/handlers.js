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

    yield put(mutateAnnouncementIsFetching(false));
  } catch ({ response }) {
    const { status, data } = response;

    yield put(
      mutateAnnouncementError(
        `Error in handleQueryAnnouncement: Got status ${status}, due to "${data.errors
          .map((item) => item.message)
          .join(', ')
          .replace(/\"/g, "'")}"`
      )
    );
  }
}
