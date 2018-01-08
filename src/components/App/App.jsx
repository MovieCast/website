import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';

import withRoot from './withRoot';

class App extends Component {
  render() {
    const {store, history} = this.props;

    return (
      <Provider store={store}>
        <AppRouter history={history}/>
      </Provider>
    );
  }
}

export default withRoot(App);