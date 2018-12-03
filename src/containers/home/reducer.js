import Immutable from 'seamless-immutable'

import {ADD_TO_CART, PRODUCTS_LIST_RESULT} from './actions'

export const initialState = Immutable({
  products: [],
  cart: []
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LIST_RESULT:
      return state.set('products', action.products);
    case ADD_TO_CART:
      return state.set('cart', action.cart);
    default:
      return state
  }
}

export default homeReducer;
