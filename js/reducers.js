'use strict'

// receives 'action' from actions.js
// for now we only have one state item so
// we don't worry about copying previous state over
// (as you should never mutate a state, must return a new one)
// we can start with a blank state
// 'return' is passed to the store
export function userStatus(state={}, action) {
    switch (action.type) {
      case 'LOGGED_IN':
        return {loggedIn: 'true'}
      case 'LOGGED_OUT':
        return {loggedIn: 'false'}
      default:
        return {loggedIn: 'false'}
    }
}