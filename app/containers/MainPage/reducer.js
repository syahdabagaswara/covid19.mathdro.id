/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_FEATURED,
  LOAD_FEATURED_SUCCESS,
  LOAD_FEATURED_ERROR,
} from './constants';

export const initialState = {
  featured: [],
  confirmed: {},
  deaths: {},
  recovered: {},
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FEATURED:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_FEATURED_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.featured = action.featured;
        draft.confirmed = action.confirmed;
        draft.deaths = action.deaths;
        draft.recovered = action.recovered;
        break;
      case LOAD_FEATURED_ERROR:
        draft.loading = true;
        draft.error = action.error;
        break;
      default:
        break;
    }
  });

export default mainPageReducer;
