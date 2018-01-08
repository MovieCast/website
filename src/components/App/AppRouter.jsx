import React, { Component } from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import AppContent from './AppContent';
import AppFrame from './AppFrame';

import Home from '../../containers/Home';
//import About from '../pages/About/About';

export default class AppRouter extends Component {
  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <AppFrame>
          <AppContent>
            <Switch>
              {/* <Route path="/about" component={About} /> */}
              <Route path="/" component={Home} />
            </Switch>
          </AppContent>
        </AppFrame>
      </Router>
    );
  }
}