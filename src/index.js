import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import store, { history } from './redux/store/createStore';

import 'typeface-roboto';

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,
  document.getElementById('root')
);