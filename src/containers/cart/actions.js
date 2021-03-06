export const GET_CART = 'cart/GET_CART';
export const CART_RESULT = 'cart/CART_RESULT';
export const CLEAR_CART = 'cart/CLEAR_CART';

export const fetchCart = products => ({type: GET_CART, products});

export const cartResult = cart => ({type: CART_RESULT, cart});

export const clearCart = () => ({type: CLEAR_CART});