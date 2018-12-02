/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux-seamless-immutable'
import Immutable from 'seamless-immutable'
import {LOCATION_CHANGE} from 'react-router-redux'
import homeReducer from './containers/home/reducer'
import cartReducer from './containers/cart/reducer'

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = Immutable({
  location: null,
})

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    home: homeReducer,
    cart: cartReducer,
    route: routeReducer,
    ...injectedReducers,
  })
}
