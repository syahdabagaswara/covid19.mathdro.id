import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.mainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate,
  );

const makeSelectFeatured = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.featured,
  );

const makeSelectConfirmed = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.confirmed,
  );

const makeSelectDeaths = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.deaths,
  );

const makeSelectRecovered = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.recovered,
  );

export default makeSelectMainPage;
export {
  selectMainPageDomain,
  makeSelectFeatured,
  makeSelectConfirmed,
  makeSelectDeaths,
  makeSelectRecovered,
};
