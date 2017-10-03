/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { LOCATION_CHANGE } from 'react-router-redux'

/**
 * Example of the Page module which should export a reducer.
 */
import product from '../pages/Products/module'

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null
}

/**
 * Merge route into the global application state
 */
function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return { ...state, locationBeforeTransitions: action.payload }
    default:
      return state
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer (asyncReducers) {
  return combineReducers({
    routing: routeReducer,
    ...asyncReducers,
    product
  })
}
