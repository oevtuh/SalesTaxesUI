import Immutable from 'seamless-immutable'

import {ADD_TO_CART, PRODUCTS_LIST_RESULT} from './actions'

export const initialState = Immutable({
  products: [],
  cart: []
});

function homeReducer(state = initialState, action) {
  console.log('reducer', state);
  switch (action.type) {
    case PRODUCTS_LIST_RESULT:
      return state.set('products', action.products);
    case ADD_TO_CART:
      return state.set('cart', state.cart.concat([action.product]));
    default:
      return state
  }
}

export default homeReducer;
