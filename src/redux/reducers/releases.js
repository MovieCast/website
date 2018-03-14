import { createReducer } from '../util';
import { FETCH_LAST_RELEASE_SUCCESS } from '../action.types';

const initialState = {
    latest: null
};

export default createReducer(initialState, {
    [FETCH_LAST_RELEASE_SUCCESS]: (state, action) => {
        return {
            ...state,
            latest: action.payload
        };
    }
})