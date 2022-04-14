import { call, put } from 'redux-saga/effects';
import {
  mutateAnnouncementIsFetching,
  mutateAnnouncement,
  mutateAnnouncementError,
  mutatePropertyTypesIsFetching,
  mutatePropertyTypes,
  mutatePropertyTypesError,
} from '../reducer/actionTypes';
import {
  requestQueryAnnouncement,
  requestQueryPropertyTypes,
} from './requesters';

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

export function* handleQueryPropertyTypes() {
  try {
    yield put(mutatePropertyTypesIsFetching(true));

    const response = yield call(requestQueryPropertyTypes);
    const { data } = response;
    yield put(mutatePropertyTypes(data.data.propertyTypes));
  } catch (error) {
    if (error.hasOwnProperty('response')) {
      const { status, data } = error.response;

      yield put(
        mutatePropertyTypesError(
          `Error in handleQueryPropertyTypes: Got status ${status}, due to "${data.errors
            .map((item) => item.message)
            .join(', ')
            .replace(/\"/g, "'")}"`
        )
      );
    } else {
      yield put(mutatePropertyTypesError(error.message));
    }
  } finally {
    yield put(mutatePropertyTypesIsFetching(false));
  }
}
