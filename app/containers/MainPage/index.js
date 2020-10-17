/**
 *
 * MainPage
 *
 */

import './style.css';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectFeatured,
  makeSelectConfirmed,
  makeSelectDeaths,
  makeSelectRecovered,
} from './selectors';
import { loadFeatured } from './actions';
import reducer from './reducer';
import saga from './saga';

export function MainPage({ confirmed, deaths, recovered }) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });
  const options = {
    animationEnabled: true,
    theme: `'light2'`, // "light1", "dark1", "dark2"
    axisY2: {
      suffix: 'K',
    },
    axisX: {
      title: 'Week of Year',
      prefix: 'W',
      interval: 2,
    },
    data: [
      {
        type: 'line',
        toolTipContent: 'Week {x}: {y}%',
        axisYType: 'secondary',
        dataPoints: [
          { x: 1, y: 10 },
          { x: 2, y: 80 },
          { x: 3, y: 90 },
          { x: 4, y: 62 },
          { x: 5, y: 64 },
          { x: 6, y: 100 },
          { x: 7, y: 58 },
          { x: 8, y: 70 },
          { x: 9, y: 180 },
        ],
      },
    ],
  };
  return (
    <div className="container">
      <h3>Codemi Home</h3>
      <div className="card">
        <div className="row">
          <div className="col">
            <h4 className="label-category">Confirmed</h4>
            <p className="value-category">{confirmed.value}</p>
          </div>
          <div className="col">
            <h4 className="label-category">Deaths</h4>
            <p className="value-category">{deaths.value}</p>
          </div>
          <div className="col">
            <h4 className="label-category">Recovered</h4>
            <p className="value-category">{recovered.value}</p>
          </div>
        </div>
        <CanvasJSChart options={options} className="chart" />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  confirmed: PropTypes.object,
  deaths: PropTypes.object,
  recovered: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  featured: makeSelectFeatured(),
  confirmed: makeSelectConfirmed(),
  deaths: makeSelectDeaths(),
  recovered: makeSelectRecovered(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadFeatured: data => dispatch(loadFeatured(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MainPage);
