/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_FEATURED,
  LOAD_FEATURED_SUCCESS,
  LOAD_FEATURED_ERROR,
} from './constants';

export function loadFeatured(data) {
  return {
    type: LOAD_FEATURED,
    data,
  };
}

export function loadFeaturedSuccess(featured, confirmed, deaths, recovered) {
  return {
    type: LOAD_FEATURED_SUCCESS,
    featured,
    confirmed,
    deaths,
    recovered,
  };
}

export function loadFeaturedError(error) {
  return {
    type: LOAD_FEATURED_ERROR,
    error,
  };
}
