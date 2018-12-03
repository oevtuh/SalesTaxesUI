import Immutable from 'seamless-immutable'

import {CART_RESULT, CLEAR_CART} from './actions'

export const initialState = Immutable({
  cart: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CART_RESULT:
      return state.set('cart', action.cart);
    case CLEAR_CART:
      return state.set('cart', '');
    default:
      return state
  }
}

export default homeReducer;
