/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  margin-left: 200px;
  margin-top: 78px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Navbar />
      <Sidebar />
      <Content>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Content>
      <GlobalStyle />
    </AppWrapper>
  );
}
