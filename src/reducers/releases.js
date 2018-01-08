import { createReducer } from './util';
import { FETCH_LAST_RELEASE_SUCCESS } from '../actions/releases';

const initialState = {
    latest: {}
};

export default createReducer(initialState, {
    [FETCH_LAST_RELEASE_SUCCESS]: (state, action) => {
        return {
            ...state,
            latest: action.payload.data
        };
    }
})