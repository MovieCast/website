import axios from 'axios';

export const FETCH_LAST_RELEASE_REQUEST = 'FETCH_LAST_RELEASE_REQUEST';
export const FETCH_LAST_RELEASE_SUCCESS = 'FETCH_LAST_RELEASE_SUCCESS';
export const FETCH_LAST_RELEASE_FAILURE = 'FETCH_LAST_RELEASE_FAILURE';

export function fetchLastRelease() {
    return {
        types: [FETCH_LAST_RELEASE_REQUEST, FETCH_LAST_RELEASE_SUCCESS, FETCH_LAST_RELEASE_FAILURE],
        request: () => axios.get('https://api.github.com/repos/MovieCast/desktop/releases/latest'),
    }
}