'use strict'

/*
 * action types
 */
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'

/*
 * action creators - pass 
 */
export function setLoggedIn(status) {
    // if type is LOGGED_IN, 
    // pass status of LOGGED-IN received from dispatcher to reducer
  return {type: LOGGED_IN, status}
}
export function setLoggedOut(status) {
  return {type: LOGGED_OUT, status}
}