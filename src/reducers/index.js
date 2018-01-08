import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import releasesReducer from './releases';

export default combineReducers({
  routing: routerReducer,
  releases: releasesReducer
});