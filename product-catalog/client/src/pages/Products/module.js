/**
 * Following the duck pattern, actions, constants and reducers are in the same file called module.js
 *
 * See: https://github.com/erikras/ducks-modular-redux
 *
 */

 /**
 * Constants should be scoped to their module: use the string Products/ADD_ITEM instead of ADD_ITEM
 */
export const SELECT_ITEM = 'Products/SELECT_ITEM'
export const FETCH_PRODUCTS_SUCCESS = 'Products/FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'Products/FETCH_PRODUCTS_FAILURE'

export function selectItem (sku) {
  return {
    type: SELECT_ITEM,
    payload: sku
  }
}

export function fetchProductsSuccess (products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

const initialState = {
  list: [],
  selectedItem: null,
  error: null
}

/**
 * Following the duck pattern, the module.js file should export a reducer as a default function
 */
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
