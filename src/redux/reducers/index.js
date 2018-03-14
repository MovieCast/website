import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import releasesReducer from './releases';
import settingsReducer from './settings';

export default combineReducers({
  routing: routerReducer,
  releases: releasesReducer,
  settings: settingsReducer
});