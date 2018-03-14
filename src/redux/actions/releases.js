/* eslint-disable default-case */

import axios from 'axios';

import { FETCH_LAST_RELEASE_REQUEST, FETCH_LAST_RELEASE_SUCCESS, FETCH_LAST_RELEASE_FAILURE } from '../action.types';

export function fetchLastRelease() {
  return {
    types: [FETCH_LAST_RELEASE_REQUEST, FETCH_LAST_RELEASE_SUCCESS, FETCH_LAST_RELEASE_FAILURE],
    request: () => axios.get('https://api.github.com/repos/MovieCast/desktop/releases/latest'),
    parser: ({ data }) => {
      const release = {
        name: data.name,
        version: data.tag_name.replace('v', ''),
        assets: {
          win: [],
          mac: [],
          linux: []
        }
      }

      for(const asset of data.assets) {
        switch(asset.name.split('.').pop()) {
          case 'exe':
            release.assets.win.push(asset);
            break;
          case 'dmg':
            release.assets.mac.push(asset)
            break;
          case 'deb':
          case 'AppImage':
            release.assets.linux.push(asset)
            break;
          // case 'zip':
          //   if(/mac/.test(asset.name))
          //     release.assets.mac.push(asset)
        }
      }

      return release;
    }
  }
}