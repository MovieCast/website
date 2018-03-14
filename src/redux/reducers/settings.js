import { createReducer } from '../util';
import { DETECT_USER_AGENT } from '../action.types';

const initialState = {
  userAgent: 'unknown'
};

export default createReducer(initialState, {
  [DETECT_USER_AGENT]: (state, action) => {
    return {
      ...state,
      userAgent: action.payload
    };
  }
})