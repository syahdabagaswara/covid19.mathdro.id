import { all, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { loadFeaturedSuccess, loadFeaturedError } from './actions';

export function* loadFeatured() {
  const requestURL = `https://covid19.mathdro.id/api/`;
  try {
    const res = yield call(request, requestURL);
    yield put(
      loadFeaturedSuccess(res, res.confirmed, res.deaths, res.recovered),
    );
  } catch (error) {
    yield put(loadFeaturedError(error));
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadFeatured()]);
}
