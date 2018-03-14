import { DETECT_USER_AGENT } from "../action.types";

export function detectUserAgent() {
  function detect() {
    if (/Win/.test(navigator.platform)) {
      return 'win';
    }
    if (/Mac/.test(navigator.platform)) {
      return 'mac';
    }
    if (/Android/.test(navigator.userAgent)) {
      return 'android';
    }
    if (/Lin/.test(navigator.platform)) {
      return 'linux';
    }
  }

  return {
    type: DETECT_USER_AGENT,
    payload: detect() || 'unknown'
  }
}