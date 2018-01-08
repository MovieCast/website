import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerActions } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import api from './middleware/api';

import * as releasesActions from '../actions/releases';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  api,
  routerMiddleware(history)
];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension;

//   if (typeof devToolsExtension === 'function') {

//     

//     enhancers.push(devToolsExtension());
//   }
// }

const actionCreators = {
    ...releasesActions,
    ...routerActions,
  };

const composeEnhancers = composeWithDevTools({
  actionCreators
});

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;